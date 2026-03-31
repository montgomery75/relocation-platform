"use client";

import Link from "next/link";
import { useState } from "react";

export default function PreviewNav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "/", level: 0 },
    { label: "Germany", href: "/germany", level: 1 },
    { label: "German Visas", href: "/germany/visa", level: 2 },
    { label: "EU Blue Card", href: "/germany/visa/eu-blue-card", level: 3 },
    { label: "Opportunity Card", href: "/germany/visa/opportunity-card", level: 3 }
  ];

  const getIndent = (level: number) => {
    if (level === 1) return "pl-3";
    if (level === 2) return "pl-6";
    if (level === 3) return "pl-9";
    return "";
  };

  return (
    <div className="fixed left-3 top-3 z-[100] sm:left-4 sm:top-4">
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-md transition hover:opacity-95"
          style={{ backgroundColor: "#8d9734" }}
          aria-expanded={open}
          aria-haspopup="menu"
          aria-label="Open preview navigation"
        >
          Preview
        </button>

        {open && (
          <div className="relative mt-2 w-[300px] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <div className="rounded-xl border border-[#dfe6b5] bg-[#f4f6e5] px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm">
              We are still building, but have a peek here:
            </div>

            <nav className="mt-3" aria-label="Preview navigation">
              <ul className="space-y-2">
                {links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`group flex items-center justify-between rounded-xl border border-transparent px-3 py-2.5 text-sm font-medium text-slate-800 transition-all duration-200 hover:border-slate-200 hover:bg-slate-50 hover:shadow-sm ${getIndent(
                        item.level
                      )}`}
                    >
                      <span className="flex items-center gap-2">
                        {item.level > 0 && (
                          <span className="text-slate-300 transition-colors group-hover:text-[#8d9734]">
                            ↳
                          </span>
                        )}
                        <span>{item.label}</span>
                      </span>

                      <span className="text-slate-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#8d9734]">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50 hover:text-slate-900"
              title="Close"
              aria-label="Close preview navigation"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
}