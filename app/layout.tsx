import "./globals.css";
import { Inter } from "next/font/google";
import ThemeToggle from "../components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "African Basketball League",
  description: "Where African Passion Meets Basketball",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-secondary text-gray-900 dark:text-gray-100`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
            <h1 className="font-display text-2xl text-primary">ABL</h1>
            <ThemeToggle />
          </header>
          <main className="flex-1">{children}</main>
          <footer className="p-4 text-center text-sm text-gray-500 border-t border-gray-200 dark:border-gray-700">
            © {new Date().getFullYear()} African Basketball League
          </footer>
        </div>
      </body>
    </html>
  );
}
