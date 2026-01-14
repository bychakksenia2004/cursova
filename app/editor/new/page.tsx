"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import OpenAnswer from "../../components/testcomponents/OpenAnswer";
import SingleChoice from "../../components/testcomponents/SingleChoice";
import MultiChoice from "../../components/testcomponents/MultiChoice";
import SequenceQuestion from "../../components/testcomponents/SequenceQuestion";
import MatchingQuestion from "../../components/testcomponents/MatchingQuestion";
export default function NewTestPage() {
  // hooks used across the component
  const router = useRouter();
  const searchParams = useSearchParams();

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

  // new question type selector state and helpers (used by UI)
  const [newQuestionType, setNewQuestionType] = useState<"single" | "multi" | "sequence" | "open" | "matching">("single");

  function updateQuestion(qid: number, text: string) {
    setQuestions((s) => s.map((q) => (q.id === qid ? { ...q, text } : q)));
  }

  function updateQuestionType(qid: number, type: string) {
    setQuestions((s) => s.map((q, idx) => (q.id === qid ? normalizeQuestion({ ...q, type }, idx) : q)));
  }

  function addQuestion() {
    const q: any = { id: Date.now(), type: newQuestionType, text: "", data: {} };
    setQuestions((s) => [...s, normalizeQuestion(q, s.length)]);
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
  const DRAFT_KEY = "test_draft_v1";
  const [lastSaved, setLastSaved] = useState<number | null>(null);
  const [editId, setEditId] = useState<string | null>(null);
  // Ensure restored questions and nested items have necessary ids/defaults
  function normalizeQuestion(q: any, idx: number) {
    const out: any = { ...q };
    if (!out.id) out.id = Date.now() + idx + 1;
    if (!out.type) out.type = out.type || "single";
    if (typeof out.text === "undefined") out.text = "";
    out.data = out.data || {};
    if (out.type === "single" || out.type === "multi") {
      out.data.options = Array.isArray(out.data.options) ? out.data.options.map((o: any, i: number) => ({
        id: o?.id || (Date.now() + idx + i + 2),
        text: typeof o?.text === "undefined" ? "" : o.text,
        correct: !!o?.correct,
      })) : [];
    } else if (out.type === "sequence") {
      out.data.options = Array.isArray(out.data.options) ? out.data.options.map((o: any, i: number) => ({
        id: o?.id || (Date.now() + idx + i + 2),
        text: typeof o?.text === "undefined" ? "" : o.text,
        order: typeof o?.order === "undefined" ? i + 1 : o.order,
      })) : [];
    } else if (out.type === "matching") {
      out.data.pairs = Array.isArray(out.data.pairs) ? out.data.pairs.map((p: any, i: number) => ({
        id: p?.id || (Date.now() + idx + i + 2),
        left: typeof p?.left === "undefined" ? "" : p.left,
        right: typeof p?.right === "undefined" ? "" : p.right,
      })) : [];
    } else if (out.type === "open") {
      out.data.answers = Array.isArray(out.data.answers) ? out.data.answers.map((a: any) => (typeof a === "undefined" ? "" : a)) : [""];
    }
    return out;
  }
  // Always restore draft on mount so navigating away and back preserves state

  useEffect(() => {
    try {
      document.title = "TestHub | Новий тест";
    } catch {}
  }, []);

  // reusable draft loader
  function loadDraftFromStorage() {
    try {
      if (typeof window === "undefined") return;
      const raw = window.localStorage.getItem(DRAFT_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      try { console.debug("[NewTestPage] loaded draft:", parsed); } catch {}
      if (parsed && Object.prototype.hasOwnProperty.call(parsed, "title")) setTitle(parsed.title ?? "");
      if (parsed && Object.prototype.hasOwnProperty.call(parsed, "description")) setDescription(parsed.description ?? "");
      if (parsed && Object.prototype.hasOwnProperty.call(parsed, "visibility")) setVisibility(parsed.visibility ?? "public");
      if (parsed && Object.prototype.hasOwnProperty.call(parsed, "storeResponses") && typeof parsed.storeResponses === "boolean") setStoreResponses(parsed.storeResponses);
      if (parsed && Object.prototype.hasOwnProperty.call(parsed, "ownResultView")) setOwnResultView(parsed.ownResultView ?? "full");
      if (Array.isArray(parsed?.questions)) setQuestions(parsed.questions.map((q: any, i: number) => normalizeQuestion(q, i)));
      if (parsed && Object.prototype.hasOwnProperty.call(parsed, "lastSaved")) setLastSaved(parsed.lastSaved ?? null);
    } catch (err) {
      console.warn("Failed to load draft:", err);
    }
  }

  // Load on mount
  useEffect(() => {
    loadDraftFromStorage();
    // If the URL has ?edit=<id> fetch test for editing
    try {
      const id = searchParams.get("edit");
      if (id) {
        setEditId(id);
        (async function () {
          try {
            const res = await fetch(`/api/tests/${id}`, { credentials: "include" });
            if (!res.ok) return;
            const data = await res.json();
            if (data?.ok && data.test) {
              const t = data.test;
              setTitle(t.title || "");
              setDescription(t.description || "");
              setVisibility(t.visibility || "public");
              setStoreResponses(!!t.storeResponses);
              setOwnResultView(t.ownResultView || "full");
              // map server question types back to frontend
              const mapped = Array.isArray(t.questions) ? t.questions.map((q: any) => {
                const mapBack = (stype: string) => {
                  switch (stype) {
                    case "single_choice": return "single";
                    case "multi_choice": return "multi";
                    case "sequence": return "sequence";
                    case "matching": return "matching";
                    case "open": return "open";
                    default: return stype;
                  }
                };
                const ftype = mapBack(q.type);
                const dataObj: any = {};
                if (ftype === "single" || ftype === "multi") dataObj.options = q.options || [];
                else if (ftype === "sequence") dataObj.options = q.options || [];
                else if (ftype === "matching") dataObj.pairs = q.pairs || [];
                else if (ftype === "open") dataObj.answers = q.answers || [];
                return { id: q.id || Date.now(), type: ftype, text: q.text || "", data: dataObj };
              }) : [];
              setQuestions(mapped);
            }
          } catch (err) {
            console.warn("Failed to load test for edit:", err);
          }
        })();
      }
    } catch {}
  }, []);

  // Also reload when pathname becomes this page (handles client-side navigation back)
  const pathname = usePathname();
  useEffect(() => {
    try {
      if (pathname === "/editor/new") {
        // only reload draft when not editing a specific test
        const id = searchParams.get("edit");
        if (!id) loadDraftFromStorage();
      }
    } catch {}
  }, [pathname]);

  // Auto-save draft to localStorage (immediate)
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      const payload = {
        title,
        description,
        visibility,
        storeResponses,
        ownResultView,
        questions,
        lastSaved: Date.now(),
      };
      try {
        window.localStorage.setItem(DRAFT_KEY, JSON.stringify(payload));
        setLastSaved(payload.lastSaved);
      } catch (err) {
        console.warn("Failed to save draft:", err);
      }
    } catch {}
  }, [title, description, visibility, storeResponses, ownResultView, questions]);

  function clearDraft() {
    try {
      if (typeof window === "undefined") return;
      window.localStorage.removeItem(DRAFT_KEY);
    } catch {}
    setTitle("");
    setDescription("");
    setVisibility("public");
    setStoreResponses(true);
    setOwnResultView("full");
    setQuestions([]);
    setLastSaved(null);
    setInvalidField(null);
    setError(null);
  }


  // Note: lastSaved timestamp is still stored in localStorage but not shown in the UI.

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
      let res: Response;
      const payload = {
        title,
        description,
        visibility,
        storeResponses,
        ownResultView,
        questions,
      };
      if (editId) {
        res = await fetch(`/api/tests/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch("/api/tests", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(payload),
        });
      }
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || `HTTP ${res.status}`);
      }
      // після успіху — повернутись до /editor
      router.push("/editor");
    } catch (err: any) {
      setError(err?.message || (editId ? "Помилка при оновленні тесту" : "Помилка при створенні тесту"));
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
                  text={q.text}
                  answers={(q.data && q.data.answers) || []}
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

        {/* Removed manual restore UI and lastSaved display. Clear button moved to actions area below. */}

        <div className="d-flex gap-2 actions-center">
          <button type="button" className="btn btn-sm btn-outline-danger" onClick={clearDraft}>
            Очистити всі поля
          </button>
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
