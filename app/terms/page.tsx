import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Top-Ranks! Publisher",
  description: "Terms of Service for Top-Ranks! Publisher.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
      <p className="mt-2 text-sm text-zinc-400">
        Last updated September 15, 2026
      </p>

      <div className="mt-8 space-y-8 leading-7 text-zinc-300">
        <section>
          <h2 className="text-xl font-semibold text-zinc-100">Agreement</h2>
          <p className="mt-2">
            These Terms of Service govern your use of the Top-Ranks! Publisher
            website, available at https://topranks-publisher.vercel.app/. By
            accessing or using this site, you agree to these terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100">
            Publishing feature
          </h2>
          <p className="mt-2">
            The publishing feature is owner-only: it performs only authorized
            actions via TikTok-approved APIs on the owner&apos;s own TikTok
            account. The owner reviews all generated content and the intended
            audience before anything is published.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100">
            Your responsibilities
          </h2>
          <p className="mt-2">
            You are responsible for providing accurate information, using only
            content you own or have the right to use, and complying with the
            TikTok Terms of Service, Community Guidelines, and developer
            policies. You must not submit unlawful, infringing, deceptive, or
            harmful content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100">
            Third-party services
          </h2>
          <p className="mt-2">
            TikTok is an independent third-party service. We do not control it
            and cannot guarantee its availability, behavior, or continued
            support of any API feature.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100">
            Availability and disclaimers
          </h2>
          <p className="mt-2">
            This site and its features are provided &quot;as is&quot; without
            warranties of any kind. We do not guarantee uninterrupted
            availability or that the site will be error-free.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100">
            Changes and contact
          </h2>
          <p className="mt-2">
            We may update these terms from time to time. Questions about these
            terms can be sent to{" "}
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
