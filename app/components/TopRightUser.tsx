"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function TopRightUser() {
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const res = await fetch("/api/me", { credentials: "include" });
        if (!mounted) return;
        if (!res.ok) {
          setUser(null);
        } else {
          const data = await res.json();
          setUser(data?.user ?? null);
        }
      } catch (err) {
        console.error("TopRightUser fetch /api/me error:", err);
        setUser(null);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();

    const onAuthRefresh = () => {
      // re-check auth when sign in/out happens in same tab
      load();
    };

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

  if (loading) return null;
  if (!user) return null;

  return (
    <Link href="/profile">
      <button className="top-right-user btn btn-secondary" title={user.username}>Привіт, {user.username}</button>
    </Link>
  );
}
