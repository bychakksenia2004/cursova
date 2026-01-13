"use client";
import React from "react";

type Props = {
  q: any;
  qid?: number;
  invalidField?: { qid: number; field: string; idx?: number; message?: string } | null;
  ensureOptions: (id: number) => void;
  addOptionToQuestion: (id: number) => void;
  updateOptionText: (id: number, optionId: number, text: string) => void;
  removeOption: (id: number, optionId: number) => void;
  toggleOptionCorrect: (id: number, optionId: number) => void;
};

export default function SingleChoice({ q, qid, invalidField, ensureOptions, addOptionToQuestion, updateOptionText, removeOption, toggleOptionCorrect, }: Props) {
  return (
    <div className="mt-3">
      <div className="d-flex gap-2 align-items-center mb-2">
        <strong className="mb-0">Варіанти відповіді</strong>
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary"
          onClick={() => {
            ensureOptions(q.id);
            addOptionToQuestion(q.id);
          }}
        >
          Додати варіант
        </button>
      </div>
      {((q.data && q.data.options) || []).map((opt: any, idx: number) => (
        <div key={opt.id} className="d-flex gap-2 align-items-start mb-2">
          <div style={{ marginTop: 6 }}>
            <input
              type="radio"
              name={`correct-${q.id}`}
              checked={!!opt.correct}
              onChange={() => toggleOptionCorrect(q.id, opt.id)}
            />
          </div>
          <input
            className={`form-control ${invalidField && invalidField.qid === (qid || q.id) && invalidField.field === "option" && (invalidField.idx === undefined || invalidField.idx === idx) ? "is-invalid" : ""}`}
            data-qid={qid || q.id}
            data-field="option"
            data-idx={idx}
            value={opt.text}
            onChange={(e) => updateOptionText(q.id, opt.id, e.target.value)}
          />
          {invalidField && invalidField.qid === (qid || q.id) && invalidField.field === "option" && (invalidField.idx === undefined || invalidField.idx === idx) && (
            <div className="invalid-feedback d-block app-error">{invalidField.message}</div>
          )}
          <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => removeOption(q.id, opt.id)}>
            Видалити
          </button>
        </div>
      ))}
    </div>
  );
}
