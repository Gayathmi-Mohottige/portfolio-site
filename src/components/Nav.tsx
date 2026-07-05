"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
];

export default function Nav() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b-2 border-terra bg-ink transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="display text-xl text-bone">GAYATHMI<span className="text-terra">.</span></a>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} className="label text-bone transition-colors hover:text-terra">{l.label}</a></li>
            ))}
          </ul>
          <a href="#contact" className="hidden border-2 border-terra bg-terra px-5 py-2 label text-ink transition-colors hover:bg-transparent hover:text-terra sm:block">Contact</a>
          <button onClick={() => setOpen((o) => !o)} className="md:hidden" aria-label="Menu">{open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}</button>
        </div>
      </nav>

      {open && (
        <div className="border-t-2 border-line bg-ink md:hidden">
          <ul className="flex flex-col px-5 py-2">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="display block py-3 text-3xl text-bone">{l.label}</a></li>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="display block py-3 text-3xl text-terra">Contact</a>
          </ul>
        </div>
      )}
    </header>
  );
}
