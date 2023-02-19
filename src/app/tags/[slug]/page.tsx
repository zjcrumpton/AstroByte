import { getAllPostsByTagSlug, getAllTags, getTagBySlug } from "@ghost";
import Link from "next/link";

export const generateStaticParams = async () => {
  const tags = await getAllTags();
  const paths = tags.map(({ slug }) => ({ slug }));

  return paths;
};

interface TagProps {
  params: { slug: string };
}

const Tag = async (props: TagProps) => {
  const { params } = props;
  const { slug } = params;
  const posts = await getAllPostsByTagSlug(slug);
  const tagData = await getTagBySlug(slug);

  return (
    <div>
      <h1>{tagData.name}</h1>
      <p>A collection of {tagData.count?.posts} posts</p>
      <ul>
        {posts.map((post) => (
          <Link key={post.id} href={`blog/${post.slug}`}>
            {post.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Tag;
