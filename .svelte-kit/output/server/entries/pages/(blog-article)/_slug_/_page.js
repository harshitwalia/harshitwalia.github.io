import { _ as __vite_glob_0_0, a as __vite_glob_0_1, b as __vite_glob_0_2 } from "../../../../chunks/software-craftmanship.js";
const allPosts = /* @__PURE__ */ Object.assign({ "../../../lib/posts/open-source-x-free-software.md": __vite_glob_0_0, "../../../lib/posts/purpose-of-this-blog.md": __vite_glob_0_1, "../../../lib/posts/software-craftmanship.md": __vite_glob_0_2 });
let posts = [];
for (let path in allPosts) {
  const post = allPosts[path];
  const slug = post.metadata.slug;
  const p = { post, slug };
  posts.push(p);
}
function load({ params }) {
  const { slug } = params;
  const filteredPost = posts.find((p) => {
    return p.slug.toLowerCase() === slug.toLowerCase();
  });
  return {
    page: filteredPost.post.default
  };
}
export {
  load
};
