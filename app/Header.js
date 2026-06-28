"use client";

import { useState } from "react";

const links = [
  { href: "#news", label: "最新消息" },
  { href: "#problem", label: "社會問題" },
  { href: "#features", label: "App 功能" },
  { href: "#screens", label: "實際畫面" },
  { href: "#impact", label: "社會影響力" },
  { href: "#model", label: "永續經營" },
  { href: "#team", label: "團隊" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" onClick={close} className="flex items-center">
          <img src="/logo.png" alt="攏災影 KNOW ZAI" className="h-14 w-auto" />
        </a>

        {/* 桌機選單（≥ lg） */}
        <div className="hidden items-center gap-6 text-sm font-medium text-gray-600 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-brand">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-brand px-5 py-2 font-semibold text-white transition hover:bg-brand-dark"
          >
            聯絡我們
          </a>
        </div>

        {/* 漢堡按鈕（< lg 顯示） */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "關閉選單" : "開啟選單"}
          aria-expanded={open}
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 transition hover:bg-orange-50 hover:text-brand lg:hidden"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* 手機 / 平板展開選單 */}
      {open && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="rounded-lg px-3 py-3 text-base font-medium text-gray-700 transition hover:bg-orange-50 hover:text-brand"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={close}
              className="mt-2 rounded-full bg-brand px-5 py-3 text-center font-semibold text-white transition hover:bg-brand-dark"
            >
              聯絡我們
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
