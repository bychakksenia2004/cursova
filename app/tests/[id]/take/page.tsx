"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

type Q = any;

export default function TakePageClient() {
  const params = useParams();
  const id = params?.id;
  const router = useRouter();
  const [test, setTest] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  useEffect(() => {
    let mounted = true;
    async function load() {
      if (!id) return;
      try {
        const res = await fetch(`/api/public-tests/${id}`);
        if (!res.ok) {
          console.warn(await res.text());
          if (mounted) setLoading(false);
          return;
        }
        const data = await res.json();
        if (mounted) {
          // create shuffled display order for options/pairs per question
          function shuffleArray<T>(arr: T[]) {
            const a = Array.isArray(arr) ? [...arr] : [];
            for (let i = a.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              const tmp = a[i];
              a[i] = a[j];
              a[j] = tmp;
            }
            return a;
          }
          const t = data.test;
          const mapped = Array.isArray(t.questions) ? t.questions.map((q: any) => {
            const copy: any = { ...q };
            const opts = q.options || q.data?.options || [];
            const pairs = q.pairs || q.data?.pairs || [];
            if (q.type === "single_choice" || q.type === "single" || q.type === "multi_choice" || q.type === "multi" || q.type === "sequence") {
              copy._displayOptions = shuffleArray(opts.map((o: any) => ({ ...o })));
            }
            if (q.type === "matching") {
              // For matching, shuffle left and right sides independently so taker must match.
              // Use a robust pairId (p.id || p._id || index) to work with varying DB shapes.
              const lefts = pairs.map((p: any, i: number) => ({ pairId: p.id ?? p._id ?? `p-${i}`, text: p.left }));
              const rights = pairs.map((p: any, i: number) => ({ pairId: p.id ?? p._id ?? `p-${i}`, text: p.right }));
              copy._displayLeft = shuffleArray(lefts);
              copy._displayRight = shuffleArray(rights);
            }
            return copy;
          }) : [];
          setTest({ ...t, questions: mapped });
        }
      } catch (err) {
        console.warn(err);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, [id]);

  function onSingle(q: Q, optionId: number) {
    setAnswers((s) => ({ ...s, [q.id]: optionId }));
  }

  function onMulti(q: Q, optionId: number) {
    setAnswers((s) => {
      const cur: number[] = s[q.id] || [];
      const next = cur.includes(optionId) ? cur.filter((x) => x !== optionId) : [...cur, optionId];
      return { ...s, [q.id]: next };
    });
  }

  function onOpen(q: Q, text: string) {
    setAnswers((s) => ({ ...s, [q.id]: text }));
  }

  function onSequenceChange(q: Q, itemId: string | number, pos: number | "") {
    setAnswers((s) => {
      const cur = typeof s[q.id] === "object" && s[q.id] !== null ? { ...s[q.id] } : {};
      if (pos === "" || pos === null) {
        delete cur[itemId];
      } else {
        cur[itemId] = Number(pos);
      }
      return { ...s, [q.id]: cur };
    });
  }

  function onMatchSelect(q: Q, leftPairId: string | number, rightPairId: string | number) {
    setAnswers((s) => {
      const cur = typeof s[q.id] === "object" && s[q.id] !== null ? { ...s[q.id] } : {};
      cur[leftPairId] = rightPairId;
      return { ...s, [q.id]: cur };
    });
  }

  function onStart() {
    // placeholder: scroll to questions
    const el = document.querySelector(".questions-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function submitLocal() {
    console.log("User answers:", answers);
    alert("Відповіді збережено локально (консоль).");
    router.push("/tests");
  }

  if (loading) return <div className="container min-vh-100">Завантаження...</div>;
  if (!test) return <div className="container min-vh-100">Тест не знайдено або недоступний.</div>;

  return (
    <div className="container d-flex flex-column align-items-center min-vh-100">
      <h2 className="mb-3">{test.title}</h2>
      <div className="text-muted mb-3">Автор: {test.authorId?.username || "(невідомо)"}</div>

      <div className="menu-box w-100 questions-section">
        {Array.isArray(test.questions) && test.questions.map((q: any, idx: number) => (
          <div key={q.id} className="mb-4">
            <div className="fw-semibold">{idx + 1}. {q.text}</div>
            <div className="mt-2">
              {q.type === "single_choice" || q.type === "single" ? (
                <div>
                  {(q._displayOptions || q.options || q.data?.options || []).map((opt: any) => (
                    <label key={opt.id} className="d-block mb-1">
                      <input type="radio" name={`q-${q.id}`} checked={answers[q.id] === opt.id} onChange={() => onSingle(q, opt.id)} /> {opt.text}
                    </label>
                  ))}
                </div>
              ) : q.type === "multi_choice" || q.type === "multi" ? (
                <div>
                  {(q._displayOptions || q.options || q.data?.options || []).map((opt: any) => (
                    <label key={opt.id} className="d-block mb-1">
                      <input type="checkbox" checked={(answers[q.id] || []).includes(opt.id)} onChange={() => onMulti(q, opt.id)} /> {opt.text}
                    </label>
                  ))}
                </div>
              ) : q.type === "sequence" ? (
                <div>
                  <div className="list-group">
                      {((q._displayOptions || q.options || q.data?.options || []) as any[]).map((it: any, i: number) => (
                      <div key={it.id} className="list-group-item bg-transparent border-0 d-flex align-items-center gap-3">
                        <div className="flex-fill">{it.text}</div>
                        <div className="w-50">
                          <input
                            className="form-control bg-white"
                            type="number"
                            min={1}
                            max={(q._displayOptions || q.options || q.data?.options || []).length}
                            value={(answers[q.id] && answers[q.id][it.id]) || ""}
                            onChange={(e) => onSequenceChange(q, it.id, e.target.value === "" ? "" : Number(e.target.value))}
                            placeholder="№ в послідовності"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : q.type === "matching" ? (
                    <div className="list-group">
                      {(q._displayLeft || []).map((l: any) => (
                        <div key={l.pairId} className="list-group-item bg-transparent border-0 d-flex align-items-center gap-3">
                          <div className="flex-fill">{l.text}</div>
                          <div className="w-50">
                            <select
                              className="form-select"
                              value={(answers[q.id] && (answers[q.id][l.pairId] ?? ""))}
                              onChange={(e) => onMatchSelect(q, l.pairId, e.target.value)}
                            >
                              <option value="">-- Виберіть відповідність --</option>
                              {(q._displayRight || []).map((r: any) => (
                                <option key={r.pairId} value={r.pairId}>{r.text}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      ))}
                    </div>
              ) : q.type === "open" ? (
                <div>
                  <textarea className="form-control" rows={3} value={answers[q.id] || ""} onChange={(e) => onOpen(q, e.target.value)} />
                </div>
              ) : null}
            </div>
          </div>
        ))}

        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={submitLocal}>Завершити та надіслати</button>
          <Link href="/tests"><button className="btn btn-outline-secondary">Відмінити</button></Link>
        </div>
      </div>
    </div>
  );
}
