import { e as error } from "../../../../chunks/index2.js";
import { f as filteredPosts } from "../../../../chunks/posts.js";
async function load() {
  const result = Object.keys(filteredPosts).map((index) => {
    const { slug, title, date, excerpt, tags, readingTime } = filteredPosts[index];
    return {
      slug,
      title,
      date,
      excerpt,
      tags,
      readingTime
    };
  });
  if (result) {
    return {
      posts: result
    };
  }
  throw error(500, `Could not load blog posts`);
}
export {
  load
};
