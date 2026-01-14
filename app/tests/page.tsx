"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function PublicTestsPage() {
  const [tests, setTests] = useState<Array<{ _id: string; title: string; description?: string | null; author?: string | null }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch("/api/public-tests", { cache: "no-store" });
        if (!res.ok) {
          console.warn("Failed to load public tests", await res.text());
          return;
        }
        const data = await res.json();
        if (mounted && data?.ok && Array.isArray(data.tests)) setTests(data.tests);
      } catch (err) {
        console.warn("Failed to load public tests:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    try { document.title = "TestHub | Публічні тести"; } catch {}
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h2 className="mb-4 text-center">Публічні тести</h2>
      <div className="menu-box d-flex flex-column gap-2">
        {loading ? (
          <div className="text-muted">Завантаження...</div>
        ) : tests.length === 0 ? (
          <div className="text-muted">Публічних тестів не знайдено.</div>
        ) : (
          <div className="list-group transparent-list">
            {tests.map((t) => (
              <div key={t._id} className="list-group-item d-flex justify-content-between align-items-start">
                <div>
                  <div className="fw-semibold">{t.title}</div>
                  {t.description ? <div className="text-muted small">{t.description}</div> : null}
                  <div className="text-muted small mt-1">Автор: {t.author || "(невідомо)"}</div>
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
      </div>
    </div>
  );
}
