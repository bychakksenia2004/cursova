"use client";
import React from "react";

export default function StartTestButton({ id }: { id: string }) {
  function handleStart(e: React.MouseEvent) {
    try {
      localStorage.setItem(`test_start_${id}`, String(Date.now()));
    } catch {}
    // navigate to take page
    window.location.href = `/tests/${id}/take`;
  }

  return (
    <button className="btn btn-primary" onClick={handleStart}>Розпочати тест</button>
  );
}
