"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/teams", label: "Teams" },
  { href: "/matches", label: "Matches" },
  { href: "/standings", label: "Standings" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-blue-950 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          ABL 🏀
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-orange-400 border-b-2 border-orange-400"
                  : "text-gray-300 hover:text-white"
              } transition-colors duration-200`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bouton de thème */}
        <ThemeToggle />
      </div>
    </header>
  );
}
