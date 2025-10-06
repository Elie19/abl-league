import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body className="bg-white dark:bg-secondary text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <main className="max-w-6xl mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
