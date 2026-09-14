import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Top-Ranks! Publisher",
  description:
    "Personal automation that generates Top-5 countdown Shorts with AI + FFmpeg + GitHub Actions and publishes to the owner's TikTok.",
};

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">
        Top-Ranks! Publisher
      </h1>
      <div className="mt-6 space-y-4 text-lg leading-8 text-zinc-300">
        <p>
          Top-Ranks! Publisher is a personal automation that generates Top-5
          countdown Shorts with AI plus FFmpeg and GitHub Actions.
        </p>
        <p>
          Finished videos are published only to the owner&apos;s own TikTok
          account through the official TikTok Login Kit and Content Posting
          API Direct Post (video.publish scope).
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/terms/"
          className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-100 px-6 font-medium text-zinc-950 transition-colors hover:bg-white"
        >
          Terms of Service
        </Link>
        <Link
          href="/privacy/"
          className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-700 px-6 font-medium text-zinc-100 transition-colors hover:bg-zinc-900"
        >
          Privacy Policy
        </Link>
        <Link
          href="/tiktok/callback/"
          className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-700 px-6 font-medium text-zinc-100 transition-colors hover:bg-zinc-900"
        >
          TikTok Callback
        </Link>
      </div>
      <p className="mt-10 text-sm text-zinc-400">
        Contact:{" "}
        <a
          href="mailto:emjayfactor@gmail.com"
          className="text-zinc-100 underline underline-offset-4"
        >
          emjayfactor@gmail.com
        </a>
      </p>
    </main>
  );
}
