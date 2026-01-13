"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Editor() {
  useEffect(() => {
    try {
      document.title = "TestHub | Редактор тестів";
    } catch {}
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h2 className="mb-4 text-center">Редактор тестів</h2>
      <div className="menu-box">
        <Link href="/editor/new">
          <button className="btn btn-primary w-100">Додати новий тест</button>
        </Link>
      </div>
    </div>
  );
}
