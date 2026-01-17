"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HistoryPage() {
  const [loading, setLoading] = useState(true);
  const [attempts, setAttempts] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [author, setAuthor] = useState("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      try {
        let url = `/api/attempts/me`;
        const params: string[] = [];
        if (query) params.push(`test=${encodeURIComponent(query)}`);
        if (author) params.push(`author=${encodeURIComponent(author)}`);
        if (fromDate) params.push(`from=${encodeURIComponent(fromDate)}`);
        if (toDate) params.push(`to=${encodeURIComponent(toDate)}`);
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
        setError("Не вдалося завантажити історію проходжень");
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, [query, fromDate, toDate, page]);

  return (
    <div className="container d-flex flex-column align-items-center min-vh-100">
      <h2 className="mb-3">Історія тестувань</h2>
      <div className="menu-box w-100">
        <div className="d-flex gap-2 mb-3">
          <input className="form-control" placeholder="Пошук за назвою тесту" value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} />
          <input className="form-control" placeholder="Пошук за автором" value={author} onChange={(e) => { setAuthor(e.target.value); setPage(1); }} />
          <input className="form-control" type="date" value={fromDate} onChange={(e) => { setFromDate(e.target.value); setPage(1); }} placeholder="Від" />
          <input className="form-control" type="date" value={toDate} onChange={(e) => { setToDate(e.target.value); setPage(1); }} placeholder="До" />
          <Link href="/"><button className="btn btn-outline-secondary">Назад</button></Link>
        </div>
        {loading ? (
          <div className="text-muted">Завантаження...</div>
        ) : error ? (
          <div className="text-danger">{error}</div>
        ) : attempts.length === 0 ? (
          <div className="text-muted">Ви ще нічого не проходили.</div>
        ) : (
          <div className="list-group">
            {attempts.map((a) => (
              // Only make the item a link if per-question details are available
              a.details && a.details.perQuestion ? (
                <Link key={a.id} href={`/history/${a.id}`} className="list-group-item list-group-item-action text-decoration-none">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <div className="fw-semibold">{a.title}</div>
                      <div className="text-muted small">{new Date(a.createdAt).toLocaleString()}</div>
                    </div>
                    <div className="text-end">
                      <div className="fw-semibold">{typeof a.details.totalScore !== 'undefined' ? `${a.details.totalScore} / ${a.details.totalPossible}` : ""}</div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div key={a.id} className="list-group-item">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <div className="fw-semibold">{a.title}</div>
                      <div className="text-muted small">{new Date(a.createdAt).toLocaleString()}</div>
                    </div>
                    <div className="text-end">
                      {a.details && typeof a.details.totalScore !== 'undefined' ? (
                        <div className="fw-semibold">{a.details.totalScore} / {a.details.totalPossible}</div>
                      ) : (
                        <div className="text-muted">Деталі заборонено</div>
                      )}
                    </div>
                  </div>
                </div>
              )
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
