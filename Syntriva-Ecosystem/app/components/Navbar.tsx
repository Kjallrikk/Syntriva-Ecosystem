"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/blueprints", label: "Blueprints" },
  { href: "/income", label: "Income Systems" },
  { href: "/contact", label: "Contact / Join" }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-800 bg-black/70 backdrop-blur">
      <nav className="container-core flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-syntrivaAccent to-cyan-400" />
          <span className="font-semibold tracking-tight">Syntriva</span>
        </Link>
        <div className="flex gap-1 text-sm">
          {links.map(link => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "px-3 py-1.5 rounded-full transition-colors",
                  active
                    ? "bg-syntrivaAccent text-black"
                    : "text-slate-300 hover:bg-slate-800"
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
