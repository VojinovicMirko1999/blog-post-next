import { sortByDate } from "@/utils";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const files = fs.readdirSync(path.join("src/posts"));

export function getPosts() {
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("src/posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return { slug, frontmatter };
  });

  return posts.sort(sortByDate);
}
