import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Top-Ranks! Publisher",
  description:
    "Top-Ranks! Publisher — personal automation that generates Top-5 countdown Shorts and publishes to the owner's TikTok via the official TikTok API.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col bg-zinc-950 text-zinc-100 antialiased">
        <header className="border-b border-zinc-800">
          <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Top-Ranks! Publisher
            </Link>
            <nav className="text-sm text-zinc-400">
              <Link href="/" className="transition-colors hover:text-zinc-100">
                Home
              </Link>
            </nav>
          </div>
        </header>
        <div className="flex flex-1 flex-col">{children}</div>
        <footer className="border-t border-zinc-800">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-2 px-6 py-6 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Top-Ranks! Publisher. All rights reserved.</p>
            <nav className="flex gap-4">
              <Link
                href="/terms/"
                className="transition-colors hover:text-zinc-100"
              >
                Terms
              </Link>
              <Link
                href="/privacy/"
                className="transition-colors hover:text-zinc-100"
              >
                Privacy
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
