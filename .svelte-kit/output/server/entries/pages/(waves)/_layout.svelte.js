import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "../../../chunks/index.js";
import { W as Waves } from "../../../chunks/waves.js";
import { H as Header, F as Footer } from "../../../chunks/footer.js";
import { k as keywords, d as description, t as title, i as image } from "../../../chunks/meta.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1wbk3s_START --><meta name="${"keywords"}"${add_attribute("content", keywords.join(", "), 0)}><meta name="${"description"}"${add_attribute("content", description, 0)}><meta property="${"og:description"}"${add_attribute("content", description, 0)}><meta name="${"twitter:description"}"${add_attribute("content", description, 0)}>${$$result.title = `<title>${escape(title)}</title>`, ""}<meta property="${"og:title"}"${add_attribute("content", title, 0)}><meta name="${"twitter:title"}"${add_attribute("content", title, 0)}><meta property="${"og:image"}"${add_attribute("content", image, 0)}><meta name="${"twitter:image"}"${add_attribute("content", image, 0)}><!-- HEAD_svelte-1wbk3s_END -->`, ""}


${validate_component(Waves, "Waves").$$render($$result, {}, {}, {})}
${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<main>${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
