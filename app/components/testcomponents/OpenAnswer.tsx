"use client";
import React, { useState, useEffect } from "react";

type Props = {
  qid?: number;
  invalidField?: { qid: number; field: string; idx?: number; message?: string } | null;
  initial?: { text?: string; answers?: string[] };
  onChange?: (v: { text: string; answers: string[] }) => void;
};

export default function OpenAnswer({ qid, invalidField, initial, onChange }: Props) {
  const [text, setText] = useState(initial?.text || "");
  const [answers, setAnswers] = useState<string[]>((initial && initial.answers) || []);

  useEffect(() => {
    onChange && onChange({ text, answers });
  }, [text, answers]);

  function addAnswer() {
    setAnswers((s) => [...s, ""]);
  }

  function updateAnswer(idx: number, value: string) {
    setAnswers((s) => s.map((a, i) => (i === idx ? value : a)));
  }

  function removeAnswer(idx: number) {
    setAnswers((s) => s.filter((_, i) => i !== idx));
  }

  return (
    <>
      <div className="mb-3">
        <textarea
          className={`form-control ${invalidField && invalidField.qid === (qid || 0) && invalidField.field === "text" ? "is-invalid" : ""}`}
          rows={2}
          value={text}
          data-qid={qid}
          data-field="text"
          onChange={(e) => setText(e.target.value)}
        />
        {invalidField && invalidField.qid === (qid || 0) && invalidField.field === "text" && (
          <div className="invalid-feedback d-block app-error">{invalidField.message}</div>
        )}
      </div>

      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <label className="form-label mb-0">Очікувана відповідь</label>
          <button type="button" className="btn btn-sm btn-outline-secondary" onClick={addAnswer}>
            Додати відповідь
          </button>
        </div>
        {answers.map((a, idx) => (
          <div key={idx} className="d-flex gap-2 align-items-start mb-2">
            <input
              className={`form-control ${invalidField && invalidField.qid === (qid || 0) && invalidField.field === "answer" && invalidField.idx === idx ? "is-invalid" : ""}`}
              data-qid={qid}
              data-field="answer"
              data-idx={idx}
              value={a}
              onChange={(e) => updateAnswer(idx, e.target.value)}
            />
            <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => removeAnswer(idx)}>
              Видалити
            </button>
            {invalidField && invalidField.qid === (qid || 0) && invalidField.field === "answer" && invalidField.idx === idx && (
              <div className="invalid-feedback d-block app-error">{invalidField.message}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}