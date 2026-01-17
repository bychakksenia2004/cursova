"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Editor() {
  // Note: draft auto-save/restore remains in the editor/new page via localStorage.
  const [tests, setTests] = useState<Array<{ _id: string; title: string; description?: string | null; storeResponses?: boolean }>>([]);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch(`/api/tests?page=${page}&limit=10`, { credentials: "include" });
        if (!res.ok) return;
        const data = await res.json();
        if (mounted && data?.ok && Array.isArray(data.tests)) {
          setTests(data.tests.map((t: any) => ({ _id: t._id || t.id || t._id, title: t.title, description: t.description, storeResponses: !!t.storeResponses })));
          setTotalPages(data.totalPages || 1);
        }
      } catch (err) {
        console.warn("Failed to load tests:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    try {
      document.title = "TestHub | Редактор тестів";
    } catch {}
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h2 className="mb-4 text-center">Редактор тестів</h2>
      <div className="menu-box d-flex flex-column gap-2">
        <Link href="/editor/new" className="btn btn-primary w-100">Додати новий тест</Link>
        <div className="mt-2">
          <input className="form-control" placeholder="Пошук за назвою тесту..." value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} />
        </div>
        <div className="mt-3">
          <h3 className="h6">Мої тести</h3>
          {loading ? (
            <div className="text-muted">Завантаження...</div>
          ) : tests.length === 0 ? (
            <div className="text-muted">У вас ще немає створених тестів.</div>
          ) : (
            <div className="list-group transparent-list">
              {tests.filter((t) => t.title.toLowerCase().includes(query.toLowerCase())).map((t) => (
                <div key={t._id} className="list-group-item d-flex justify-content-between align-items-start">
                  <div>
                    <div className="fw-semibold">{t.title}</div>
                    {t.description ? <div className="text-muted small">{t.description}</div> : null}
                  </div>
                  <div>
                    <Link href={`/editor/new?edit=${t._id}`} className="btn btn-sm btn-outline-primary">Редагувати</Link>
                    {t.storeResponses ? (
                      <Link href={`/editor/attempts/${t._id}`} className="btn btn-sm btn-outline-secondary ms-2">Проходження</Link>
                    ) : null}
                    <button
                      className="btn btn-sm btn-outline-danger ms-2"
                      onClick={async () => {
                        try {
                          const ok = confirm("Видалити тест? Цю дію не можна відмінити.");
                          if (!ok) return;
                          setDeletingId(t._id);
                          const res = await fetch(`/api/tests/${t._id}`, { method: "DELETE", credentials: "include" });
                          if (!res.ok) {
                            const txt = await res.text();
                            throw new Error(txt || `HTTP ${res.status}`);
                          }
                          setTests((s) => s.filter((x) => x._id !== t._id));
                        } catch (err) {
                          console.warn("Failed to delete test:", err);
                          alert("Не вдалося видалити тест");
                        } finally {
                          setDeletingId(null);
                        }
                      }}
                      disabled={deletingId === t._id}
                    >
                      {deletingId === t._id ? "Видаляю..." : "Видалити"}
                    </button>
                    <button
                      className="btn btn-sm btn-outline-success ms-2"
                        onClick={async () => {
                          try {
                            // copy only the test id (code)
                            const code = t._id;
                            if (navigator.clipboard && navigator.clipboard.writeText) {
                              await navigator.clipboard.writeText(code);
                            } else {
                              // fallback for older browsers
                              const tmp = document.createElement("input");
                              document.body.appendChild(tmp);
                              tmp.value = code;
                              tmp.select();
                              document.execCommand("copy");
                              document.body.removeChild(tmp);
                            }
                            setCopiedId(t._id);
                            setTimeout(() => setCopiedId(null), 2500);
                          } catch (err) {
                            console.warn("Failed to copy id:", err);
                            alert("Не вдалося скопіювати код тесту");
                          }
                        }}
                    >
                      {copiedId === t._id ? "Скопійовано!" : "Поділитись"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <button className="btn btn-outline-secondary" disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>Назад</button>
            <div>Сторінка {page} / {totalPages}</div>
            <button className="btn btn-outline-secondary" disabled={page >= totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>Далі</button>
          </div>
        </div>
      </div>
    </div>
  );
}
