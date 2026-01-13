"use client";
import React from "react";

type Props = {
  q: any;
  qid?: number;
  invalidField?: { qid: number; field: string; idx?: number; message?: string } | null;
  addPairToQuestion: (id: number) => void;
  updatePairText: (id: number, pairId: number, side: "left" | "right", value: string) => void;
  removePairFromQuestion: (id: number, pairId: number) => void;
};

export default function MatchingQuestion({ q, qid, invalidField, addPairToQuestion, updatePairText, removePairFromQuestion, }: Props) {
  return (
    <div className="mt-3">
      <div className="d-flex gap-2 align-items-center mb-2">
        <strong className="mb-0">Пари відповідностей</strong>
        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => addPairToQuestion(q.id)}>
          Додати пару
        </button>
      </div>
      {((q.data && q.data.pairs) || []).map((p: any, idx: number) => (
        <div key={p.id} className="d-flex gap-2 align-items-start mb-2">
          <input
            className={`form-control ${invalidField && invalidField.qid === (qid || q.id) && invalidField.field === "pair" && invalidField.idx === idx ? "is-invalid" : ""}`}
            data-qid={q.id}
            data-field="pair"
            data-idx={idx}
            value={p.left}
            onChange={(e) => updatePairText(q.id, p.id, "left", e.target.value)}
            placeholder="Ліва"
          />
          <span className="align-self-center">→</span>
          <input
            className={`form-control ${invalidField && invalidField.qid === (qid || q.id) && invalidField.field === "pair" && invalidField.idx === idx ? "is-invalid" : ""}`}
            data-qid={q.id}
            data-field="pair"
            data-idx={idx}
            value={p.right}
            onChange={(e) => updatePairText(q.id, p.id, "right", e.target.value)}
            placeholder="Права"
          />
          {invalidField && invalidField.qid === (qid || q.id) && invalidField.field === "pair" && invalidField.idx === idx && (
            <div className="invalid-feedback d-block app-error">{invalidField.message}</div>
          )}
          <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => removePairFromQuestion(q.id, p.id)}>
            Видалити
          </button>
        </div>
      ))}
    </div>
  );
}
