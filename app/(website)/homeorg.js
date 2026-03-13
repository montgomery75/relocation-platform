import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";

export default function Post({ posts, homepage }) {
  return (
    <>
      {posts && (
        <Container>
          <div className="py-16 text-center">
  <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
    {homepage?.headline || "Move from the U.S. to Europe — the Smart Way"}
  </h1>

<p className="mx-auto mb-8 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
  {homepage?.subheadline}
</p>

  <div className="flex justify-center gap-4">
    <Link
      href={homepage?.ctaLink || "/countries"}
      className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
      {homepage?.ctaText}
    </Link>

    <Link
      href="/visa-guides"
      className="rounded-lg border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-100 dark:text-gray-200">
      Explore Visa Options
    </Link>
  </div>
</div>
<div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
  <Link
    href="/move-to-germany"
    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
    <div className="mb-2 text-2xl">🇩🇪</div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      Move to Germany
    </h3>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
      Visa options, bureaucracy, housing, and first steps.
    </p>
  </Link>

  <Link
    href="/move-to-portugal"
    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
    <div className="mb-2 text-2xl">🇵🇹</div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      Move to Portugal
    </h3>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
      Retirement, D visas, lifestyle, and cost of living.
    </p>
  </Link>

  <Link
    href="/move-to-spain"
    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
    <div className="mb-2 text-2xl">🇪🇸</div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      Move to Spain
    </h3>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
      Residency pathways, taxes, and settling in.
    </p>
  </Link>

  <Link
    href="/move-to-italy"
    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
    <div className="mb-2 text-2xl">🇮🇹</div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      Move to Italy
    </h3>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
      Visa routes, practical setup, and daily life.
    </p>
  </Link>
</div>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {posts.slice(0, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(2, 14).map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all Posts</span>
            </Link>
          </div>
        </Container>
      )}
    </>
  );
}
