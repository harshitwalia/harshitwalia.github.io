import { c as create_ssr_component } from "./index.js";
const _321Grid_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid-container.svelte-1i7nkbm{width:100%;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;grid-gap:20px}@media(max-width: 900px){.grid-container.svelte-1i7nkbm{grid-template-columns:1fr}}@media(min-width: 901px){.grid-container.svelte-1i7nkbm>:nth-child(6n + 1){grid-column:span 6}.grid-container.svelte-1i7nkbm>:nth-child(6n + 2){grid-column:span 3}.grid-container.svelte-1i7nkbm>:nth-child(6n + 3){grid-column:span 3}.grid-container.svelte-1i7nkbm>:nth-child(6n + 4),.grid-container.svelte-1i7nkbm :nth-child(6n + 5),.grid-container.svelte-1i7nkbm :nth-child(6n + 6){grid-column:span 2}}",
  map: null
};
const _3_2_1_grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"grid-container svelte-1i7nkbm"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  _3_2_1_grid as _
};
