import { c as create_ssr_component, b as add_attribute } from "../../chunks/index.js";
/* empty css                */import { k as keywords } from "../../chunks/meta.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-cp3p9w_START --><meta name="${"keywords"}"${add_attribute("content", keywords.join(", "), 0)}><!-- HEAD_svelte-cp3p9w_END -->`, ""}


${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
