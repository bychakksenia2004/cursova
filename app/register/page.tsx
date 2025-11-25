"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      document.title = "TestHub | Реєстрація";
    } catch {}
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!email || !username || !password || !confirm) {
      setError("Заповніть усі поля");
      return;
    }
    if (password !== confirm) {
      setError("Паролі не співпадають");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // <- ensure browser accepts Set-Cookie from the response
        body: JSON.stringify({ email, username, password })
      });

      // намагаємось безпечно розпарсити тіло відповіді
      let data: any = null;
      try {
        data = await res.json();
      } catch (_) {
        // якщо тіло не JSON — ітерпретуємо як текст
        try {
          const txt = await res.text();
          data = { error: txt || `HTTP ${res.status}` };
        } catch {
          data = { error: `HTTP ${res.status}` };
        }
      }

      if (data?.warning) {
        console.warn("Register warning:", data.warning);
      }
      
      if (!res.ok) {
        setError(data?.error || data?.message || "Помилка реєстрації");
        setLoading(false);
        return;
      }

      // повідомити клієнтські компоненти про зміну auth
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
      <div className="register-container menu-box">

        <h2 className="mb-4 text-center">Реєстрація</h2>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
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
            <label htmlFor="username" className="form-label">Ім'я користувача</label>
            <input
              id="username"
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Пароль</label>
            <input
              id="password"
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirm" className="form-label">Підтвердження пароля</label>
            <input
              id="confirm"
              type="password"
              className="form-control"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              autoComplete="new-password"
            />
          </div>

          {error && <div className="text-danger mb-3">{error}</div>}

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Зачекайте..." : "Зареєструватись"}
          </button>

          <p className="text-center mt-3 mb-0">
            Вже маєш акаунт? <Link href="/login" className="text-decoration-underline">Увійти</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
