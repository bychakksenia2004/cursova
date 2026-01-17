import { NextResponse } from "next/server";
import { connectToDB } from "../../../../../lib/mongodb";
import Test from "../../../../../lib/models/Test";
import Attempt from "../../../../../lib/models/Attempt";
import { getUserFromCookieServer } from "../../../../../lib/auth";

export async function POST(req: Request, ctx: any) {
  try {
    const params = await ctx.params;
    const id = params?.id;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
    const body = await req.json();
    const answers: Record<string, any> = body?.answers || {};
    // Sanitize answers by serializing and parsing to remove prototypes and ensure plain objects
    const sanitizedAnswers: Record<string, any> = JSON.parse(JSON.stringify(answers || {}));

    console.log("/api/public-tests/[id]/submit received answers:", sanitizedAnswers);

    await connectToDB();
    const test = await Test.findById(String(id)).lean();
    if (!test) return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (test.visibility !== "public") return NextResponse.json({ error: "Not public" }, { status: 403 });

    // If the test requires storing responses, require an authenticated user to take it
    let viewer: any = null;
    if (test.storeResponses) {
      viewer = await getUserFromCookieServer();
      if (!viewer) return NextResponse.json({ error: "Authentication required to take this test" }, { status: 401 });
    } else {
      // attach viewer if present (optional)
      try { viewer = await getUserFromCookieServer(); } catch {}
    }

    let totalPossible = 0;
    let totalScore = 0;
    const perQuestion: Array<any> = [];

    for (const q of (test.questions || [])) {
      const qid = q.id;
      const qpoints = (typeof q.points === "number" ? q.points : 1);
      totalPossible += qpoints;
      const userAns = sanitizedAnswers[qid] ?? sanitizedAnswers[String(qid)];
      let score = 0;

      if (q.type === "single_choice") {
        // find correct option id
        const correct = (q.options || []).find((o: any) => o.correct === true);
        if (correct && typeof userAns !== "undefined" && String(userAns) === String(correct.id)) {
          score = qpoints;
        }
      } else if (q.type === "multi_choice") {
        const opts = (q.options || []);
        const correctIds = opts.filter((o: any) => o.correct === true).map((o: any) => String(o.id));
        const userIds = Array.isArray(userAns) ? userAns.map((x: any) => String(x)) : [];
        // award full points only if user selected exactly all correct and no incorrect
        const selectedSet = new Set(userIds);
        const correctSet = new Set(correctIds);
        let allCorrect = correctIds.length > 0 && correctIds.every((c: string) => selectedSet.has(c));
        // also ensure no incorrect selected
        const noIncorrect = userIds.every((u: string) => correctSet.has(u));
        if (allCorrect && noIncorrect) score = qpoints;
      } else if (q.type === "sequence") {
        // userAns expected to be mapping itemId -> position
        const opts = (q.options || []);
        // require all items have positions and match the correct 'order'
        const allMatch = opts.length > 0 && opts.every((it: any) => {
          const correctPos = Number(it.order);
          const provided = userAns && Object.prototype.hasOwnProperty.call(userAns, it.id) ? Number(userAns[it.id]) : undefined;
          return typeof provided !== "undefined" && provided === correctPos;
        });
        if (allMatch) score = qpoints;
      } else if (q.type === "matching") {
        // userAns expected mapping leftPairId -> rightPairId
        const pairs = (q.pairs || []);
        const totalPairs = pairs.length || 0;
        let correctMatches = 0;
        for (const p of pairs) {
          const pid = String(p.id);
          const userMap = userAns || {};
          if (Object.prototype.hasOwnProperty.call(userMap, pid)) {
            const chosen = String(userMap[pid] ?? "");
            // correct is when chosen equals the same pair id (pairing by id)
            if (chosen === pid) correctMatches++;
          }
        }
        if (totalPairs > 0) score = (qpoints * (correctMatches / totalPairs));
      } else if (q.type === "open") {
        // open: compare trimmed, case-insensitive to any of stored answers
        const expected = (q.answers || []).map((a: any) => String(a || "").trim().toLowerCase());
        const provided = typeof userAns === "string" ? String(userAns).trim().toLowerCase() : "";
        if (provided && expected.includes(provided)) score = qpoints;
      }

      // round to 3 decimals to avoid floating noise
      score = Math.round((score + Number.EPSILON) * 1000) / 1000;
      perQuestion.push({ id: qid, type: q.type, points: qpoints, score });
      totalScore += score;
    }

    totalScore = Math.round((totalScore + Number.EPSILON) * 1000) / 1000;

    // If responses are not stored and the taker is anonymous, do NOT persist the attempt.
    // Instead, return the computed results according to the test's ownResultView setting.
    if (!viewer && !test.storeResponses) {
      const ownView = test.ownResultView || "full";
      const resp: any = { ok: true };
      if (ownView === "full") {
        resp.totalScore = totalScore;
        resp.totalPossible = totalPossible;
        resp.perQuestion = perQuestion;
      } else if (ownView === "score_only") {
        resp.totalScore = totalScore;
        resp.totalPossible = totalPossible;
      } else {
        // 'nothing' -> do not reveal totals or answers
      }
      return NextResponse.json(resp, { status: 200 });
    }

    // Save attempt record for authenticated users (or when storeResponses is enabled)
    let createdAttempt: any = null;
    try {
      // Prevent duplicate attempts for authenticated users: if a recent attempt
      // by the same user on the same test has identical answers, return that
      // attempt instead of creating a duplicate.
      if (viewer) {
        try {
          const recent = await Attempt.find({ userId: viewer._id, testId: test._id }).sort({ createdAt: -1 }).limit(5).lean();
          const payloadStr = JSON.stringify(sanitizedAnswers || {});
          const now = Date.now();
          for (const r of recent) {
            try {
              const rStr = JSON.stringify(r.answers || {});
              const ageMs = now - new Date(r.createdAt).getTime();
              // consider duplicates if within 60 seconds
              if (rStr === payloadStr && ageMs >= 0 && ageMs <= 60000) {
                console.log("Duplicate submit detected, returning existing attempt:", String(r._id));
                return NextResponse.json({ ok: true, totalScore: r.totalScore, totalPossible: r.totalPossible, perQuestion: r.perQuestion, attemptId: String(r._id), savedAnswers: r.answers }, { status: 200 });
              }
            } catch {}
          }
        } catch (err) {
          console.warn("Duplicate check failed:", err);
        }
      }

      createdAttempt = await Attempt.create({
        userId: viewer ? viewer._id : null,
        testId: test._id,
        answers: sanitizedAnswers,
        totalScore,
        totalPossible,
        perQuestion,
        createdAt: new Date(),
      });
      console.log("/api/public-tests/[id]/submit created attempt id:", String(createdAttempt._id));
    } catch (err) {
      console.error("Failed to save attempt:", err);
      return NextResponse.json({ error: "Failed to save attempt" }, { status: 500 });
    }

    return NextResponse.json({ ok: true, totalScore, totalPossible, perQuestion, attemptId: String(createdAttempt._id), savedAnswers: createdAttempt.answers }, { status: 200 });
  } catch (err: any) {
    console.error("/api/public-tests/[id]/submit POST error:", err);
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
