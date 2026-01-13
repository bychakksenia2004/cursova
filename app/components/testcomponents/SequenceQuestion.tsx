"use client";
import React from "react";

type Props = {
  q: any;
  qid?: number;
  invalidField?: { qid: number; field: string; idx?: number; message?: string } | null;
  addSequenceItem: (id: number) => void;
  updateSequenceItemText: (id: number, itemId: number, text: string) => void;
  updateSequenceItemOrder: (id: number, itemId: number, order: number) => void;
  removeSequenceItem: (id: number, itemId: number) => void;
};

export default function SequenceQuestion({ q, qid, invalidField, addSequenceItem, updateSequenceItemText, updateSequenceItemOrder, removeSequenceItem, }: Props) {
  return (
    <div className="mt-3">
      <div className="d-flex gap-2 align-items-center mb-2">
        <strong className="mb-0">Елементи</strong>
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary"
          onClick={() => addSequenceItem(q.id)}
        >
          Додати елемент
        </button>
      </div>
      {(((q.data && q.data.options) || []) as any)
        .slice()
        .sort((a: any, b: any) => (Number(a.order) || 0) - (Number(b.order) || 0))
        .map((it: any, idx: number) => (
          <div key={it.id} className="d-flex gap-2 align-items-start mb-2">
            <div className={`form-control`} style={{ width: 90, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {Number(it.order) || idx + 1}
            </div>
            <input
              className={`form-control ${invalidField && invalidField.qid === (qid || q.id) && invalidField.field === "sequence" && invalidField.idx === idx ? "is-invalid" : ""}`}
              data-qid={q.id}
              data-field="sequence"
              data-idx={idx}
              value={it.text}
              onChange={(e) => updateSequenceItemText(q.id, it.id, e.target.value)}
            />
            {invalidField && invalidField.qid === (qid || q.id) && invalidField.field === "sequence" && invalidField.idx === idx && (
              <div className="invalid-feedback d-block app-error">{invalidField.message}</div>
            )}
            <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => removeSequenceItem(q.id, it.id)}>
              Видалити
            </button>
          </div>
        ))}
    </div>
  );
}
