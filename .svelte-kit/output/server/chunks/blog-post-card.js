import { c as create_ssr_component, v as validate_component, d as each, e as escape } from "./index.js";
import { C as Card, T as Tag } from "./section.js";
import { I as Image } from "./image.js";
const Blog_post_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  let { showImage = true } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  if ($$props.showImage === void 0 && $$bindings.showImage && showImage !== void 0)
    $$bindings.showImage(showImage);
  return `${post ? `${validate_component(Card, "Card").$$render($$result, { url: "/" + post.slug }, {}, {
    footer: () => {
      return `<div slot="${"footer"}">${post.tags ? `<div class="${"tags"}">${each(post.tags.slice(0, 2), (tag) => {
        return `${validate_component(Tag, "Tag").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(tag)}`;
          }
        })}`;
      })}</div>` : ``}</div>`;
    },
    content: () => {
      return `<div slot="${"content"}"><div class="${"title"}">${escape(post.title)}</div>
			<div class="${"note"}">${escape(post.readingTime)}</div>
			<div class="${"text"}">${escape(post.excerpt)}</div></div>`;
    },
    image: () => {
      return `<div slot="${"image"}">${showImage ? `${validate_component(Image, "Image").$$render(
        $$result,
        {
          path: "posts/" + post.slug,
          filename: "cover",
          alt: "Cover Image"
        },
        {},
        {}
      )}` : ``}</div>`;
    }
  })}` : ``}`;
});
export {
  Blog_post_card as B
};
