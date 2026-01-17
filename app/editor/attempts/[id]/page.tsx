"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function AttemptsPage() {
  const params = useParams();
  const id = params?.id;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [attempts, setAttempts] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    let mounted = true;
    async function load() {
      if (!id) return;
      setLoading(true);
      try {
        let url = `/api/attempts/${id}`;
        const params: string[] = [];
        if (query) params.push(`user=${encodeURIComponent(query)}`);
        params.push(`page=${page}`);
        params.push(`limit=10`);
        if (params.length) url += `?${params.join("&")}`;
        const res = await fetch(url, { credentials: "include" });
        if (!res.ok) {
          const txt = await res.text().catch(() => undefined);
          setError(txt || `HTTP ${res.status}`);
          return;
        }
        const data = await res.json();
        if (mounted && data?.ok) {
          setAttempts(data.attempts || []);
          setTotalPages(data.totalPages || 1);
        }
      } catch (err) {
        console.warn(err);
        setError("Не вдалося завантажити проходження");
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, [id, query, page]);

  return (
    <div className="container d-flex flex-column align-items-center min-vh-100">
      <h2 className="mb-3">Проходження тесту</h2>
      <div className="menu-box w-100">
        <div className="d-flex gap-2 mb-3">
          <input className="form-control" placeholder="Пошук за ім'ям користувача" value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} />
          <Link href="/editor" className="btn btn-outline-secondary">Назад</Link>
        </div>
        {loading ? (
          <div className="text-muted">Завантаження...</div>
        ) : error ? (
          <div className="text-danger">{error}</div>
        ) : attempts.length === 0 ? (
          <div className="text-muted">Поки немає проходжень.</div>
        ) : (
          <div className="list-group">
            {attempts.map((a) => (
              <Link key={a.id} href={`/history/${a.id}`} className="list-group-item list-group-item-action text-decoration-none d-flex justify-content-between align-items-center">
                <div>
                  <div className="fw-semibold">{a.username || "Анонім"}</div>
                  <div className="text-muted small">{new Date(a.createdAt).toLocaleString()}</div>
                </div>
                <div className="text-end">
                  <div className="fw-semibold">{a.totalScore} / {a.totalPossible}</div>
                </div>
              </Link>
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
