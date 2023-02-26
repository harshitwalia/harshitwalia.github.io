import { e as error } from "../../../chunks/index2.js";
import { f as filteredPosts } from "../../../chunks/posts.js";
import { f as filteredQuotes } from "../../../chunks/quotes.js";
async function load({ params }) {
  const result = Object.keys(filteredPosts).slice(0, 4).map((index) => {
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
  const qresult = Object.keys(filteredQuotes).slice(0, 4).map((index) => {
    const { slug, title, date, excerpt, tags, readingTime } = filteredQuotes[index];
    return {
      slug,
      title,
      date,
      excerpt,
      tags,
      readingTime
    };
  });
  if (result && qresult) {
    return {
      posts: result,
      quotes: qresult
    };
  }
  throw error(500, `Could not load ${params.slug}`);
}
export {
  load
};
