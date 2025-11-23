import Link from "next/link";

export default function Home() {
  // TODO: Замінити isAuth на реальну перевірку авторизації
  const isAuth = false;

  return (
    // Замінено кастомну .page-root на Bootstrap container + flex utilities
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      {/* Заголовок */}
      <div className="mb-4 text-center">
        <h1 className="display-5 fw-semibold">TestHub</h1>
      </div>

      {/* Картка: прибрано inline style, додано клас app-card */}
      <div className="card p-4 shadow-sm text-center app-card">
        <Link href="/tests">
          <button className="btn btn-outline-dark w-100 mb-2">Список публічних тестів</button>
        </Link>
        <Link href="/run">
          <button className="btn btn-outline-dark w-100 mb-2">Пройти тест за кодом</button>
        </Link>

        {isAuth && (
          <>
            <Link href="/profile">
              <button className="btn btn-outline-dark w-100 mb-2">Історія тестувань</button>
            </Link>
            <Link href="/editor">
              <button className="btn btn-outline-dark w-100 mb-2">Створити тест</button>
            </Link>
          </>
        )}

        {!isAuth && (
          <p className="text-muted mt-3 mb-0">Увійди, щоб отримати більше можливостей</p>
        )}
      </div>

      {/* Дії: Bootstrap flex + gap */}
      <div className="d-flex gap-2 mt-3">
        {!isAuth && (
          <>
            <Link href="/login">
              <button className="btn btn-primary">Увійти</button>
            </Link>
            <Link href="/register">
              <button className="btn btn-outline-primary">Зареєструватись</button>
            </Link>
          </>
        )}

        {isAuth && (
          <Link href="/logout">
            <button className="btn btn-danger">Вийти</button>
          </Link>
        )}
      </div>
    </div>
  );
}
