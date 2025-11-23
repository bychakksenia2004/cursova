import Link from "next/link";

export default function Register() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="register-container menu-box">

        <h2 className="mb-4 text-center">Реєстрація</h2>

        {/* Статична форма — функціонал реєстрації поки видалено */}
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
            <label htmlFor="username" className="form-label">Ім'я користувача</label>
            <input
              type="text"
              className="form-control"
              id="username"
              autoComplete="username"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Пароль</label>
            <input
              type="password"
              className="form-control"
              id="password"
              autoComplete="new-password"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirm" className="form-label">Підтвердження пароля</label>
            <input
              type="password"
              className="form-control"
              id="confirm"
              autoComplete="new-password"
            />
          </div>

          {/* Кнопка без сабміту — поки немає функціоналу */}
          <button type="button" className="btn btn-primary w-100">Зареєструватись</button>

          <p className="text-center mt-3 mb-0">
            Вже маєш акаунт? <Link href="/login" className="text-decoration-underline">Увійти</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
