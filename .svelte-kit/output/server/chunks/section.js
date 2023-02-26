import { c as create_ssr_component, e as escape, b as add_attribute, f as compute_slots } from "./index.js";
const tag_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".tag.svelte-1gq1fza{display:flex;align-items:center;justify-content:center;gap:5px;padding:5px 15px;border-radius:10px;font-weight:500;font-size:0.85rem;width:fit-content;white-space:nowrap}.tag.primary.svelte-1gq1fza{background-color:var(--primary-lightest-color);color:var(--primary-color)}.tag.secondary.svelte-1gq1fza{background-color:var(--secondary-lightest-color);color:var(--secondary-color)}",
  map: null
};
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "primary" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$1);
  return `<div class="${"tag " + escape(color, true) + " svelte-1gq1fza"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { url = null } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `${url ? `<a class="${"card clickable"}"${add_attribute("href", url, 0)} data-sveltekit-preload-data>${$$slots.image ? `${slots.image ? slots.image({}) : ``}` : ``}
		<div class="${"body"}"><div class="${"content"}">${slots.content ? slots.content({}) : ``}</div>
			${$$slots.footer ? `<div class="${"footer"}">${slots.footer ? slots.footer({}) : ``}</div>` : ``}</div></a>` : `<div class="${"card"}">${$$slots.image ? `${slots.image ? slots.image({}) : ``}` : ``}
		<div class="${"body"}"><div class="${"content"}">${slots.content ? slots.content({}) : ``}</div>
			${$$slots.footer ? `<div class="${"footer"}">${slots.footer ? slots.footer({}) : ``}</div>` : ``}</div></div>`}`;
});
const section_svelte_svelte_type_style_lang = "";
const css = {
  code: ".section-container.svelte-746x6z.svelte-746x6z{display:flex;align-items:center;justify-content:space-between;gap:40px;padding:50px 0}.section-container.svelte-746x6z .title-area.svelte-746x6z{flex:2;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:15px}.section-container.svelte-746x6z .title-area .text.svelte-746x6z{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px}.section-container.svelte-746x6z .title-area .button.svelte-746x6z{min-width:180px;max-width:100%;width:auto}.section-container.svelte-746x6z .content-area.svelte-746x6z{flex:5;display:flex;flex-direction:column;justify-content:center;align-items:center}@media(min-width: 577px){.section-container.left.svelte-746x6z .title-area.svelte-746x6z{order:1}.section-container.left.svelte-746x6z .content-area.svelte-746x6z{order:2}.section-container.right.svelte-746x6z .title-area.svelte-746x6z{order:2}.section-container.right.svelte-746x6z .content-area.svelte-746x6z{order:1}.section-container.top.svelte-746x6z.svelte-746x6z{flex-direction:column}.section-container.top.svelte-746x6z .title-area.svelte-746x6z{order:1;max-width:600px}.section-container.top.svelte-746x6z .content-area.svelte-746x6z{order:2;width:100%}}@media(max-width: 576px){.section-container.svelte-746x6z.svelte-746x6z{flex-direction:column}}",
  map: null
};
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = null } = $$props;
  let { description = null } = $$props;
  let { buttonText = null } = $$props;
  let { buttonUrl = null } = $$props;
  let { buttonColor = "primary" } = $$props;
  let { align = "left" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.buttonText === void 0 && $$bindings.buttonText && buttonText !== void 0)
    $$bindings.buttonText(buttonText);
  if ($$props.buttonUrl === void 0 && $$bindings.buttonUrl && buttonUrl !== void 0)
    $$bindings.buttonUrl(buttonUrl);
  if ($$props.buttonColor === void 0 && $$bindings.buttonColor && buttonColor !== void 0)
    $$bindings.buttonColor(buttonColor);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  $$result.css.add(css);
  return `<div class="${"section-container " + escape(align, true) + " svelte-746x6z"}"><div class="${"title-area svelte-746x6z"}">${title || description ? `<div class="${"text svelte-746x6z"}">${title ? `<h2>${escape(title)}</h2>` : ``}
				${description ? `<p>${escape(description)}</p>` : ``}</div>` : ``}
		${buttonText && buttonUrl ? `<a class="${"button " + escape(buttonColor, true) + " svelte-746x6z"}"${add_attribute("href", buttonUrl, 0)}>${escape(buttonText)}</a>` : ``}</div>
	<div class="${"content-area svelte-746x6z"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
export {
  Card as C,
  Section as S,
  Tag as T
};
