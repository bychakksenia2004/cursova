"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function TopLeftHome() {
  const pathname = usePathname();
  const [user, setUser] = useState<{ username?: string } | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const res = await fetch("/api/me", { credentials: "include" });
        if (!mounted) return;
        if (!res.ok) setUser(null);
        else {
          const data = await res.json();
          setUser(data?.user ?? null);
        }
      } catch {
        if (mounted) setUser(null);
      }
    }

    load();

    const onAuthRefresh = () => load();
    const onStorage = (e: StorageEvent) => {
      if (e.key === "auth-refresh") load();
    };

    window.addEventListener("auth-refresh", onAuthRefresh);
    window.addEventListener("storage", onStorage);

    return () => {
      mounted = false;
      window.removeEventListener("auth-refresh", onAuthRefresh);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  if (!pathname || pathname === "/") return null;

  return (
    <div className="top-left-home">
      {user ? (
        <Link href="/profile" className="btn btn-outline-secondary">Профіль</Link>
      ) : (
        <Link href="/" className="btn btn-outline-secondary">Головна сторінка</Link>
      )}
    </div>
  );
}
