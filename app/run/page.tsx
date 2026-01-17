"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RunByCodePage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const trimmed = String(code || "").trim();
    if (!trimmed) {
      setError("Введіть код тесту");
      return;
    }
    // navigate to the test page (assume code is the test id)
    router.push(`/tests/${encodeURIComponent(trimmed)}`);
  }

  return (
    <div className="container d-flex flex-column align-items-center min-vh-100">
      <h2 className="mb-4">Пройти тест за кодом</h2>
      <div className="menu-box p-4 w-100" style={{ maxWidth: 640 }}>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label className="form-label">Введіть код тесту</label>
            <input
              className={`form-control ${error ? "is-invalid" : ""}`}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Код або id тесту"
            />
            {error && <div className="invalid-feedback d-block">{error}</div>}
          </div>
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">Відкрити тест</button>
            <Link href="/">
              <button type="button" className="btn btn-outline-secondary">Назад</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
