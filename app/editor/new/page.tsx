"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import OpenAnswer from "../../components/testcomponents/OpenAnswer";
import SingleChoice from "../../components/testcomponents/SingleChoice";
import MultiChoice from "../../components/testcomponents/MultiChoice";
import SequenceQuestion from "../../components/testcomponents/SequenceQuestion";
import MatchingQuestion from "../../components/testcomponents/MatchingQuestion";
export default function NewTestPage() {

  const router = useRouter();
  const [newQuestionType, setNewQuestionType] = useState<
    "single" | "multi" | "sequence" | "open" | "matching"
  >("single");

  function addQuestion(type?: "single" | "multi" | "sequence" | "open" | "matching") {
    const qtype = type || newQuestionType;
    const id = Date.now();
    let data: any = {};
    if (qtype === "single" || qtype === "multi") {
      data.options = [
        { id: Date.now() + 1, text: "", correct: true },
        { id: Date.now() + 2, text: "", correct: false },
      ];
    } else if (qtype === "sequence") {
      data.options = [
        { id: Date.now() + 1, text: "", order: 1 },
        { id: Date.now() + 2, text: "", order: 2 },
      ];
    } else if (qtype === "matching") {
      data.pairs = [
        { id: Date.now() + 1, left: "", right: "" },
        { id: Date.now() + 2, left: "", right: "" },
      ];
    } else if (qtype === "open") {
      data.answers = [""];
    }
    setQuestions((s) => [...s, { id, type: qtype, text: "", data }]);
  }

  function updateQuestion(id: number, text: string) {
    setQuestions((s) => s.map((q) => (q.id === id ? { ...q, text } : q)));
  }

  function updateQuestionType(id: number, type: "single" | "multi" | "sequence" | "open" | "matching") {
    setQuestions((s) =>
      s.map((q) => {
        if (q.id !== id) return q;
        let data: any = {};
        if (type === "single" || type === "multi") {
          data.options = [
            { id: Date.now() + 1, text: "", correct: true },
            { id: Date.now() + 2, text: "", correct: false },
          ];
        } else if (type === "sequence") {
          data.options = [
            { id: Date.now() + 1, text: "", order: 1 },
            { id: Date.now() + 2, text: "", order: 2 },
          ];
        } else if (type === "matching") {
          data.pairs = [
            { id: Date.now() + 1, left: "", right: "" },
            { id: Date.now() + 2, left: "", right: "" },
          ];
        } else if (type === "open") {
          data.answers = [""];
        }
        return { ...q, type, data };
      })
    );
  }

  // Options management for single/multi choice
  function ensureOptions(id: number) {
    setQuestions((s) =>
      s.map((q) => {
        if (q.id !== id) return q;
        if (!q.data) q.data = {};
        if (!Array.isArray(q.data.options)) q.data.options = [];
        return { ...q };
      })
    );
  }

  function addOptionToQuestion(id: number) {
    const option = { id: Date.now(), text: "", correct: false };
    setQuestions((s) =>
      s.map((q) => (q.id === id ? { ...q, data: { ...(q.data || {}), options: [...((q.data && q.data.options) || []), option] } } : q))
    );
  }

  function updateOptionText(id: number, optionId: number, text: string) {
    setQuestions((s) =>
      s.map((q) => {
        if (q.id !== id) return q;
        const opts = (q.data && q.data.options) || [];
        return { ...q, data: { ...(q.data || {}), options: opts.map((o: any) => (o.id === optionId ? { ...o, text } : o)) } };
      })
    );
  }

  function removeOption(id: number, optionId: number) {
    setQuestions((s) =>
      s.map((q) => {
        if (q.id !== id) return q;
        const opts = (q.data && q.data.options) || [];
        return { ...q, data: { ...(q.data || {}), options: opts.filter((o: any) => o.id !== optionId) } };
      })
    );
  }

  function toggleOptionCorrect(id: number, optionId: number) {
    setQuestions((s) =>
      s.map((q) => {
        if (q.id !== id) return q;
        const opts = (q.data && q.data.options) || [];
        if (q.type === "single") {
          return { ...q, data: { ...(q.data || {}), options: opts.map((o: any) => ({ ...o, correct: o.id === optionId })) } };
        }
        // multi
        return { ...q, data: { ...(q.data || {}), options: opts.map((o: any) => (o.id === optionId ? { ...o, correct: !o.correct } : o)) } };
      })
    );
  }

  // Sequence (ordering) items management
  function addSequenceItem(id: number) {
    setQuestions((s) =>
      s.map((q) => {
        if (q.id !== id) return q;
        const opts = (q.data && q.data.options) || [];
        const maxOrder = opts.reduce((m: number, it: any) => Math.max(m, Number(it.order || 0)), 0);
        const item = { id: Date.now(), text: "", order: maxOrder + 1 };
        return { ...q, data: { ...(q.data || {}), options: [...opts, item] } };
      })
    );
  }

  function updateSequenceItemText(id: number, itemId: number, text: string) {
    setQuestions((s) =>
      s.map((q) => {
        if (q.id !== id) return q;
        const opts = (q.data && q.data.options) || [];
        return { ...q, data: { ...(q.data || {}), options: opts.map((o: any) => (o.id === itemId ? { ...o, text } : o)) } };
      })
    );
  }

  function updateSequenceItemOrder(id: number, itemId: number, order: number) {
    setQuestions((s) =>
      s.map((q) => {
        if (q.id !== id) return q;
        const opts = (q.data && q.data.options) || [];
        return { ...q, data: { ...(q.data || {}), options: opts.map((o: any) => (o.id === itemId ? { ...o, order } : o)) } };
      })
    );
  }

  function removeSequenceItem(id: number, itemId: number) {
    setQuestions((s) =>
      s.map((q) => {
        if (q.id !== id) return q;
        const opts = (q.data && q.data.options) || [];
        return { ...q, data: { ...(q.data || {}), options: opts.filter((o: any) => o.id !== itemId) } };
      })
    );
  }

  // Matching (pairs) management
  function addPairToQuestion(id: number) {
    const pair = { id: Date.now(), left: "", right: "" };
    setQuestions((s) =>
      s.map((q) => (q.id === id ? { ...q, data: { ...(q.data || {}), pairs: [...((q.data && q.data.pairs) || []), pair] } } : q))
    );
  }

  function updatePairText(id: number, pairId: number, side: "left" | "right", value: string) {
    setQuestions((s) =>
      s.map((q) => {
        if (q.id !== id) return q;
        const pairs = (q.data && q.data.pairs) || [];
        return { ...q, data: { ...(q.data || {}), pairs: pairs.map((p: any) => (p.id === pairId ? { ...p, [side]: value } : p)) } };
      })
    );
  }

  function removePairFromQuestion(id: number, pairId: number) {
    setQuestions((s) =>
      s.map((q) => {
        if (q.id !== id) return q;
        const pairs = (q.data && q.data.pairs) || [];
        return { ...q, data: { ...(q.data || {}), pairs: pairs.filter((p: any) => p.id !== pairId) } };
      })
    );
  }

  // Open answer expected values (array)
  function updateOpenAnswer(id: number, answers: string[]) {
    setQuestions((s) =>
      s.map((q) => (q.id === id ? { ...q, data: { ...(q.data || {}), answers } } : q))
    );
  }

  function removeQuestion(id: number) {
    setQuestions((s) => s.filter((q) => q.id !== id));
  }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState<"public" | "private">("public");
  const [storeResponses, setStoreResponses] = useState<boolean>(true);
  const [ownResultView, setOwnResultView] = useState<"full" | "score_only" | "nothing">("full");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [questions, setQuestions] = useState<
    Array<{ id: number; type: string; text: string; data?: any }>
  >([]);
  const [invalidField, setInvalidField] = useState<null | { qid: number; field: string; idx?: number; message?: string }>(null);

  useEffect(() => {
    try {
      document.title = "TestHub | Новий тест";
    } catch {}
  }, []);

  function validateQuestions() {
    // validate title first
    if (!title || !String(title).trim()) {
      const msg = "Вкажіть назву тесту";
      setError(msg);
      const foundInvalid: { qid: number; field: string; idx?: number; message?: string } = { qid: -1, field: "title", message: msg };
      setInvalidField(foundInvalid);
      const el = document.querySelector(`[data-field="title"]`) as HTMLElement | null;
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        try { (el as HTMLElement).focus(); } catch {}
      }
      return false;
    }

    if (!questions || questions.length === 0) {
      setError("Додайте принаймні одне питання");
      return false;
    }

    let firstInvalidSelector: string | null = null;
    let foundInvalid: null | { qid: number; field: string; idx?: number; message?: string } = null;
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const qNo = i + 1;
      if (!q.text || !String(q.text).trim()) {
        const msg = `Питання ${qNo}: введіть текст питання`;
        setError(msg);
        foundInvalid = { qid: q.id, field: "text", message: msg };
        firstInvalidSelector = `[data-qid="${q.id}"][data-field="text"]`;
        break;
      }
      if (q.type === "single" || q.type === "multi") {
        const opts = (q.data && q.data.options) || [];
        if (!opts || opts.length === 0) {
          const msg = `Питання ${qNo}: додайте варіанти відповіді`;
          setError(msg);
          foundInvalid = { qid: q.id, field: "option", message: msg };
          firstInvalidSelector = `[data-qid="${q.id}"][data-field="option"]`;
          break;
        }
        for (let j = 0; j < opts.length; j++) {
          const o = opts[j];
          if (!o.text || !String(o.text).trim()) {
            const msg = `Питання ${qNo}, варіант ${j + 1}: введіть текст варіанту`;
            setError(msg);
            foundInvalid = { qid: q.id, field: "option", idx: j, message: msg };
            firstInvalidSelector = `[data-qid="${q.id}"][data-field="option"][data-idx="${j}"]`;
            break;
          }
        }
        if (firstInvalidSelector) break;
        const hasCorrect = opts.some((o: any) => !!o.correct);
        if (!hasCorrect) {
          const msg = `Питання ${qNo}: позначте принаймні один правильний варіант`;
          setError(msg);
          foundInvalid = { qid: q.id, field: "option", message: msg };
          firstInvalidSelector = `[data-qid="${q.id}"][data-field="option"]`;
          break;
        }
      } else if (q.type === "sequence") {
        const items = (q.data && q.data.options) || [];
        if (!items || items.length === 0) {
          const msg = `Питання ${qNo}: додайте елементи послідовності`;
          setError(msg);
          foundInvalid = { qid: q.id, field: "sequence", message: msg };
          firstInvalidSelector = `[data-qid="${q.id}"][data-field="sequence"]`;
          break;
        }
        for (let j = 0; j < items.length; j++) {
          if (!items[j].text || !String(items[j].text).trim()) {
            const msg = `Питання ${qNo}, елемент ${j + 1}: введіть текст`;
            setError(msg);
            foundInvalid = { qid: q.id, field: "sequence", idx: j, message: msg };
            firstInvalidSelector = `[data-qid="${q.id}"][data-field="sequence"][data-idx="${j}"]`;
            break;
          }
        }
        if (firstInvalidSelector) break;
      } else if (q.type === "matching") {
        const pairs = (q.data && q.data.pairs) || [];
        if (!pairs || pairs.length === 0) {
          const msg = `Питання ${qNo}: додайте пари відповідностей`;
          setError(msg);
          foundInvalid = { qid: q.id, field: "pair", message: msg };
          firstInvalidSelector = `[data-qid="${q.id}"][data-field="pair"]`;
          break;
        }
        for (let j = 0; j < pairs.length; j++) {
          const p = pairs[j];
          if (!p.left || !String(p.left).trim() || !p.right || !String(p.right).trim()) {
            const msg = `Питання ${qNo}, пара ${j + 1}: заповніть обидва поля пари`;
            setError(msg);
            foundInvalid = { qid: q.id, field: "pair", idx: j, message: msg };
            firstInvalidSelector = `[data-qid="${q.id}"][data-field="pair"][data-idx="${j}"]`;
            break;
          }
        }
        if (firstInvalidSelector) break;
      } else if (q.type === "open") {
        const answers = (q.data && q.data.answers) || [];
        if (!answers || answers.length === 0) {
          const msg = `Питання ${qNo}: додайте принаймні одну очікувану відповідь або заповніть питання`;
          setError(msg);
          foundInvalid = { qid: q.id, field: "answer", message: msg };
          firstInvalidSelector = `[data-qid="${q.id}"][data-field="answer"]`;
          break;
        }
        for (let j = 0; j < answers.length; j++) {
          if (!answers[j] || !String(answers[j]).trim()) {
            const msg = `Питання ${qNo}, очікувана відповідь ${j + 1}: введіть текст`;
            setError(msg);
            foundInvalid = { qid: q.id, field: "answer", idx: j, message: msg };
            firstInvalidSelector = `[data-qid="${q.id}"][data-field="answer"][data-idx="${j}"]`;
            break;
          }
        }
        if (firstInvalidSelector) break;
      }
    }
    if (foundInvalid) {
      setInvalidField(foundInvalid);
      const el = document.querySelector(firstInvalidSelector!) as HTMLElement | null;
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        try { (el as HTMLElement).focus(); } catch {}
      }
      return false;
    }
    setInvalidField(null);
    setError(null);
    return true;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!validateQuestions()) return;
    // title validation now handled in validateQuestions()
    setLoading(true);
    try {
      // Змінити URL /api/tests на реальний API створення тесту
      const res = await fetch("/api/tests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          title,
          description,
          visibility, // "public" або "private"
          storeResponses, // boolean — чи зберігати відповіді/результати для перегляду списку пройшовших
          ownResultView, // "full" = користувач бачить свої відповіді та результати; "score_only" = тільки бали
          questions
        })
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || `HTTP ${res.status}`);
      }
      // після успіху — повернутись до /editor або на сторінку тесту
      router.push("/editor");
    } catch (err: any) {
      setError(err?.message || "Помилка при створенні тесту");
      setLoading(false);
    }
  }

  return (
    <div className="container d-flex flex-column align-items-center min-vh-100">
      <h2 className="mb-4 text-center">Новий тест</h2>
      <form className="menu-box p-4" onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Назва</label>
          <input
            className={`form-control ${invalidField && invalidField.field === "title" ? "is-invalid" : ""}`}
            value={title}
            data-field="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          {invalidField && invalidField.field === "title" && (
            <div className="invalid-feedback d-block app-error">{invalidField.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Опис</label>
          <textarea
            className="form-control"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label d-block">Видимість</label>
          <div className="btn-group" role="group">
            <input
              type="radio"
              className="btn-check"
              name="visibility"
              id="public"
              autoComplete="off"
              checked={visibility === "public"}
              onChange={() => setVisibility("public")}
            />
            <label className="btn btn-outline-primary" htmlFor="public">
              Публічний
            </label>

            <input
              type="radio"
              className="btn-check"
              name="visibility"
              id="private"
              autoComplete="off"
              checked={visibility === "private"}
              onChange={() => setVisibility("private")}
            />
            <label className="btn btn-outline-primary" htmlFor="private">
              Приватний
            </label>

          </div>
        </div>

        <div className="mb-3">
          <label className="form-label d-block">Зберігати відповіді та результати користувачів</label>
          <div className="btn-group" role="group">
            <input
              type="radio"
              className="btn-check"
              name="storeResponses"
              id="storeYes"
              autoComplete="off"
              checked={storeResponses === true}
              onChange={() => setStoreResponses(true)}
            />
            <label className="btn btn-outline-primary" htmlFor="storeYes">
              Так
            </label>

            <input
              type="radio"
              className="btn-check"
              name="storeResponses"
              id="storeNo"
              autoComplete="off"
              checked={storeResponses === false}
              onChange={() => setStoreResponses(false)}
            />
            <label className="btn btn-outline-primary" htmlFor="storeNo">
              Ні
            </label>
          </div>
          <div className="form-text mt-1">
            Якщо так — зберігатимуться індивідуальні відповіді та результати (ви зможете бачити список користувачів, які пройшли тест).
          </div>
        </div>

        {/* ownResultView: що бачить сам користувач після проходження */}
        <div className="mb-3">
          <label className="form-label d-block">Що бачить користувач після проходження</label>
          <div className="btn-group" role="group">
            <input
              type="radio"
              className="btn-check"
              name="ownResultView"
              id="ownFull"
              autoComplete="off"
              checked={ownResultView === "full"}
              onChange={() => setOwnResultView("full")}
            />
            <label className="btn btn-outline-primary" htmlFor="ownFull">
              Повні результати (питання + відповіді + бали)
            </label>

            <input
              type="radio"
              className="btn-check"
              name="ownResultView"
              id="ownScore"
              autoComplete="off"
              checked={ownResultView === "score_only"}
              onChange={() => setOwnResultView("score_only")}
            />
            <label className="btn btn-outline-primary" htmlFor="ownScore">
              Тільки бали
            </label>

            <input
              type="radio"
              className="btn-check"
              name="ownResultView"
              id="ownNothing"
              autoComplete="off"
              checked={ownResultView === "nothing"}
              onChange={() => setOwnResultView("nothing")}
            />
            <label className="btn btn-outline-primary" htmlFor="ownNothing">
              Нічого не показувати
            </label>
          </div>
          <div className="form-text mt-1">
            Ця опція визначає, що бачить сам користувач після завершення тесту незалежно від того, чи зберігаються відповіді.
          </div>
        </div>

        <div className="mb-3 questions-section">
          <h3 className="mb-2 text-center">Питання</h3>
          
          {questions.length === 0 && (
            <div className="muted mb-2">Поки немає питань. Додайте перше питання.</div>
          )}
          {questions.map((q) => (
            <div className="mb-3" key={q.id}>
              <div className="d-flex justify-content-between align-items-center mb-1">
                <label className="form-label mb-0">Питання</label>
                <div className="d-flex align-items-center gap-2">
                  <select
                    className="form-select form-select-sm"
                    style={{ width: 200 }}
                    value={q.type}
                    onChange={(e) => updateQuestionType(q.id, e.target.value as any)}
                  >
                    <option value="single">Одиночний вибір</option>
                    <option value="multi">Множинний вибір</option>
                    <option value="sequence">Порядок</option>
                    <option value="open">Відкрита відповідь</option>
                    <option value="matching">Відповідності</option>
                  </select>
                  <span className="badge bg-secondary text-capitalize">{q.type}</span>
                </div>
              </div>
              {q.type !== "open" && (
                <>
                  <textarea
                    className={`form-control ${invalidField && invalidField.qid === q.id && invalidField.field === "text" ? "is-invalid" : ""}`}
                    rows={3}
                    value={q.text}
                    data-qid={q.id}
                    data-field="text"
                    onChange={(e) => updateQuestion(q.id, e.target.value)}
                  />
                  {invalidField && invalidField.qid === q.id && invalidField.field === "text" && (
                    <div className="invalid-feedback d-block app-error">{invalidField.message}</div>
                  )}
                </>
              )}
              {q.type === "open" && (
                <OpenAnswer
                  qid={q.id}
                  invalidField={invalidField}
                  initial={{ text: q.text, answers: (q.data && q.data.answers) || [] }}
                  onChange={(v) => {
                    updateQuestion(q.id, v.text);
                    updateOpenAnswer(q.id, v.answers);
                  }}
                />
              )}

              {q.type === "single" && (
                <SingleChoice
                  q={q}
                  qid={q.id}
                  invalidField={invalidField}
                  ensureOptions={ensureOptions}
                  addOptionToQuestion={addOptionToQuestion}
                  updateOptionText={updateOptionText}
                  removeOption={removeOption}
                  toggleOptionCorrect={toggleOptionCorrect}
                />
              )}

              {q.type === "multi" && (
                <MultiChoice
                  q={q}
                  qid={q.id}
                  invalidField={invalidField}
                  ensureOptions={ensureOptions}
                  addOptionToQuestion={addOptionToQuestion}
                  updateOptionText={updateOptionText}
                  removeOption={removeOption}
                  toggleOptionCorrect={toggleOptionCorrect}
                />
              )}

              {q.type === "sequence" && (
                <SequenceQuestion
                  q={q}
                  qid={q.id}
                  invalidField={invalidField}
                  addSequenceItem={addSequenceItem}
                  updateSequenceItemText={updateSequenceItemText}
                  updateSequenceItemOrder={updateSequenceItemOrder}
                  removeSequenceItem={removeSequenceItem}
                />
              )}

              {q.type === "matching" && (
                <MatchingQuestion
                  q={q}
                  qid={q.id}
                  invalidField={invalidField}
                  addPairToQuestion={addPairToQuestion}
                  updatePairText={updatePairText}
                  removePairFromQuestion={removePairFromQuestion}
                />
              )}
              <div className="mt-2 d-flex gap-2">
                <button type="button" className="btn btn-outline-danger" onClick={() => removeQuestion(q.id)}>
                  Видалити питання
                </button>
              </div>
            </div>
          ))}
          <div className="mb-2 d-flex justify-content-center align-items-center gap-2 mt-3">
            <select
              className="form-select w-auto"
              value={newQuestionType}
              onChange={(e) => setNewQuestionType(e.target.value as any)}
            >
              <option value="single">Одиночний вибір</option>
              <option value="multi">Множинний вибір</option>
              <option value="sequence">Порядок (послідовність)</option>
              <option value="open">Відкрита відповідь</option>
              <option value="matching">Відповідності</option>
            </select>
            <button type="button" className="btn btn-secondary" onClick={() => addQuestion()}>
              Додати питання
            </button>
          </div>
        </div>

        {error && <div className="app-error mb-3">{error}</div>}

        <div className="d-flex gap-2 actions-center">
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Зберігаю..." : "Створити тест"}
          </button>
          <Link href="/editor" className="btn btn-outline-secondary">
            Назад
          </Link>
        </div>
      </form>
    </div>
  );
}
