import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";

export default function HomePage({ posts = [], homepage }) {
  const featuredPosts = posts.slice(0, 3);

  return (
    <Container>
      {/* HERO */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Verified & AI-driven relocation service
          </p>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-6xl">
            {homepage?.headline ||
              "Move from the US to Europe with Confidence"}
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl">
            {homepage?.subheadline ||
              "Discover which European countries and residency paths actually fit your situation — then build a clear relocation plan step by step."}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={homepage?.ctaLink || "/countries"}
              className="inline-flex min-w-[220px] items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700">
              {homepage?.ctaText || "Find Your Best-Fit Country"}
            </Link>

            <Link
              href="/how-it-works"
              className="inline-flex min-w-[220px] items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="pb-10 md:pb-14">
        <div className="grid gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-4 dark:bg-gray-800">
            Verified relocation guidance
          </div>
          <div className="rounded-xl bg-white p-4 dark:bg-gray-800">
            AI-powered country &amp; visa matching
          </div>
          <div className="rounded-xl bg-white p-4 dark:bg-gray-800">
            Structured relocation planning system
          </div>
          <div className="rounded-xl bg-white p-4 dark:bg-gray-800">
            Built for Americans relocating to Europe
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            A simple process to turn relocation uncertainty into a clear plan.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Answer a few questions
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Tell us about your citizenship, work situation, income,
              retirement plans, family status, and timeline.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Get matched with suitable countries
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Discover which European countries and residence pathways best
              match your situation.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Build your relocation plan
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Understand requirements, documents, complexity, and next steps to
              move forward more confidently.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href={homepage?.ctaLink || "/countries"}
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700">
            {homepage?.ctaText || "Find Your Best-Fit Country"}
          </Link>
        </div>
      </section>

      {/* CORE TOOLS */}
      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Core platform tools
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            The platform is designed to do more than provide content. It helps
            users move through a structured decision process.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-3 text-2xl">🌍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Country Match Tool
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Find the European countries that fit your personal profile,
              financial situation, and relocation goals.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-3 text-2xl">📋</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Visa Eligibility Checker
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Identify possible residence permits and visa pathways based on
              your situation.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-3 text-2xl">⚙️</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Relocation Complexity Check
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Understand how complex your move may be based on bureaucracy,
              paperwork, income structure, family status, and timeline.
            </p>
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="py-14 md:py-18">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
              Why EuropeRelocator
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Most relocation information online is fragmented
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              People jump between government websites, expat forums, blog
              posts, and lawyer pages — often with conflicting or outdated
              information.
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              EuropeRelocator brings relocation planning into one structured
              system.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900">
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li>• Verified relocation guidance</li>
              <li>• AI-supported matching and analysis</li>
              <li>• Structured relocation workflow</li>
              <li>• Country and visa comparison</li>
              <li>• Document preparation guidance</li>
              <li>• Clearer next steps</li>
            </ul>

            <p className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
              The result: clarity instead of confusion.
            </p>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Who EuropeRelocator is for
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            EuropeRelocator is built for Americans exploring a move to Europe
            from different life stages and situations.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Americans retiring in Europe
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              Understand residency options and practical requirements before
              committing to a country.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Dual citizens returning to Europe
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              Plan relocation logistics and administrative setup more
              efficiently.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Remote workers and self-employed professionals
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              Explore residence options that work with remote income and more
              flexible living arrangements.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Couples with mixed citizenship
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              Understand residency possibilities and legal pathways for both
              partners.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href={homepage?.ctaLink || "/countries"}
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700">
            {homepage?.ctaText || "Find Your Best-Fit Country"}
          </Link>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-14 md:py-18">
        <div className="rounded-3xl bg-blue-50 px-6 py-10 dark:bg-blue-950/30 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              What you get
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              The platform turns scattered information into a clear relocation
              strategy.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-white p-5 text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-300">
              A shortlist of matching European countries
            </div>
            <div className="rounded-xl bg-white p-5 text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-300">
              Realistic residence and visa pathways
            </div>
            <div className="rounded-xl bg-white p-5 text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-300">
              A clearer relocation strategy
            </div>
            <div className="rounded-xl bg-white p-5 text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-300">
              Personalized requirements and document overview
            </div>
            <div className="rounded-xl bg-white p-5 text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-300 md:col-span-2">
              A structured relocation planning process with clearer next steps
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Is this only for Germany?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Germany is one of the main focus countries, but the platform is
                designed to evaluate multiple European countries to help users
                identify the best fit.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Can this help if I’m retired?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Yes. Many users explore relocation options after retirement, and
                the platform helps identify countries where residency may be
                possible.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Does this replace an immigration lawyer?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                No. The platform helps users understand their options and
                prepare structured information. Some users may still choose to
                work with immigration professionals.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Do I need to create an account immediately?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                No. Users can begin with the Country Match Tool and only create
                a profile if they want to receive their full report.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPTIONAL RESOURCES / ARTICLES */}
      {featuredPosts.length > 0 && (
        <section className="py-14 md:py-18">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Relocation Guides and Resources
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Explore practical articles to support your relocation planning.
            </p>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/archive"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
              View All Articles
            </Link>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="py-16 md:py-24">
        <div className="rounded-3xl bg-gray-900 px-6 py-12 text-center dark:bg-gray-100 md:px-10">
          <h2 className="text-3xl font-bold tracking-tight text-white dark:text-gray-900 md:text-4xl">
            Start with the countries that actually fit you
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300 dark:text-gray-700">
            Discover which European countries match your situation and
            relocation goals.
          </p>

          <div className="mt-8">
            <Link
              href={homepage?.ctaLink || "/countries"}
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700">
              {homepage?.ctaText || "Find Your Best-Fit Country"}
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}
