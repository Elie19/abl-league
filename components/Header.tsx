"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import GlobalSearch from "./GlobalSearch";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-secondary border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo + Recherche */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-display text-2xl text-primary hover:text-orange-500 transition"
          >
            ABL
          </Link>

          </div>

        {/* Liens de navigation (desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="hover:text-primary transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/teams"
            className="hover:text-primary transition-colors duration-200"
          >
            Teams
          </Link>
          <Link
            href="/matches"
            className="hover:text-primary transition-colors duration-200"
          >
            Matches
          </Link>
          <Link
            href="/standings"
            className="hover:text-primary transition-colors duration-200"
          >
            Standings
          </Link>
          <ThemeToggle />
        </div>

        {/* Bouton menu mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-700 dark:text-gray-100"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Menu déroulant mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-secondary border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col items-center gap-4 py-4">
            
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              href="/teams"
              onClick={() => setMenuOpen(false)}
              className="hover:text-primary transition"
            >
              Teams
            </Link>
            <Link
              href="/matches"
              onClick={() => setMenuOpen(false)}
              className="hover:text-primary transition"
            >
              Matches
            </Link>
            <Link
              href="/standings"
              onClick={() => setMenuOpen(false)}
              className="hover:text-primary transition"
            >
              Standings
            </Link>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
