"use client";
import React, { useState, useEffect } from "react";

type Props = {
  qid?: number;
  invalidField?: { qid: number; field: string; idx?: number; message?: string } | null;
  text?: string;
  answers?: string[];
  onChange?: (v: { text: string; answers: string[] }) => void;
};

export default function OpenAnswer({ qid, invalidField, text = "", answers = [], onChange }: Props) {
  function addAnswer() {
    const next = [...answers, ""];
    onChange && onChange({ text, answers: next });
  }

  function updateAnswer(idx: number, value: string) {
    const next = answers.map((a, i) => (i === idx ? value : a));
    onChange && onChange({ text, answers: next });
  }

  function removeAnswer(idx: number) {
    const next = answers.filter((_, i) => i !== idx);
    onChange && onChange({ text, answers: next });
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
          onChange={(e) => onChange && onChange({ text: e.target.value, answers })}
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