import HomePage from "./home";
import { getAllPosts, getHomepage } from "@/lib/sanity/client";

export default async function IndexPage() {
  const posts = await getAllPosts();
  const homepage = await getHomepage();

  return <HomePage posts={posts} homepage={homepage} />;
}
