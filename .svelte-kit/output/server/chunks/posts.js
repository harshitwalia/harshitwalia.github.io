import { _ as __vite_glob_0_0, a as __vite_glob_0_1, b as __vite_glob_0_2 } from "./software-craftmanship.js";
import "prismjs";
import "prism-svelte";
import readingTime from "reading-time";
const imports = /* @__PURE__ */ Object.assign({ "./posts/open-source-x-free-software.md": __vite_glob_0_0, "./posts/purpose-of-this-blog.md": __vite_glob_0_1, "./posts/software-craftmanship.md": __vite_glob_0_2 });
const posts = [];
for (const path in imports) {
  const post = imports[path];
  if (post) {
    posts.push({
      ...post.metadata,
      ...post.default.render()
    });
  }
}
const allTagsAndPosts = posts.filter((x) => !x.hidden).map(
  (post) => post.tags.map((tag) => {
    return { tag, post };
  })
).flat();
const categories = groupByTags(allTagsAndPosts);
function groupByTags(array) {
  return array.reduce((acc, value) => {
    const property = value["tag"];
    acc[property] = acc[property] || [];
    acc[property].push(value["post"]);
    return acc;
  }, {});
}
function getRelatedPosts(post) {
  let allRelatedPosts = [];
  for (const tag of post.tags) {
    allRelatedPosts = allRelatedPosts.concat(categories[tag]);
  }
  let relatedPosts = [];
  for (const relPost of allRelatedPosts) {
    if (relPost.slug === post.slug) {
      continue;
    }
    const rel = relatedPosts.find((x) => x.post.slug === relPost.slug);
    if (rel) {
      rel.count++;
    } else {
      relatedPosts.push({
        post: { ...relPost, readingTime: readingTime(relPost.html).text },
        count: 1,
        date: relPost.date
      });
    }
  }
  if (relatedPosts.length === 0) {
    relatedPosts = posts.filter((x) => x.slug !== post.slug).map((x) => ({
      post: { ...x, readingTime: readingTime(x.html).text },
      count: 0,
      date: x.date
    }));
  }
  return relatedPosts;
}
const filteredPosts = posts.filter((post) => !post.hidden).sort(
  (a, b) => new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : 0
).map((post) => {
  const readingTimeDuration = readingTime(post.html).text;
  const relatedPosts = getRelatedPosts(post);
  return {
    ...post,
    readingTime: readingTimeDuration,
    relatedPosts: relatedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).sort((a, b) => b.count - a.count).slice(0, 3).map((x) => x.post)
  };
});
export {
  filteredPosts as f
};
