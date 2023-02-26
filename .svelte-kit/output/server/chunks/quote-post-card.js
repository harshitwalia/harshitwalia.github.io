import { c as create_ssr_component, v as validate_component, d as each, e as escape } from "./index.js";
import { C as Card, T as Tag } from "./section.js";
import { I as Image } from "./image.js";
const Quote_post_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { quote } = $$props;
  let { showImage = false } = $$props;
  if ($$props.quote === void 0 && $$bindings.quote && quote !== void 0)
    $$bindings.quote(quote);
  if ($$props.showImage === void 0 && $$bindings.showImage && showImage !== void 0)
    $$bindings.showImage(showImage);
  return `${quote ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    footer: () => {
      return `<div slot="${"footer"}">${quote.tags ? `<div class="${"tags"}">${each(quote.tags.slice(0, 2), (tag) => {
        return `${validate_component(Tag, "Tag").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(tag)}`;
          }
        })}`;
      })}</div>` : ``}</div>`;
    },
    content: () => {
      return `<div slot="${"content"}"><div class="${"title"}">${escape(quote.title)}</div>
			<div class="${"text"}">${escape(quote.excerpt)}</div></div>`;
    },
    image: () => {
      return `<div slot="${"image"}">${showImage ? `${validate_component(Image, "Image").$$render(
        $$result,
        {
          path: "quotes/" + quote.slug,
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
  Quote_post_card as Q
};
