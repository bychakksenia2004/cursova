import React from "react";
import Link from "next/link";
import { getUserFromCookieServer } from "../../../lib/auth";
import { connectToDB } from "../../../lib/mongodb";
import Attempt from "../../../lib/models/Attempt";
import mongoose from "mongoose";
import Test from "../../../lib/models/Test";

type Props = { params: any };

export default async function AttemptDetailPage({ params }: Props) {
  const { attemptId } = await params;
  await connectToDB();
  const viewer = await getUserFromCookieServer();
  if (!viewer) {
    return (
      <div className="container min-vh-100 d-flex flex-column align-items-center">
        <h2 className="mb-3">Потрібно увійти</h2>
        <div className="menu-box w-100">
          <div className="alert alert-warning">Щоб переглянути свої відповіді, будь ласка, увійдіть.</div>
          <div className="mt-2"><Link href="/login" className="btn btn-primary">Увійти</Link></div>
        </div>
      </div>
    );
  }

  let attempt: any = null;
  try {
    console.log("[AttemptDetailPage] looking up attemptId:", attemptId);

    // Try several lookup strategies so we handle string vs ObjectId shapes
    const triedIds = new Set<string>();
    const candidates = [attemptId, String(attemptId).replace(/^"|"$/g, ""), String(attemptId).trim()];
    for (const cand of candidates) {
      if (!cand || triedIds.has(cand)) continue;
      triedIds.add(cand);
      try {
        attempt = await Attempt.findById(cand).lean();
        if (attempt) {
          console.log("[AttemptDetailPage] found by findById with candidate:", cand);
          break;
        }
      } catch (e) {
        const err = e as any;
        console.warn("[AttemptDetailPage] findById failed for candidate:", cand, { message: err?.message ?? String(err), stack: err?.stack });
      }

      try {
        attempt = await Attempt.findOne({ _id: cand }).lean();
        if (attempt) {
          console.log("[AttemptDetailPage] found by findOne with candidate:", cand);
          break;
        }
      } catch (e) {
        const err = e as any;
        console.warn("[AttemptDetailPage] findOne failed for candidate:", cand, { message: err?.message ?? String(err), stack: err?.stack });
      }

      // try ObjectId conversion if possible
      try {
        if (mongoose.isValidObjectId(cand)) {
          attempt = await Attempt.findById(new mongoose.Types.ObjectId(cand)).lean();
          if (attempt) {
            console.log("[AttemptDetailPage] found by ObjectId conversion for:", cand);
            break;
          }
        }
      } catch (e) {
        const err = e as any;
        console.warn("[AttemptDetailPage] ObjectId lookup failed for:", cand, { message: err?.message ?? String(err), stack: err?.stack });
      }
    }

    console.log("[AttemptDetailPage] attempt found:", !!attempt);
  } catch (err) {
    console.error("[AttemptDetailPage] unexpected error during lookup:", err);
  }

  if (!attempt) {
    // Render a helpful debug page in dev to show the attempted id instead of a generic 404
    return (
      <div className="container d-flex flex-column align-items-center min-vh-100">
        <h2 className="mb-3">Спроба не знайдена (Debug)</h2>
        <div className="menu-box w-100">
          <div className="alert alert-warning">Спроба з id <strong>{attemptId}</strong> не знайдена в базі даних.</div>
          <div className="mb-2 text-muted">Перевірте, що записи збережуються при проходженні тесту та що id правильно передається.</div>
          <div className="mt-2"><Link href="/history" className="btn btn-outline-secondary">Назад</Link></div>
        </div>
      </div>
    );
  }

  const test = await Test.findById(attempt.testId).lean();
  // Allow viewing if viewer is the attempt owner OR the author of the test
  const isAttemptOwner = attempt.userId && String(attempt.userId) === String(viewer._id);
  const isTestAuthor = test && test.authorId && String(test.authorId) === String(viewer._id);
  const isTestAuthorWithStorage = !!test && !!test.storeResponses && isTestAuthor;
  if (!isAttemptOwner && !isTestAuthorWithStorage) {
    return (
      <div className="container min-vh-100 d-flex flex-column align-items-center">
        <h2 className="mb-3">Доступ заборонено</h2>
        <div className="menu-box w-100">
          <div className="alert alert-danger">Ви можете переглядати лише власні спроби або як автор тесту.</div>
          <div className="mt-2"><Link href="/history" className="btn btn-outline-secondary">Назад</Link></div>
        </div>
      </div>
    );
  }
  if (!test) {
    return (
      <div className="container min-vh-100 d-flex flex-column align-items-center">
        <h2 className="mb-3">Тест видалено</h2>
        <div className="menu-box w-100">
          <div className="alert alert-warning">Цей тест було видалено, але спроба все ще збережена.</div>
          <div className="mt-2"><Link href="/history" className="btn btn-outline-secondary">Назад</Link></div>
        </div>
      </div>
    );
  }

  // Enforce ownResultView restrictions: authors always see everything; attempt owners see according to ownResultView.
  const ownView = test.ownResultView || "full";
  const canViewDetails = isTestAuthorWithStorage || (isAttemptOwner && ownView === "full");
  const canViewTotals = isTestAuthorWithStorage || (isAttemptOwner && (ownView === "full" || ownView === "score_only"));

  if (!canViewTotals && !canViewDetails) {
    return (
      <div className="container min-vh-100 d-flex flex-column align-items-center">
        <h2 className="mb-3">Доступ заборонено</h2>
        <div className="menu-box w-100">
          <div className="alert alert-danger">Власник тесту заборонив перегляд результатів цього тесту.</div>
          <div className="mt-2"><Link href="/history" className="btn btn-outline-secondary">Назад</Link></div>
        </div>
      </div>
    );
  }

  const answers = attempt.answers || {};
  const perQuestion = attempt.perQuestion || [];

  function findPQ(qid: any) {
    return (perQuestion || []).find((p: any) => String(p.id) === String(qid));
  }

  // Prepare questions for display (no shuffling — show canonical order)
  // Accept some type aliases used in client (`single`, `multi`) so rendering matches take page
  const qs = Array.isArray(test.questions) ? test.questions.map((q: any) => {
    const copy: any = { ...q };
    const qtype = (q.type || "").toString();
    if (qtype === "matching") {
      const lefts = (q.pairs || []).map((p: any, i: number) => ({ pairId: p.id ?? p._id ?? `p-${i}`, text: p.left }));
      const rights = (q.pairs || []).map((p: any, i: number) => ({ pairId: p.id ?? p._id ?? `p-${i}`, text: p.right }));
      copy._displayLeft = lefts;
      copy._displayRight = rights;
    }
    if (qtype === "sequence" || qtype === "single_choice" || qtype === "multi_choice" || qtype === "single" || qtype === "multi") {
      copy._displayOptions = q.options || q.data?.options || [];
      // normalize common aliases so rendering checks match
      if (qtype === "single") copy.type = "single_choice";
      if (qtype === "multi") copy.type = "multi_choice";
    }
    return copy;
  }) : [];

  return (
    <div className="container d-flex flex-column align-items-center min-vh-100">
      <h2 className="mb-3">{test.title}</h2>
      <div className="text-muted mb-3">Проходження: {new Date(attempt.createdAt).toLocaleString()}</div>
      {typeof attempt.totalScore === "number" && typeof attempt.totalPossible === "number" ? (
        <div className="mb-3"><strong>Результат:</strong> {attempt.totalScore} / {attempt.totalPossible}</div>
      ) : null}

      <div className="menu-box w-100">
        {qs.map((q: any, idx: number) => {
          // answers keys in DB may be strings ("123") or numbers (123)
          const userAns = answers[q.id] ?? answers[String(q.id)];
          const pq = findPQ(q.id);
          return (
            <div key={q.id} className="mb-4">
              <div className="d-flex justify-content-between mb-1">
                <div className="fw-semibold">{idx + 1}. {q.text}</div>
                <div className="text-muted small">
                  {pq ? `бали: ${pq.score} / ${pq.points}` : (typeof attempt.totalScore === "number" ? `бали: — / ${q.points ?? (pq && pq.points) ?? "?"}` : "")}
                </div>
              </div>
              {q.imageUrl ? <div className="mb-2"><img src={q.imageUrl} alt="qimg" style={{ maxWidth: "40%" }} /></div> : null}

              {q.type === "single_choice" ? (
                <div>{(q._displayOptions || []).map((opt: any) => (
                  <label key={opt.id} className="d-block mb-1">
                    <input type="radio" name={`q-${q.id}`} disabled checked={String(userAns) === String(opt.id)} /> {opt.text}
                  </label>
                ))}</div>
              ) : q.type === "multi_choice" ? (
                <div>{(q._displayOptions || []).map((opt: any) => (
                  <label key={opt.id} className="d-block mb-1">
                    <input type="checkbox" disabled checked={Array.isArray(userAns) && userAns.map(String).includes(String(opt.id))} /> {opt.text}
                  </label>
                ))}</div>
              ) : q.type === "sequence" ? (
                <div className="list-group">
                  {(q._displayOptions || []).map((it: any) => (
                    <div key={it.id} className="list-group-item bg-transparent border-0 d-flex align-items-center gap-3">
                      <div className="flex-fill">{it.text}</div>
                      <div className="w-50"><input className="form-control" value={(userAns && (userAns[it.id] ?? userAns[String(it.id)])) || ""} disabled /></div>
                    </div>
                  ))}
                </div>
              ) : q.type === "matching" ? (
                <div className="list-group">
                  {(q._displayLeft || []).map((l: any) => (
                    <div key={l.pairId} className="list-group-item bg-transparent border-0 d-flex align-items-center gap-3">
                      <div className="flex-fill">{l.text}</div>
                      <div className="w-50">
                        <select className="form-select" value={(userAns && (userAns[l.pairId] ?? userAns[String(l.pairId)] ?? ""))} disabled>
                          <option value="">-- Відповідність --</option>
                          {(q._displayRight || []).map((r: any) => (
                            <option key={r.pairId} value={r.pairId}>{r.text}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              ) : q.type === "open" ? (
                <div><textarea className="form-control" rows={3} value={userAns || ""} disabled /></div>
              ) : null}
            </div>
          );
        })}

        <div className="d-flex gap-2">
          <Link href="/history" className="btn btn-outline-secondary">Назад до історії</Link>
        </div>
      </div>
    </div>
  );
}
