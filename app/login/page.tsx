"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      document.title = "TestHub | Вхід";
    } catch {}
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Заповніть усі поля");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // <- ensure browser accepts Set-Cookie from the response
        body: JSON.stringify({ email, password }),
      });

      let data: any = null;
      try {
        data = await res.json();
      } catch (_) {
        try {
          const txt = await res.text();
          data = { error: txt || `HTTP ${res.status}` };
        } catch {
          data = { error: `HTTP ${res.status}` };
        }
      }

      if (data?.warning) {
        // show dev warning from server if any
        console.warn("Auth warning:", data.warning);
      }

      if (!res.ok) {
        setError(data?.error || data?.message || "Помилка входу");
        setLoading(false);
        return;
      }

      // сигнал для клієнтських компонентів, що auth змінився
      try {
        localStorage.setItem("auth-refresh", String(Date.now()));
        // notify same-tab listeners
        try { window.dispatchEvent(new Event("auth-refresh")); } catch {}
      } catch {}

      try {
        await router.refresh();
      } catch {}
      router.push("/");
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Помилка мережі");
      setLoading(false);
    }
  }

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="login-container menu-box">
        <h2 className="mb-4 text-center">Вхід</h2>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Пароль
            </label>
            <input
              id="password"
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          {error && <div className="text-danger mb-3">{error}</div>}

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Зачекайте..." : "Увійти"}
          </button>

          <p className="text-center mt-3 mb-0">
            Немає акаунту?{" "}
            <Link
              href="/register"
              className="text-decoration-underline"
            >
              Зареєструйтесь!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
