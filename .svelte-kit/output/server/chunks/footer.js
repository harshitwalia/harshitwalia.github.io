import { c as create_ssr_component, v as validate_component, e as escape } from "./index.js";
import { G as Github, L as Linkedin, E as Email } from "./email.js";
const logo_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "#logo.svelte-5moaer.svelte-5moaer.svelte-5moaer{width:auto;height:100%}#logo.svelte-5moaer #name.svelte-5moaer.svelte-5moaer{transition:all 0.2s ease-in-out;fill:var(--text-color);stroke:var(--text-color)}#logo.svelte-5moaer #name path.svelte-5moaer.svelte-5moaer{fill:inherit;stroke:inherit}#logo.svelte-5moaer #icon.svelte-5moaer.svelte-5moaer{transition:all 0.2s ease-in-out;fill:var(--text-light-color);stroke:var(--text-light-color)}#logo.svelte-5moaer #icon #darker.svelte-5moaer.svelte-5moaer{transition:all 0.2s ease-in-out;fill:var(--text-color);stroke:var(--text-color)}#logo.svelte-5moaer #icon path.svelte-5moaer.svelte-5moaer{fill:inherit;stroke:inherit}#logo.svelte-5moaer:hover #icon.svelte-5moaer.svelte-5moaer{fill:url(#paint0_linear);stroke:var(--primary-light-color)}#logo.svelte-5moaer:hover #icon #darker.svelte-5moaer.svelte-5moaer{fill:url(#paint3_linear);stroke:var(--primary-color)}@keyframes svelte-5moaer-animate-svg-fill{0%{fill:transparent}100%{fill:inherit}}@keyframes svelte-5moaer-animate-svg-stroke{0%{stroke-dashoffset:550;stroke-dasharray:550}99.999%{stroke-dasharray:550}100%{stroke-dashoffset:0}}@keyframes svelte-5moaer-animate-svg-stroke-long{0%{stroke-dashoffset:700;stroke-dasharray:700}99.999%{stroke-dasharray:700}100%{stroke-dashoffset:0;stroke-dasharray:700}}@media screen and (prefers-reduced-motion: no-preference){#logo.animated.svelte-5moaer #icon.svelte-5moaer>path.svelte-5moaer{animation:svelte-5moaer-animate-svg-fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4s both, svelte-5moaer-animate-svg-stroke 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s both}#logo.animated.svelte-5moaer #icon #darker.svelte-5moaer>path.svelte-5moaer{animation:svelte-5moaer-animate-svg-fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2s both, svelte-5moaer-animate-svg-stroke 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s both}}",
  map: null
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { animated = true } = $$props;
  if ($$props.animated === void 0 && $$bindings.animated && animated !== void 0)
    $$bindings.animated(animated);
  $$result.css.add(css$3);
  return `<svg id="${"logo"}" width="${"1006"}" height="${"169"}" viewBox="${"0 0 1006 169"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${["svelte-5moaer", animated ? "animated" : ""].join(" ").trim()}"><g id="${"icon"}" class="${"svelte-5moaer"}"><path d="${"M148.112 150.986C159.606 155.763 172.529 155.785 184.038 151.047C195.548 146.309 204.702 137.199 209.485 125.721L254.375 18.0134C242.882 13.2362 229.959 13.2142 218.449 17.9523C206.939 22.6904 197.786 31.8003 193.002 43.2782L148.112 150.986Z"}" fill="${"url(#paint0_linear)"}" class="${"svelte-5moaer"}"></path><path d="${"M73.8789 150.988C85.3724 155.766 98.2954 155.788 109.805 151.05C121.315 146.311 130.468 137.201 135.252 125.724L180.142 18.0162C168.649 13.239 155.726 13.217 144.216 17.9551C132.706 22.6931 123.553 31.8031 118.769 43.281L73.8789 150.988Z"}" fill="${"url(#paint1_linear)"}" class="${"svelte-5moaer"}"></path><g id="${"darker"}" class="${"svelte-5moaer"}"><path d="${"M9.18199 130.636C11.6709 124.669 13.7057 118.541 15.6676 112.396C16.6319 109.272 18.2278 106.38 20.3567 103.897C22.4855 101.415 25.1019 99.3947 28.044 97.9628C30.9861 96.5308 34.1912 95.7171 37.4609 95.572C40.7306 95.427 43.9953 95.9537 47.0529 97.1196C50.1106 98.2855 52.896 100.066 55.2369 102.35C57.5778 104.634 59.4242 107.374 60.6619 110.4C61.8996 113.426 62.5023 116.673 62.4326 119.941C62.3628 123.208 61.6222 126.427 60.2566 129.397C59.3419 131.465 58.1411 133.395 56.6895 135.129C50.4653 143.614 41.5646 149.762 31.4186 152.584C21.2726 155.407 10.471 154.74 0.750626 150.69L9.18199 130.636Z"}" fill="${"url(#paint2_linear)"}" class="${"svelte-5moaer"}"></path><path d="${"M97.0919 38.466C94.6031 44.4327 92.5682 50.5615 90.6063 56.7064C89.642 59.8298 88.0461 62.7223 85.9173 65.2049C83.7884 67.6875 81.172 69.7073 78.2299 71.1393C75.2878 72.5713 72.0827 73.385 68.813 73.53C65.5433 73.675 62.2786 73.1483 59.221 71.9825C56.1634 70.8166 53.3779 69.0364 51.037 66.752C48.6962 64.4677 46.8497 61.7279 45.612 58.7021C44.3743 55.6764 43.7716 52.4291 43.8414 49.1614C43.9111 45.8937 44.6517 42.675 46.0173 39.7046C46.9321 37.6368 48.1328 35.7073 49.5845 33.9726C55.8086 25.4878 64.7093 19.3399 74.8553 16.5176C85.0013 13.6953 95.8029 14.3625 105.523 18.412L97.0919 38.466Z"}" fill="${"url(#paint3_linear)"}" class="${"svelte-5moaer"}"></path></g></g><g id="${"name"}" class="${"svelte-5moaer"}"></g><defs><linearGradient id="${"paint0_linear"}" x1="${"169.78"}" y1="${"159.992"}" x2="${"232.561"}" y2="${"8.94658"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#66B3B3"}"></stop><stop offset="${"1"}" stop-color="${"#95CACA"}"></stop></linearGradient><linearGradient id="${"paint1_linear"}" x1="${"95.547"}" y1="${"159.995"}" x2="${"158.328"}" y2="${"8.94937"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#66B3B3"}"></stop><stop offset="${"1"}" stop-color="${"#95CACA"}"></stop></linearGradient><linearGradient id="${"paint2_linear"}" x1="${"52.6972"}" y1="${"105.259"}" x2="${"14.1123"}" y2="${"154.478"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#0CA4A5"}"></stop><stop offset="${"1"}" stop-color="${"#097677"}"></stop></linearGradient><linearGradient id="${"paint3_linear"}" x1="${"53.5767"}" y1="${"63.8427"}" x2="${"92.1617"}" y2="${"14.6241"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#0CA4A5"}"></stop><stop offset="${"1"}" stop-color="${"#097677"}"></stop></linearGradient></defs></svg>`;
});
const Twitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const socials_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".socials.svelte-1xbtv6l.svelte-1xbtv6l{display:flex;align-items:center;gap:20px}.socials.svelte-1xbtv6l a.svelte-1xbtv6l{width:24px;color:var(--text-color);fill:var(--text-color)}.socials.svelte-1xbtv6l a.svelte-1xbtv6l:hover{color:var(--link-highlight-color);fill:var(--link-highlight-color)}",
  map: null
};
const Socials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"socials svelte-1xbtv6l"}"><a href="${"https://twitter.com/Harshitwalia97"}" target="${"_blank"}" rel="${"noopener"}" title="${"Say Hi on Twitter"}" class="${"svelte-1xbtv6l"}">${validate_component(Twitter, "TwitterIcon").$$render($$result, {}, {}, {})}</a>
	<a href="${"https://github.com/harshitwalia"}" target="${"_blank"}" rel="${"noopener"}" title="${"See my GitHub profile"}" class="${"svelte-1xbtv6l"}">${validate_component(Github, "GitHubIcon").$$render($$result, {}, {}, {})}</a>
	<a href="${"https://www.linkedin.com/in/harshit-walia/"}" target="${"_blank"}" rel="${"noopener"}" title="${"Connect on LinkedIn"}" class="${"svelte-1xbtv6l"}">${validate_component(Linkedin, "LinkedInIcon").$$render($$result, {}, {}, {})}</a>
	<a href="${"mailto:emailharshitwalia@gmail.com"}" target="${"_blank"}" rel="${"noopener"}" title="${"Send an email to emailharshitwalia@gmail.com"}" class="${"svelte-1xbtv6l"}">${validate_component(Email, "EmailIcon").$$render($$result, {}, {}, {})}</a>
