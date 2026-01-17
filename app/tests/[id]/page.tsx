import { connectToDB } from "../../../lib/mongodb";
import Test from "../../../lib/models/Test";
import Link from "next/link";
import StartTestButton from "../../components/StartTestButton";

export default async function Page(ctx: any) {
  try {
    const params = await ctx.params;
    const id = params?.id;
    if (!id) return <div className="container min-vh-100">Невірний ідентифікатор тесту.</div>;
    await connectToDB();
    const test = await Test.findById(String(id)).populate({ path: "authorId", select: "username" }).lean();
    if (!test) return <div className="container min-vh-100">Тест не знайдено.</div>;

    // determine availability based on date window
    const now = new Date();
    const windowEnabled = !!test.dateWindowEnabled;
    const openFrom = test.openFrom ? new Date(test.openFrom) : null;
    const openTo = test.openTo ? new Date(test.openTo) : null;
    const inWindow = !windowEnabled || ((openFrom ? now >= openFrom : true) && (openTo ? now <= openTo : true));

    const authorDisplayName = (test.authorId && (test.authorId as any).username) ? (test.authorId as any).username : "(невідомо)";

    return (
      <div className="container d-flex flex-column align-items-center min-vh-100">
        <h2 className="mb-3">{test.title}</h2>
        <div className="text-muted mb-3">Автор: {authorDisplayName}</div>
        <div className="menu-box w-100">
         {test.description ? <p>{test.description}</p> : null}
          <div className="mb-3">
            <div className="fw-semibold">Кількість питань: {Array.isArray(test.questions) ? test.questions.length : 0}</div>
          </div>
          <div className="mb-3">
            <div className="fw-semibold">Доступність тесту</div>
            {windowEnabled ? (
              <div className="text-muted">
                Від: {openFrom ? openFrom.toLocaleString() : "(не вказано)"} — До: {openTo ? openTo.toLocaleString() : "(не вказано)"}
              </div>
            ) : (
              <div className="text-muted">Тест доступний без обмежень за датою.</div>
            )}
          </div>
          <div className="mb-3">
            <div className="fw-semibold">Час на проходження</div>
            {test.timed ? (
              <div className="text-muted">Обмежено: {test.timeLimitMinutes || "(не вказано)"} хвилин</div>
            ) : (
              <div className="text-muted">Час не обмежений.</div>
            )}
          </div>
          <div className="mt-3 d-flex gap-2">
            {inWindow ? (
              <StartTestButton id={String(id)} />
            ) : (
              <button className="btn btn-secondary" disabled>Тест недоступний зараз</button>
            )}
            <Link href="/tests">
              <button className="btn btn-outline-secondary">Назад до списку</button>
            </Link>
          </div>
        </div>
      </div>
    );
  } catch (err) {
    console.error("/tests/[id] page error:", err);
    return <div className="container min-vh-100">Сталася помилка.</div>;
  }
}
