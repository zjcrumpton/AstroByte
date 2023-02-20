import { TopNav } from "@/components/TopNav";
import { getAllPosts } from "@ghost";
import Link from "next/link";
import { Route, routes } from "../routes";

const Blog = async () => {
  const posts = await getAllPosts();

  return (
    <div>
      <TopNav links={routes} activeRoute={Route.BLOG} />
      <h1>Welcome to the blog</h1>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
