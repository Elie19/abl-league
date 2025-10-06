"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-secondary border-b dark:border-gray-700 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="font-display text-2xl text-primary">
          ABL
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/teams" className="hover:text-primary transition">Teams</Link>
          <Link href="/matches" className="hover:text-primary transition">Matches</Link>
          <Link href="/standings" className="hover:text-primary transition">Standings</Link>
          <ThemeToggle />
        </div>

        {/* Menu mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white dark:bg-secondary border-t dark:border-gray-700 flex flex-col items-center gap-4 py-4 md:hidden">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/teams" onClick={() => setMenuOpen(false)}>Teams</Link>
            <Link href="/matches" onClick={() => setMenuOpen(false)}>Matches</Link>
            <Link href="/standings" onClick={() => setMenuOpen(false)}>Standings</Link>
            <ThemeToggle />
          </div>
        )}
      </nav>
    </header>
  );
}
