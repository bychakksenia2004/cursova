"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopLeftHome() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  return (
    <div className="top-left-home">
        <Link href="/" className="btn btn-outline-secondary">Головна сторінка</Link>
    </div>
  );
}
