import mongoose from "mongoose";
import dns from "dns/promises";

// Додаємо константу з fallback на MONGODB_URI
const MONGODB_URL = process.env.MONGODB_URL || process.env.MONGODB_URI;

if (!MONGODB_URL) {
  throw new Error("❌ Вкажи змінну MONGODB_URL або MONGODB_URI у .env.local");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectToDB(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    // Більші таймаути для більш стабільної діагностики
    cached.promise = mongoose
      .connect(MONGODB_URL as string, {
        // сучасні mongoose/driver опції за замовчуванням працюють добре,
        // але додаємо час очікування на вибір сервера для швидшої діагностики
        serverSelectionTimeoutMS: 10000,
        connectTimeoutMS: 10000,
        socketTimeoutMS: 45000
      })
      .then((mongoose) => mongoose)
      .catch(async (err) => {
        // Лог оригінальної помилки на сервері (щоб бачити стек)
        console.error("MongoDB connection error (original):", err);

        // Базове дружнє повідомлення
        let diag = [
          "Не вдалося підключитися до MongoDB.",
          "Перевірте MONGODB_URL у d:\\magistrature\\Dockerwork\\kursova\\.env.local,",
          "переконайтесь, що кластер працює, та що ваш IP добавлений в Network Access (whitelist) в Atlas.",
          `Оригінальна помилка: ${(err as any)?.message ?? String(err)}`
        ].join(" ");

        // Додаткова діагностика для mongodb+srv (DNS SRV)
        try {
          if (typeof MONGODB_URL === "string" && MONGODB_URL.startsWith("mongodb+srv://")) {
            try {
              const parsed = new URL(MONGODB_URL);
              const host = parsed.hostname;
              diag += ` SRV host: ${host}.`;

              try {
                const srv = await dns.resolveSrv(`_mongodb._tcp.${host}`);
                diag += ` DNS SRV records: ${JSON.stringify(srv)}.`;
              } catch (srvErr) {
                diag += ` DNS SRV lookup failed: ${(srvErr as any)?.message ?? String(srvErr)}.`;
              }

              try {
                const lookup = await dns.lookup(host);
                diag += ` DNS lookup: ${JSON.stringify(lookup)}.`;
              } catch (lookupErr) {
                diag += ` DNS lookup failed: ${(lookupErr as any)?.message ?? String(lookupErr)}.`;
              }
            } catch (parseErr) {
              diag += ` Failed to parse URL for additional diagnostics: ${(parseErr as any)?.message ?? String(parseErr)}.`;
            }
          } else {
            // Для звичайних mongodb:// хостів також можна зробити dns.lookup
            try {
              const parsed = new URL(MONGODB_URL as string);
              const host = parsed.hostname;
              try {
                const lookup = await dns.lookup(host);
                diag += ` DNS lookup: ${JSON.stringify(lookup)}.`;
              } catch (lookupErr) {
                diag += ` DNS lookup failed: ${(lookupErr as any)?.message ?? String(lookupErr)}.`;
              }
            } catch {
              // нічого
            }
          }
        } catch (diagErr) {
          diag += ` (diagnostics failed: ${(diagErr as any)?.message ?? String(diagErr)})`;
        }

        // Кидаємо нову помилку з детальною діагностикою
        throw new Error(diag);
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
