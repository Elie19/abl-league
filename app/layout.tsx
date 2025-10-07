// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "African Basketball League",
  description:
    "Suivez les résultats, classements et statistiques des meilleures équipes africaines.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 flex flex-col min-h-screen">
        <ThemeProvider>
          {/* Header */}
          <Navbar />

          {/* Contenu principal */}
          <main className="flex-grow container mx-auto px-4 py-6">{children}</main>

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
