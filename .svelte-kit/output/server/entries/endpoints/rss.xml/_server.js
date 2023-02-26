import { t as title, s as siteBaseUrl, d as description } from "../../../chunks/meta.js";
import { f as filteredPosts } from "../../../chunks/posts.js";
import { f as filteredQuotes } from "../../../chunks/quotes.js";
const prerender = true;
async function GET() {
  const body = xml(filteredPosts, filteredQuotes);
  const headers = {
    "Cache-Control": "max-age=0, s-maxage=3600",
    "Content-Type": "application/xml"
  };
  return new Response(body, { headers });
}
const xml = (posts, quotes) => `
<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>${title}</title>
    <link>${siteBaseUrl}</link>
    <description>${description}</description>
    ${posts.map(
  (post) => `
        <item>
          <title>${post.title}</title>
          <description>${post.excerpt}</description>
          <link>${siteBaseUrl}/${post.slug}/</link>
          <pubDate>${new Date(post.date).toISOString()}</pubDate>
          ${post.tags ? post.tags.map((tag) => `<category term="${tag}" />`).join("") : ""}
          <media:thumbnail xmlns:media="http://search.yahoo.com/mrss/" url="${siteBaseUrl}/images/posts/${post.slug}/cover.jpg"/>
          <media:content xmlns:media="http://search.yahoo.com/mrss/" medium="image" url="${siteBaseUrl}/images/posts/${post.slug}/cover.jpg"/>
        </item>
      `
).join("")}
    ${quotes.map(
  (quote) => `
        <item>
          <title>${quote.title}</title>
          <description>${quote.excerpt}</description>
          <link>${siteBaseUrl}/${quote.slug}/</link>
          <pubDate>${new Date(quote.date).toISOString()}</pubDate>
          ${quote.tags ? quote.tags.map((tag) => `<category term="${tag}" />`).join("") : ""}
          <media:thumbnail xmlns:media="http://search.yahoo.com/mrss/" url="${siteBaseUrl}/images/quotes/${quote.slug}/cover.jpg"/>
          <media:content xmlns:media="http://search.yahoo.com/mrss/" medium="image" url="${siteBaseUrl}/images/quotes/${quote.slug}/cover.jpg"/>
        </item>
      `
).join("")}
  </channel>
</rss>`;
export {
  GET,
  prerender
};
