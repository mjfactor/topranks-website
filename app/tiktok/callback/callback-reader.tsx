"use client";

import { useSearchParams } from "next/navigation";

export default function CallbackReader() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const scopes = searchParams.get("scopes");
  const state = searchParams.get("state");

  const display = JSON.stringify({ code, scopes, state }, null, 2);

  return (
    <>
      <pre className="mt-8 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900 p-4 font-mono text-sm text-zinc-300">
        {display}
      </pre>
      <p className="mt-4 text-sm text-zinc-400">
        Tip: select the code above and copy it, then finish setup locally.
      </p>
    </>
  );
}
