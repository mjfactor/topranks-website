import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Top-Ranks! Publisher",
  description: "Privacy Policy for Top-Ranks! Publisher.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-zinc-400">
        Last updated September 15, 2026
      </p>

      <div className="mt-8 space-y-8 leading-7 text-zinc-300">
        <section>
          <h2 className="text-xl font-semibold text-zinc-100">
            What this covers
          </h2>
          <p className="mt-2">
            This policy covers the Top-Ranks! Publisher website. No account is
            needed to browse this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100">
            Information you provide
          </h2>
          <p className="mt-2">
            If you contact us, we receive the chat or email content you send.
            If you connect TikTok authorization, we receive the connected
            TikTok auth data plus account details and the media, captions, and
            publishing choices needed for the requested action only.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100">
            How information is used and shared
          </h2>
          <p className="mt-2">
            Information is used to operate this site and keep it secure, and is
            shared via the TikTok API under TikTok&apos;s policies to perform
            actions you request. We do not sell your information and do not
            use it for advertising.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100">
            Retention and security
          </h2>
          <p className="mt-2">
            We retain information only as long as needed for the purposes
            described here and take reasonable steps to protect it. No method
            of transmission or storage is completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100">Your choices</h2>
          <p className="mt-2">
            You may request access, correction, or deletion of your information
            and may revoke TikTok access at any time via your TikTok settings
            or by emailing{" "}
            <a
              href="mailto:emjayfactor@gmail.com"
              className="text-zinc-100 underline underline-offset-4"
            >
              emjayfactor@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100">
            Changes and contact
          </h2>
          <p className="mt-2">
            We may update this policy from time to time. Questions about this
            policy can be sent to{" "}
            <a
              href="mailto:emjayfactor@gmail.com"
              className="text-zinc-100 underline underline-offset-4"
            >
              emjayfactor@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
