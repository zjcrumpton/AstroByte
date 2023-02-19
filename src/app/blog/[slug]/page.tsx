import { getPostBySlug } from "@ghost";
import Link from "next/link";

interface BlogPostProps {
  params: { slug: string };
}

const BlogPost = async (props: BlogPostProps) => {
  const { params } = props;
  const { slug } = params;
  const data = await getPostBySlug(slug);
  const html = data.html ?? "";

  return (
    <article>
      <h1>{data.title}</h1>
      <div>
        {data.tags?.map((tag) => (
          <Link key={tag.id} href={`/tags/${tag.slug}`}>
            #{tag.name}
          </Link>
        ))}
      </div>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
};

export default BlogPost;
