import { c as create_ssr_component, e as escape, b as add_attribute, o as onDestroy, d as each, v as validate_component } from "./index.js";
const singleSparkle_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".wrapper.svelte-sixv8c.svelte-sixv8c{position:absolute;pointer-events:none;display:flex;z-index:2;animation:svelte-sixv8c-grow-and-shrink 900ms ease-in-out forwards}.wrapper.svelte-sixv8c svg.svelte-sixv8c{animation:svelte-sixv8c-spin 900ms linear forwards}@keyframes svelte-sixv8c-grow-and-shrink{0%{transform:scale(0)}50%{transform:scale(1)}100%{transform:scale(0)}}@keyframes svelte-sixv8c-spin{from{transform:rotate(0deg)}to{transform:rotate(180deg)}}",
  map: null
};
const Single_sparkle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color } = $$props;
  let { size } = $$props;
  let { style } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$1);
  return `<div class="${"wrapper svelte-sixv8c"}" style="${"top: " + escape(style.top, true) + "; left: " + escape(style.left, true) + ";"}"><svg${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} viewBox="${"0 0 160 160"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-sixv8c"}"><path d="${"M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"}"${add_attribute("fill", color, 0)}></path></svg>
</div>`;
});
const sparkles_svelte_svelte_type_style_lang = "";
const css = {
  code: ".sparkle-wrapper.svelte-exdx8u.svelte-exdx8u{position:relative;display:inline-block}.sparkle-wrapper.svelte-exdx8u .slot-wrapper.svelte-exdx8u{position:relative;z-index:1}",
  map: null
};
const Sparkles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sparkles = [];
  let sparklesInterval;
  onDestroy(() => {
    clearInterval(sparklesInterval);
  });
  $$result.css.add(css);
  return `<div class="${"sparkle-wrapper svelte-exdx8u"}">${each(sparkles, (sparkle) => {
    return `${validate_component(Single_sparkle, "Sparkle").$$render(
      $$result,
      {
        color: sparkle.color,
        size: sparkle.size,
        style: sparkle.style
      },
      {},
      {}
    )}`;
  })}
	<div class="${"slot-wrapper svelte-exdx8u"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
const Sparkling_highlight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Sparkles, "Sparkles").$$render($$result, {}, {}, {
    default: () => {
      return `<strong class="${"text-secondary"}">${slots.default ? slots.default({}) : ``}</strong>`;
    }
  })}`;
});
export {
  Sparkling_highlight as S
};
