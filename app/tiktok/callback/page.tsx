import type { Metadata } from "next";
import { Suspense } from "react";
import CallbackReader from "./callback-reader";

export const metadata: Metadata = {
  title: "TikTok Callback — Top-Ranks! Publisher",
  description:
    "TikTok authorization callback: displays the authorization code locally. No token exchange happens in the browser.",
};

export default function TikTokCallbackPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">TikTok Callback</h1>
      <p className="mt-4 text-lg leading-8 text-zinc-300">
        Authorization complete — copy the code and finish setup locally.
      </p>
      <p className="mt-2 text-sm leading-6 text-zinc-400">
        No token exchange happens in the browser. Values below are read from
        the URL only.
      </p>
      <Suspense fallback={<CallbackFallback />}>
        <CallbackReader />
      </Suspense>
    </main>
  );
}

function CallbackFallback() {
  return (
    <pre className="mt-8 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900 p-4 font-mono text-sm text-zinc-300">
      {JSON.stringify({ code: null, scopes: null, state: null }, null, 2)}
    </pre>
  );
}
