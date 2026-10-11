"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Palette, Check } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const themes = [
  { id: "light-sand", name: "Light Sand", icon: "⏳" },
  { id: "dark-carbon", name: "Dark Carbon", icon: "🌋" },
  { id: "cyber-circuit", name: "Cyber Circuit", icon: "⚡" },
  { id: "nordic-frost", name: "Nordic Frost", icon: "❄️" },
];

export function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState("dark-carbon");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark-carbon";
    setActiveTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeTheme = (themeId: string) => {
    setActiveTheme(themeId);
    document.documentElement.setAttribute("data-theme", themeId);
    localStorage.setItem("portfolio-theme", themeId);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-9 h-9 rounded-full border border-line bg-panel text-ink hover:border-copper transition-colors duration-200"
        aria-label="Switch Theme"
      >
        <Palette className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl border border-line bg-paper shadow-xl py-1 z-50">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => changeTheme(t.id)}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-mono text-ink-soft hover:text-ink hover:bg-line/20 transition-colors text-left"
            >
              <span className="flex items-center gap-2">
                <span>{t.icon}</span>
                <span>{t.name}</span>
              </span>
              {activeTheme === t.id && <Check className="w-3.5 h-3.5 text-copper" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-md bg-paper/85 border-b border-line" : "bg-transparent"
      )}
    >
      <nav className="max-w-5xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display font-semibold text-lg tracking-tight text-ink flex items-center gap-2"
        >
          <span
            className="inline-block w-2.5 h-2.5 rounded-full bg-copper"
            aria-hidden="true"
          />
          KA.DEV
        </a>
        <ul className="hidden md:flex items-center gap-8 eyebrow">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-ink transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <ThemeSwitcher />
          <a
            href="#contact"
            className="inline-flex items-center px-4 py-2 rounded-full border border-ink text-sm font-medium hover:bg-ink hover:text-paper transition-colors duration-200"
          >
            Get in touch
          </a>
        </div>
        <div className="flex md:hidden items-center gap-3">
          <ThemeSwitcher />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Toggle navigation"
        className="flex flex-col gap-1.5 p-2"
      >
        <span className="block w-5 h-px bg-ink" />
        <span className="block w-5 h-px bg-ink" />
      </button>
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-paper border-b border-line px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="eyebrow text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
