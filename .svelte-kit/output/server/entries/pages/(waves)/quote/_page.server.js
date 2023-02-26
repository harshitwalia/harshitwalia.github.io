import { e as error } from "../../../../chunks/index2.js";
import { f as filteredQuotes } from "../../../../chunks/quotes.js";
async function load() {
  const result = Object.keys(filteredQuotes).map((index) => {
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
  if (result) {
    return {
      quotes: result
    };
  }
  throw error(500, `Could not load quotes`);
}
export {
  load
};
