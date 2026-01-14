import { connectToDB } from "../../../lib/mongodb";
import Test from "../../../lib/models/Test";
import Link from "next/link";

export default async function Page(ctx: any) {
  try {
    const params = await ctx.params;
    const id = params?.id;
    if (!id) return <div className="container min-vh-100">Невірний ідентифікатор тесту.</div>;
    await connectToDB();
    const test = await Test.findById(String(id)).populate({ path: "authorId", select: "username" }).lean();
    if (!test) return <div className="container min-vh-100">Тест не знайдено.</div>;

    return (
      <div className="container d-flex flex-column align-items-center min-vh-100">
        <h2 className="mb-3">{test.title}</h2>
        <div className="text-muted mb-3">Автор: {test.authorId?.username || "(невідомо)"}</div>
        <div className="menu-box w-100">
         {test.description ? <p>{test.description}</p> : null}
          <div className="mb-3">
            <div className="fw-semibold">Кількість питань: {Array.isArray(test.questions) ? test.questions.length : 0}</div>
          </div>
          <div className="mt-3 d-flex gap-2">
            <Link href={`/tests/${id}/take`}>
              <button className="btn btn-primary">Розпочати тест</button>
            </Link>
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
