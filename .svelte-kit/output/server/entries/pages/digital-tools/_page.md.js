import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { A as Article } from "../../../chunks/article.js";
const metadata = {
  "layout": "article",
  "title": "Gear and Digital Tools",
  "image": {
    "path": "projects",
    "filename": "personal-website"
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Article, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h1 id="${"this-page-is-still-a-work-in-progress-i-oughta-finish-it-sometime-"}">This page is still a work in progress. I oughta finish it sometime =)<a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#this-page-is-still-a-work-in-progress-i-oughta-finish-it-sometime-"}"><span class="${"heading-link"}">#</span></a></h1>
<p>Here are the digital tools I use to get work or fun done. I try to keep this list updated, but nothing here is set in stone, as I’m prone to trying out new things if I feel they might make my life easier.</p>
<h2 id="${"hardware"}">Hardware<a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#hardware"}"><span class="${"heading-link"}">#</span></a></h2>
<ul><li><p>A <strong>Dell XPS 15 9570</strong>, with 16GB of RAM, an i7-8750H and NVidia 1050TI</p>
<ul><li>A very competent laptop, even if I don’t really use its GPU much. Quiet at most times, performance has never been a problem, and its screen, keyboard and trackpad are amazing for when I use it as a laptop. Most of the time though, I use it in clamshell mode connected to two external monitors. Battery life can go up to 6-7h of VS Code + Web browser, which is more than enough for me.</li></ul></li>
<li><p>Currently runs <a href="${"https://pop.system76.com/"}" target="${"_blank"}" rel="${"noopener"}"><strong>Pop!_OS 21.10</strong></a>. Previously I’ve used <a href="${"https://elementary.io/"}" target="${"_blank"}" rel="${"noopener"}">elementaryOS</a></p>
<ul><li>I just prefer using Linux systems and these are my favorites. All of them have their pros and cons and honestly I’d be happy sticking to any one of them, but I like to hop every once in a while.</li></ul></li>
<li><p>Two <strong>Dell P2419H</strong> monitors</p>
<ul><li>They’re fantastic for the price. 1080p, but with great colors, viewing angles, and brightness levels. I use them side-by-side on a symmetrical setup, so the small borders make it look great. If I had the money I’d have bought the 4K equivalents, but to be honest they serve me really well.</li></ul></li>
<li><p><strong>Logitech MX Vertical</strong> mouse</p>
<ul><li>Vertical mice changed my life. I used to have constant wrist pains after working all day in the computer, and would often have to change hands to avoid a more serious injury. With this vertical mouse, after a single day of adaptation, I already felt the difference. Plus, it has two configurable buttons to use with the thumb that greatly improved my workflow by being able to run keyboard shortcuts on a single button press.</li></ul></li>
<li><p><strong>Logitech MX Keys</strong> keyboard</p>
<ul><li>I never got into the mechanical keyboard bandwagon. I kinda got interested in them a while ago, but they’re too noisy and I share a (home) office with my wife. So when researching a good keyboard that wasn’t noisy, I found this one. It feels like a (good) laptop keyboard, in the best possible way. It’s silent, clicky, and comfortable.</li></ul></li>
<li><p><strong>Sennheiser HD 450BT</strong> headphones</p>
<ul><li>Clear sound, high quality, good battery life, works with or without a cable. Not the greatest bass, which is actually good for the music I usually listen to.</li></ul></li>
<li><p><strong>Logitech C270</strong> Webcam</p>
<ul><li>Since I use my laptop in clamshell mode, I got a webcam for the video calls for work. It’s just a webcam, it does the job and it was cheap. Nothing to complain about.</li></ul></li>
<li><p><strong>iPhone 12</strong> and <strong>Apple Watch SE</strong></p>
<ul><li>They’re great and do the job for everything I need. I’m not bothered by the lack of integration between iOS and Linux; I achieve what I need via 3rd-party apps and I don’t miss the rest. I do have a spare Samsung Galaxy S10e though for testing mobile apps if I have to.</li></ul></li></ul>
<h2 id="${"software"}">Software<a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#software"}"><span class="${"heading-link"}">#</span></a></h2>
<ul><li>Development<ul><li>Visual Studio Code is my code editor of choice. It can be simple or complex depending on the needs, and I’ve spent my time customizing it to fit my workflow and A E S T H E T I C needs.</li>
<li>ZSH is the shell I currently use, because it looks cool. But I don’t really use it enough to find it better than bash.</li>
<li>Svelte is my preferred web framework for personal projects (like this website).</li>
<li>React is the web framework I use at work, usually. I don’t like it.</li></ul></li></ul>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
