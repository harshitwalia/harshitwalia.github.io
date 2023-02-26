import { c as create_ssr_component, v as validate_component, d as each } from "../../../../chunks/index.js";
import { _ as _3_2_1_grid } from "../../../../chunks/3-2-1-grid.js";
import { S as Section } from "../../../../chunks/section.js";
import { Q as Quote_post_card } from "../../../../chunks/quote-post-card.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { quotes } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section id="${"quote"}">${validate_component(Section, "Section").$$render($$result, { align: "top", title: "Food For Thought" }, {}, {
    default: () => {
      return `<div class="${"container"}">${validate_component(_3_2_1_grid, "BlogGrid").$$render($$result, {}, {}, {
        default: () => {
          return `${each(quotes, (quote) => {
            return `${validate_component(Quote_post_card, "QuotePostCard").$$render($$result, { quote }, {}, {})}`;
          })}`;
        }
      })}</div>`;
    }
  })}</section>`;
});
export {
  Page as default
};
