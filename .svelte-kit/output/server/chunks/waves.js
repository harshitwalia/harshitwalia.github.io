import { c as create_ssr_component } from "./index.js";
const waves_svelte_svelte_type_style_lang = "";
const css = {
  code: ".waves-container.svelte-25s5b0.svelte-25s5b0{background:linear-gradient(60deg, var(--waves-color-start) 0%, var(--waves-color-end) 100%);position:absolute;width:100%;height:min(65vh, 500px)}@media(max-width: 576px){.waves-container.svelte-25s5b0.svelte-25s5b0{height:min(75vh, 400px)}}.waves.svelte-25s5b0.svelte-25s5b0{position:absolute;bottom:0;width:100%;height:15vh;min-height:100px;max-height:150px}@media screen and (prefers-reduced-motion: no-preference){.parallax.svelte-25s5b0>use.svelte-25s5b0{animation:svelte-25s5b0-move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite}}.parallax.svelte-25s5b0>use.svelte-25s5b0:nth-child(1){animation-delay:-2s;animation-duration:7s}.parallax.svelte-25s5b0>use.svelte-25s5b0:nth-child(2){animation-delay:-3s;animation-duration:10s}.parallax.svelte-25s5b0>use.svelte-25s5b0:nth-child(3){animation-delay:-4s;animation-duration:13s}.parallax.svelte-25s5b0>use.svelte-25s5b0:nth-child(4){animation-delay:-5s;animation-duration:20s}@keyframes svelte-25s5b0-move-forever{0%{transform:translate3d(-90px, 0, 0)}100%{transform:translate3d(85px, 0, 0)}}",
  map: null
};
const Waves = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"waves-container svelte-25s5b0"}"><svg class="${"waves svelte-25s5b0"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" viewBox="${"0 24 150 28"}" preserveAspectRatio="${"none"}" shape-rendering="${"auto"}"><defs><path id="${"gentle-wave"}" d="${"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"}"></path></defs><g class="${"parallax svelte-25s5b0"}"><use xlink:href="${"#gentle-wave"}" x="${"48"}" y="${"0"}" fill="${"rgba(var(--page-background-color-rgb),0.7)"}" class="${"svelte-25s5b0"}"></use><use xlink:href="${"#gentle-wave"}" x="${"48"}" y="${"3"}" fill="${"rgba(var(--page-background-color-rgb),0.5)"}" class="${"svelte-25s5b0"}"></use><use xlink:href="${"#gentle-wave"}" x="${"48"}" y="${"5"}" fill="${"rgba(var(--page-background-color-rgb),0.3)"}" class="${"svelte-25s5b0"}"></use><use xlink:href="${"#gentle-wave"}" x="${"48"}" y="${"7"}" fill="${"var(--page-background-color)"}" class="${"svelte-25s5b0"}"></use></g></svg>
</div>`;
});
export {
  Waves as W
};
