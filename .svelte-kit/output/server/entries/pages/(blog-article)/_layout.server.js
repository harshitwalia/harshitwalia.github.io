import { e as error } from "../../../chunks/index2.js";
import { f as filteredPosts } from "../../../chunks/posts.js";
async function load({ params }) {
  const post = filteredPosts.find((x) => x.slug === params.slug);
  if (post) {
    return {
      post
    };
  }
  throw error(500, `Could not load ${params.slug}`);
}
export {
  load
};
