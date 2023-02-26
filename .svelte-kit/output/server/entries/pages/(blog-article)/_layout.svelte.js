import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component, d as each } from "../../../chunks/index.js";
/* empty css                   */import { H as Header, F as Footer } from "../../../chunks/footer.js";
import { I as Image } from "../../../chunks/image.js";
import { T as Tag, S as Section } from "../../../chunks/section.js";
import dateformat from "dateformat";
import { B as Blog_post_card } from "../../../chunks/blog-post-card.js";
import { k as keywords, t as title, s as siteBaseUrl } from "../../../chunks/meta.js";
const _3x3Grid_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid-container.svelte-rrhmkd{width:100%;display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:20px}@media(max-width: 576px){.grid-container.svelte-rrhmkd{grid-template-columns:1fr}}",
  map: null
};
const _3x3_grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"grid-container svelte-rrhmkd"}">${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let post;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ post } = data);
  return `${$$result.head += `<!-- HEAD_svelte-78h6u2_START --><meta name="${"keywords"}"${add_attribute("content", post.tags.concat(keywords).join(", "), 0)}><meta name="${"description"}"${add_attribute("content", post.excerpt, 0)}><meta property="${"og:description"}"${add_attribute("content", post.excerpt, 0)}><meta name="${"twitter:description"}"${add_attribute("content", post.excerpt, 0)}>${$$result.title = `<title>${escape(post.title)} - ${escape(title)}</title>`, ""}<meta property="${"og:title"}" content="${escape(post.title, true) + " - " + escape(title, true)}"><meta name="${"twitter:title"}" content="${escape(post.title, true) + " - " + escape(title, true)}"><meta property="${"og:image"}" content="${escape(siteBaseUrl, true) + "/images/posts/" + escape(post.slug, true) + "/cover.jpg"}"><meta name="${"twitter:image"}" content="${escape(siteBaseUrl, true) + "/images/posts/" + escape(post.slug, true) + "/cover.jpg"}"><!-- HEAD_svelte-78h6u2_END -->`, ""}


<div class="${"markdown-layout"}">${validate_component(Header, "Header").$$render($$result, { animated: false }, {}, {})}
	<main><article id="${"markdown-content"}"><div class="${"header"}"><h1>${escape(post.title)}</h1>
				<div class="${"note"}">Published on ${escape(dateformat(post.date, "UTC:dd mmmm yyyy"))}</div>
				${post.updated ? `<div class="${"note"}">Updated on ${escape(dateformat(post.updated, "UTC:dd mmmm yyyy"))}</div>` : ``}
				<div class="${"note"}">${escape(post.readingTime)}</div>
				<div class="${"tags"}">${each(post.tags, (tag) => {
    return `${validate_component(Tag, "Tag").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(tag)}`;
      }
    })}`;
  })}</div></div>
			<div class="${"cover-image"}">${validate_component(Image, "Image").$$render(
    $$result,
    {
      path: "posts/" + post.slug,
      filename: "cover",
      alt: "Cover Image"
    },
    {},
    {}
  )}</div>
			<div class="${"content"}">${slots.default ? slots.default({}) : ``}</div></article>
		${post.relatedPosts && post.relatedPosts.length > 0 ? `<div class="${"related-posts container"}">${validate_component(Section, "Section").$$render(
    $$result,
    {
      title: "Related posts",
      description: "Have some time? Feel free to read some other posts by me.",
      align: "top"
    },
    {},
    {
      default: () => {
        return `${validate_component(_3x3_grid, "ThreeByThreeGrid").$$render($$result, {}, {}, {
          default: () => {
            return `${each(post.relatedPosts, (rel) => {
              return `${validate_component(Blog_post_card, "BlogPostCard").$$render($$result, { post: rel }, {}, {})}`;
            })}`;
          }
        })}`;
      }
    }
  )}</div>` : ``}</main>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
