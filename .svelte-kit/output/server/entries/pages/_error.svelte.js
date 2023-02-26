import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { E as Error } from "../../chunks/error.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error-page.svelte-2lhmaz.svelte-2lhmaz{background:var(--page-background-color);position:relative}.container.svelte-2lhmaz.svelte-2lhmaz{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:60vh;text-align:center}.container.svelte-2lhmaz .svg-wrapper.svelte-2lhmaz{width:300px;margin-top:-60px;margin-bottom:-30px}.container.svelte-2lhmaz .svg-wrapper.svelte-2lhmaz svg{filter:drop-shadow(2px 6px 0px rgba(0, 0, 0, 0.1))}.container.svelte-2lhmaz .button.svelte-2lhmaz{margin-top:30px;width:fit-content}",
  map: null
};
const Error_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"error-page svelte-2lhmaz"}"><div class="${"container svelte-2lhmaz"}"><h1>Oh no!</h1>
		<div class="${"svg-wrapper svelte-2lhmaz"}">${validate_component(Error, "Error").$$render($$result, {}, {}, {})}</div>
		<p>It seems like coffee was spilled all over this page, and now it can&#39;t be displayed.</p>
		<a class="${"button secondary svelte-2lhmaz"}" href="${"/"}">Start over</a></div>
</div>`;
});
export {
  Error_1 as default
};
