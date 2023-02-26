import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "./index.js";
import { H as Header, F as Footer } from "./footer.js";
import { I as Image } from "./image.js";
import { s as siteBaseUrl } from "./meta.js";
const Article = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { title, image, excerpt } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-daj35h_START -->${title ? `${$$result.title = `<title>${escape(title)}</title>`, ""}
		<meta property="${"og:title"}"${add_attribute("content", title, 0)}>
		<meta name="${"twitter:title"}"${add_attribute("content", title, 0)}>` : ``}${excerpt ? `<meta name="${"description"}"${add_attribute("content", excerpt, 0)}>
		<meta property="${"og:description"}"${add_attribute("content", excerpt, 0)}>
		<meta name="${"twitter:description"}"${add_attribute("content", excerpt, 0)}>` : ``}${image ? `<meta property="${"og:image"}" content="${escape(siteBaseUrl, true) + "/images/" + escape(image.path, true) + "/" + escape(image.filename, true) + ".png"}">
		<meta name="${"twitter:image"}" content="${escape(siteBaseUrl, true) + "/images/" + escape(image.path, true) + "/" + escape(image.filename, true) + ".png"}">` : ``}<!-- HEAD_svelte-daj35h_END -->`, ""}


<div class="${"markdown-layout"}">${validate_component(Header, "Header").$$render($$result, { animated: false }, {}, {})}
	<main><article id="${"markdown-content"}">${title ? `<div class="${"header"}"><h1>${escape(title)}</h1></div>` : ``}
			${image ? `<div class="${"cover-image"}">${validate_component(Image, "Image").$$render(
    $$result,
    {
      path: image.path,
      filename: image.filename,
      alt: "Cover Image"
    },
    {},
    {}
  )}</div>` : ``}
			<div class="${"content"}">${slots.default ? slots.default({}) : ``}</div></article></main>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Article as A
};
