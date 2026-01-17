"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function PublicTestsPage() {
  const [tests, setTests] = useState<Array<{ _id: string; title: string; description?: string | null; author?: string | null; storeResponses?: boolean }>>([]);
  const [query, setQuery] = useState<string>("");
  const [authorQuery, setAuthorQuery] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch(`/api/public-tests?page=${page}&limit=10`, { cache: "no-store" });
        if (!res.ok) {
          console.warn("Failed to load public tests", await res.text());
          return;
        }
        const data = await res.json();
        if (mounted && data?.ok && Array.isArray(data.tests)) {
          setTests(data.tests);
          setTotalPages(data.totalPages || 1);
        }
      } catch (err) {
        console.warn("Failed to load public tests:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, [page]);

  useEffect(() => {
    try { document.title = "TestHub | Публічні тести"; } catch {}
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h2 className="mb-4 text-center">Публічні тести</h2>
      <div className="menu-box d-flex flex-column gap-2">
        <div>
          <input className="form-control mb-2" placeholder="Пошук за назвою тесту..." value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} />
          <input className="form-control" placeholder="Пошук за автором..." value={authorQuery} onChange={(e) => { setAuthorQuery(e.target.value); setPage(1); }} />
        </div>
        {loading ? (
          <div className="text-muted">Завантаження...</div>
          ) : tests.length === 0 ? (
          <div className="text-muted">Публічних тестів не знайдено.</div>
          ) : (
          <div className="list-group transparent-list">
              {tests.filter((t) => t.title.toLowerCase().includes(query.toLowerCase()) && (authorQuery ? (t.author || "").toLowerCase().includes(authorQuery.toLowerCase()) : true)).map((t) => (
              <div key={t._id} className="list-group-item d-flex justify-content-between align-items-start">
                <div>
                  <div className="fw-semibold">{t.title}</div>
                  {t.description ? <div className="text-muted small">{t.description}</div> : null}
                  <div className="text-muted small mt-1">Автор: {t.author || "(невідомо)"}</div>
                  {t.storeResponses ? <div className="mt-1"><span className="badge bg-warning text-dark">Потрібна реєстрація</span></div> : null}
                </div>
                <div>
                  <Link href={`/tests/${t._id}`}>
                    <button className="btn btn-sm btn-outline-primary">Відкрити</button>
                  </Link>
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
  );
}
