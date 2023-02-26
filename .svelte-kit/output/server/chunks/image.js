import { c as create_ssr_component, e as escape, b as add_attribute } from "./index.js";
/* empty css                                     */const css = {
  code: "picture.svelte-1gy5t1o.svelte-1gy5t1o{position:relative;width:100%;height:100%}picture.svelte-1gy5t1o img.svelte-1gy5t1o{width:100%;height:100%}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { alt } = $$props;
  let { path = null } = $$props;
  let { filename } = $$props;
  let { figcaption = null } = $$props;
  let imageSrc;
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.filename === void 0 && $$bindings.filename && filename !== void 0)
    $$bindings.filename(filename);
  if ($$props.figcaption === void 0 && $$bindings.figcaption && figcaption !== void 0)
    $$bindings.figcaption(figcaption);
  $$result.css.add(css);
  imageSrc = `/optimized-images/${path ? path + "/" : ""}${filename}`;
  return `<picture class="${"svelte-1gy5t1o"}"><source srcset="${escape(imageSrc, true) + ".avif"}" type="${"image/avif"}">
	<source srcset="${escape(imageSrc, true) + ".webp"}" type="${"image/webp"}">
	<img src="${escape(imageSrc, true) + ".png"}"${add_attribute("alt", alt, 0)} loading="${"lazy"}" decoding="${"async"}" class="${"svelte-1gy5t1o"}">
	${figcaption ? `
		<figcaption><!-- HTML_TAG_START -->${figcaption}<!-- HTML_TAG_END --></figcaption>` : ``}
</picture>`;
});
export {
  Image as I
};
