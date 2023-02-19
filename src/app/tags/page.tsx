import { getAllTags } from "@ghost";
import Link from "next/link";
import { FC } from "react";

const Tags = async () => {
  const tags = await getAllTags();
  const paths = tags.map(({ slug }) => slug);

  return (
    <div>
      <ul>
        {paths.map((path) => (
          <li key={path}>
            <Link href={`/tags/${path}`}>#{path}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
