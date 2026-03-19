import Link from "next/link";
import Container from "@/components/container";

export default function Footer(props) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-gray-100 dark:border-gray-800">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              EuropeRelocator
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-600 dark:text-gray-400">
              Verified &amp; AI driven relocation service for Americans moving to
              Europe.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/how-it-works">How It Works</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
              <li>
                <Link href="/imprint">Imprint</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 py-6 dark:border-gray-800">
          <p className="mx-auto max-w-4xl text-center text-sm leading-6 text-gray-500 dark:text-gray-500">
            EuropeRelocator provides general informational and organizational
            support only and does not provide legal advice, legal
            representation, or tax advice. Immigration outcomes depend on your
            individual circumstances and official government review. For legal
            advice, please consult a qualified immigration attorney.
          </p>

          <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-500">
            Copyright © {year} EuropeRelocator. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}