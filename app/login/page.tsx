import Link from "next/link";

export default function Login() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="login-container menu-box">

        {/* Home видалено — тепер рендериться в layout */}
        <h2 className="mb-4 text-center">Вхід</h2>

        {/* Статична форма — функціонал логіну поки видалено */}
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              autoComplete="email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Пароль</label>
            <input
              type="password"
              className="form-control"
              id="password"
              autoComplete="current-password"
            />
          </div>

          {/* Кнопка без сабміту — поки немає функціоналу */}
          <button type="button" className="btn btn-primary w-100">Увійти</button>

          <p className="text-center mt-3 mb-0">
            Немає акаунту? <Link href="/register" className="text-decoration-underline">Зареєструйтесь!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
