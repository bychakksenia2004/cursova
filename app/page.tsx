"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [hasDraft, setHasDraft] = useState(false);

  async function loadUser() {
    try {
      const res = await fetch("/api/me", { credentials: "include" });
      if (!res.ok) {
        setUser(null);
      } else {
        const data = await res.json();
        setUser(data?.user ?? null);
      }
    } catch (err) {
      console.error("Home /api/me error:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUser();

    // Also listen for explicit refresh trigger (we can set localStorage key after login)
    const onStorage = (e: StorageEvent) => {
      if (e.key === "auth-refresh") {
        loadUser();
      }
    };
    window.addEventListener?.("storage", onStorage);
    const onAuth = () => loadUser();
    window.addEventListener?.("auth-refresh", onAuth);
    return () => {
      window.removeEventListener?.("storage", onStorage);
      window.removeEventListener?.("auth-refresh", onAuth);
    };
  }, []);

  // check for saved draft
  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem("test_draft_v1") : null;
      setHasDraft(!!raw);
    } catch {
      setHasDraft(false);
    }
    const onStorage = (e: StorageEvent) => {
      if (e.key === "test_draft_v1") {
        try { setHasDraft(!!e.newValue); } catch { setHasDraft(false); }
      }
    };
    window.addEventListener?.("storage", onStorage);
    return () => { window.removeEventListener?.("storage", onStorage); };
  }, []);

  useEffect(() => {
    try {
      document.title = "TestHub | Головна сторінка";
    } catch {}
  }, []);

  const isAuth = !!user;
  const username = user?.username ?? null;

  async function handleLogout() {
    try {
      const res = await fetch("/api/logout", { method: "POST", credentials: "include" });
      // update clients locally
      setUser(null);
      try { localStorage.setItem("auth-refresh", String(Date.now())); } catch {}
      try { window.dispatchEvent(new Event("auth-refresh")); } catch {}
      try { router.refresh(); } catch {}
      if (!res.ok) {
        console.warn("Logout failed", await res.text());
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  }

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 home-menu">
      <div className="mb-4 text-center">
        <h1 className="display-5 fw-semibold">TestHub</h1>
      </div>

      <div className="card p-4 shadow-sm text-center app-card menu-box">
        <Link href="/tests" className="btn btn-outline-dark w-100 mb-2">Список публічних тестів</Link>
        <Link href="/run" className="btn btn-outline-dark w-100 mb-2">Пройти тест за кодом</Link>

        {isAuth && (
          <>
            <Link href="/history" className="btn btn-outline-dark w-100 mb-2">Історія тестувань</Link>
            <Link href="/editor" className="btn btn-outline-dark w-100 mb-2">Мої тести</Link>
          </>
        )}

        {!isAuth && (
          <p className="text-muted mt-3 mb-0">Увійди, щоб отримати більше можливостей</p>
        )}
      </div>

      <div className="d-flex gap-2 mt-3">
        {!isAuth ? (
          <>
            <Link href="/login" className="btn btn-primary">Увійти</Link>
            <Link href="/register" className="btn btn-outline-primary">Зареєструватись</Link>
          </>
        ) : (
          <>
            {/* logout button under the panel */}
            <button onClick={handleLogout} className="btn btn-danger">Вийти</button>
          </>
        )}
      </div>
    </div>
  );
}