</div>`;
});
const header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-vmlxu5.svelte-vmlxu5{position:relative;padding:30px 0}header.svelte-vmlxu5 .container.svelte-vmlxu5{display:flex;align-items:center;justify-content:space-between}@media(max-width: 576px){header.svelte-vmlxu5 .container.svelte-vmlxu5{justify-content:center}}header.svelte-vmlxu5 .left.svelte-vmlxu5{display:flex;align-items:center;gap:30px}@media(max-width: 576px){header.svelte-vmlxu5 .left.svelte-vmlxu5{flex-direction:column;justify-content:center;gap:15px}}header.svelte-vmlxu5 .left a.svelte-vmlxu5{color:var(--text-color)}header.svelte-vmlxu5 .left .links.svelte-vmlxu5{display:flex;align-items:center;gap:30px}header.svelte-vmlxu5 .logo.svelte-vmlxu5{height:44px}@media(max-width: 576px){header.svelte-vmlxu5 .right.svelte-vmlxu5{display:none}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { animated = true } = $$props;
  if ($$props.animated === void 0 && $$bindings.animated && animated !== void 0)
    $$bindings.animated(animated);
  $$result.css.add(css$1);
  return `<header class="${"svelte-vmlxu5"}"><nav class="${"container svelte-vmlxu5"}"><div class="${"left svelte-vmlxu5"}"><a class="${"logo svelte-vmlxu5"}" href="${"/"}" alt="${"Site logo"}">${validate_component(Logo, "Logo").$$render($$result, { animated }, {}, {})}</a>
			<div class="${"links svelte-vmlxu5"}"><a href="${"/blog"}" class="${"svelte-vmlxu5"}">Blog</a>
				<a href="${"/quote"}" class="${"svelte-vmlxu5"}">Thoughts</a>
				<a href="${"/resume"}" class="${"svelte-vmlxu5"}">Resume</a></div></div>
		<div class="${"right svelte-vmlxu5"}">${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div></nav>
</header>`;
});
const Footer_wave = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"120"}" viewBox="${"0 0 1440 120"}" fill="${"none"}" style="${"transform: scale(-1,-1)"}" xmlns="${"http://www.w3.org/2000/svg"}" preserveAspectRatio="${"xMidYMid slice"}" class="${"footer__wave"}"><path d="${"M0 0L48 8.875C96 17.9167 192 35.4167 288 53.3333C384 71.25 480 88.75 576 82.2083C672 75.4167 768 44.5833 864 26.6667C960 8.75 1056 4.58333 1152 11.125C1248 17.9167 1344 35.4167 1392 44.4583L1440 53.3333V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"}" fill="${"var(--body-background-color)"}"></path></svg>`;
});
const footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-1yo7hq0.svelte-1yo7hq0{height:340px;width:100%;background:var(--footer-background);display:grid;grid-template-rows:120px 1fr}footer.svelte-1yo7hq0 .content.svelte-1yo7hq0{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:15px;font-weight:600;text-align:center}footer.svelte-1yo7hq0 .content .credits.svelte-1yo7hq0{font-weight:400;font-size:90%;color:var(--text-light-color)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentYear = new Date().getFullYear();
  $$result.css.add(css);
  return `<footer class="${"svelte-1yo7hq0"}"><div class="${"wave"}">${validate_component(Footer_wave, "FooterWave").$$render($$result, {}, {}, {})}</div>
	<div class="${"content svelte-1yo7hq0"}"><div class="${"copyright"}">© ${escape(currentYear)} Harshit Walia. Made in India.
		</div>
		<div class="${"credits svelte-1yo7hq0"}">Powered by <a href="${"https://kit.svelte.dev/"}" target="${"_blank"}" rel="${"noopener"}">SvelteKit</a>.
			Icons by <a href="${"https://iconoir.com/"}" target="${"_blank"}" rel="${"noopener"}">Iconoir</a>.
		</div>
		<div class="${"socials"}">${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div></div>
</footer>`;
});
export {
  Footer as F,
  Header as H
};
