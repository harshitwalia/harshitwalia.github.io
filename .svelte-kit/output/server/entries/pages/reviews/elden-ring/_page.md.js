import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/index.js";
import { A as Article } from "../../../../chunks/article.js";
import { S as Sparkling_highlight } from "../../../../chunks/sparkling-highlight.js";
/* empty css                                                        */import { I as Image } from "../../../../chunks/image.js";
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M12 7L12 13"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M12 17.01L12.01 16.9989"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const Check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M7 12.5L10 15.5L17 8.5"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M12 11.5V16.5"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M12 7.51L12.01 7.49889"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const css$1 = {
  code: ".callout-block.svelte-1pi2pyj.svelte-1pi2pyj{--bg-color:var(--callout-background-color);--accent-color:transparent;margin:40px 0 30px;padding:25px 25px;border-top-right-radius:10px;border-bottom-right-radius:10px;background:var(--bg-color);color:var(--text-color);border-left:4px solid var(--accent-color);position:relative}.callout-block.svelte-1pi2pyj .icon-wrapper.svelte-1pi2pyj{position:absolute;width:50px;height:50px;top:0;left:0;transform:translate(calc(-50% - 1.5px), -50%);background:var(--post-page-background-color);padding:8px;border-radius:50%;fill:var(--accent-color);color:var(--accent-color)}.callout-block.info.svelte-1pi2pyj.svelte-1pi2pyj{--bg-color:var(--callout-info-background-color);--accent-color:var(--callout-info-accent-color)}.callout-block.warning.svelte-1pi2pyj.svelte-1pi2pyj{--bg-color:var(--callout-warning-background-color);--accent-color:var(--callout-warning-accent-color)}.callout-block.error.svelte-1pi2pyj.svelte-1pi2pyj{--bg-color:var(--callout-error-background-color);--accent-color:var(--callout-error-accent-color)}.callout-block.success.svelte-1pi2pyj.svelte-1pi2pyj{--bg-color:var(--callout-success-background-color);--accent-color:var(--callout-success-accent-color)}",
  map: null
};
const Callout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = null } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css$1);
  return `<div class="${"callout-block " + escape(type ?? "", true) + " svelte-1pi2pyj"}">${type ? `<div class="${"icon-wrapper svelte-1pi2pyj"}">${type == "info" ? `${validate_component(Info, "Info").$$render($$result, {}, {}, {})}` : `${type == "warning" || type == "error" ? `${validate_component(Alert, "Alert").$$render($$result, {}, {}, {})}` : `${type == "success" ? `${validate_component(Check, "Check").$$render($$result, {}, {}, {})}` : ``}`}`}</div>` : ``}
	${slots.default ? slots.default({}) : ``}
</div>`;
});
const markerHighlight_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-1sgfl7c{background:var(--highlight-marker-url)}",
  map: null
};
const Marker_highlight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<span class="${"wrapper svelte-1sgfl7c"}">${slots.default ? slots.default({}) : ``}</span>`;
});
const metadata = {
  "layout": "article",
  "title": "Elden Ring Review",
  "excerpt": "My thoughts on what probably is the biggest game release of 2022.",
  "image": {
    "path": "reviews/elden-ring",
    "filename": "cover"
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Article, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `${validate_component(Callout, "Callout").$$render($$result, {}, {}, {
        default: () => {
          return `TL;DR: It&#39;s incredible and worth all the praise it&#39;s got. Not perfect, but really close to it.
`;
        }
      })}
<p>Elden Ring was probably the most hyped up game of the past couple of years, and its release in February (2022) was met with a lot of media coverage and players raving about how incredible it was.</p>
<p>I wasn’t hyped at all about the game, mainly because I had never played a From Software (the game’s developer) game before. Dark Souls was a big hit when it came out, but I was never into difficult games, and I didn’t have a console to play it on (I was one of the 6 people that owned a Wii U, but not a PlayStation or Xbox). However, with all that talk surrounding Elden Ring I couldn’t just ignore its existence. The game was really expensive though, and I didn’t feel like spending R$300 to play something I thought I wouldn’t enjoy. So, I downloaded Bloodborne (free on PS Plus), another From Software game with good reviews, which I figured would give me a taste if I liked this kind of game or not.</p>
<p>I did <a href="${"https://twitter.com/matt_fantinel/status/1524768955461689349?s=21&t=fQJwMvgZo0Xe1nf9jLDtjg"}" rel="${"nofollow noopener noreferrer"}" target="${"_blank"}">a mini-review of Bloodborne on Twitter</a>, and, if you’ve read it, you know I was completely amazed by that game, and it became one of my all-time favorites. After finishing that one and immediatelly tweeting about wanting a sequel, I had no choice but to play Elden Ring next.</p>
<h2 id="${"the-game"}">The Game<a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-game"}"><span class="${"heading-link"}">#</span></a></h2>
<p>A few minutes into the game and you’re presented with its selling point: you open a door and you’re now free to explore an entire world, full of mysteries and dangers. Right in front of you is a boss that ${validate_component(Sparkling_highlight, "SparklingHighlight").$$render($$result, {}, {}, {
        default: () => {
          return `will totally destroy you`;
        }
      })} if you try to beat it, and it’s an important lesson of what to expect in the game: you need to be prepared. You circle around that boss and make a note on the map to come back to it later. Then you proceed into a forest and find some soldiers that you can defeat. You’re not sure why you’re fighting them or why they wanna kill you, but it’s fun, so you do it. Then you find an entire camp full of them, including one with a more menacing armor, a big shield and a spear. You try to face it and it kills you <i>once. Twice. Three times</i>. You get really close to beating it, your hands start sweating with anticipation, and you finally do it! Metaphorical tears of joy roll down your face and you feel really good about what you just accomplished. Then you realize that was just a regular enemy, that will respawn every time you rest. <b>There’s so much more to uncover.</b></p>
<p>That’s the main hook of all games in the “Soulsborne” series, and it works really well. It uses frustration to build up an extremely satisfying reward when you win. Elden Ring did not change that, instead it mixed that feeling with an open world that gives you more ways to cool down between tough fights, or multiple ways to get stronger to prepare. It took me over 30 hours to have my character strong enough to tackle that boss right after the first door of the game. That was like 1/3 of my play time, and it was probably the best part of it. Every discovery was something brand new, and many encounters provided a fair challenge.</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          path: "reviews/elden-ring",
          filename: "tree-sentinel",
          alt: "Screenshot of the game, showing the first boss you see right after opening the door into the game's big open world.",
          figcaption: "The Tree Sentinel is likely the first boss you'll encounter, but not the first one you'll defeat."
        },
        {},
        {}
      )}
<p>However, I feel that the feeling of challenge was really uneven throughout the game. When both my character and I were not well prepared or strong enough, it felt more rewarding when I got a win. Later in the game, I was so overleveled for some bosses that I didn’t get that feeling of adrenaline during a big fight, nor the big endorphine release when I defeated them. And that did not come from me grinding XP somewhere. I was just enjoying the game, exploring every nook and cranny I could find, and getting stronger as I did that.</p>
<p>To be fair, I do think making a game like this completely balanced is nigh impossible. Not only there are dozens of different builds you can make for your character, but also every player will have a different journey, ending up with more or less Runes (the currency you use to buy levels and improve your character) than others. So, on a technical level, I truly understand the complexity of balancing this and still think they did a good job overall. It just was a bit underwhelming on my specific case.</p>
<h2 id="${"the-story"}">The Story<a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-story"}"><span class="${"heading-link"}">#</span></a></h2>
<p>Elden Ring, just like other From Software games, has almost no story. It has a huge and rich lore, though. For most of the game, you simply have no idea what’s going on. It’s by hearing some cryptic dialogue, reading item descriptions, and observing the world around you that you can start to put together the puzzle surrounding the game. Or, you can watch some really good YouTube videos explaining the lore behind the game, which make you finally understand why things are the way they are.</p>
<p>I like this.</p>
<p>It has a bit of a more realistic approach to storytelling - your character is part of that world, and as such you’d probably be acquainted to some of the more common stories and myths in there, and definitely not be aware at all of the secrets and twists of the royal family of demigods. Having to go out of your way to figure things out makes you more attached to the game in a way, and makes you care more. Old games used to do this for technical reasons, but there’s definitely an appeal here. I do understand it’s not very accessible though.</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          path: "reviews/elden-ring",
          filename: "malenia-and-radahn",
          alt: "Screenshot of a game cutscene, showing two demigods fighting each other.",
          figcaption: "The demigods have an interesting backstory and while you interact little with them, knowing that backstory makes their appearances much more meaningful."
        },
        {},
        {}
      )}
<p>The lore itself is great. It’s a more common fantasy setting, with dragons, wizards, gods, but it feels unique by adding a lot of nuance to it, and making it centered on a family of very unique characters that you either befriend or fight during the game. These characters are well-written and have a lot of depth, and looking into how they got to be what they are now is a really cool way to spend time when you’re not playing the game.</p>
<p>Had I not played this immediately after playing Bloodborne, I think I’d have enjoyed it more. Bloodborne was just so unique and atmospherically perfect, this one didn’t really get to the same level. But it’s still one of the best game worlds I’ve ever adventured in.</p>
<h2 id="${"the-world"}">The World<a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-world"}"><span class="${"heading-link"}">#</span></a></h2>
<p>The Lands Between (the name of the in-game world) is a beautiful place, and all of its areas tell a bit of the story surrounding everything. You have vast green areas, a huge lake surrounded by mist, a mountain around a volcano, icy peaks, a golden city, and an area that’s almost literal hell and that will kill you so many times you’ll kinda start to like it. Almost everything is fully explorable from the start of the game, though you might face some “natural barriers” in the form of enemies you’re still not ready to face.</p>
${validate_component(Image, "Image").$$render(
        $$result,
        {
          path: "reviews/elden-ring",
          filename: "liurnia",
          alt: "Screenshot of the game, showing a beautiful landscape with hills, a lake, and golden trees surrounded by fog."
        },
        {},
        {}
      )}
${validate_component(Marker_highlight, "MarkerHighlight").$$render($$result, {}, {}, {
        default: () => {
          return `The world is fully realized, and there are rewards in every corner.`;
        }
      })} However, it&#39;s not the best part of the game.
<p>In some parts of the world are places called Legacy Dungeons - they’re areas that work just like the older games (like Dark Souls or Bloodborne) did: smaller, more linear areas, with great level design and that offer a more curated, if limited, experience. Those are still the best parts of the game, not its open world. I really hope they continue to be a thing in future games.</p>
<h2 id="${"the-bad"}">The Bad<a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-bad"}"><span class="${"heading-link"}">#</span></a></h2>
<p>The sidequests, really. They’re kinda bullshit. Not their content per se, but they rely so much on “randomly coming across a character on a very random part of a gigantic open world” that it’s nearly impossible to complete one of them without following an online guide. Quest markers would make this better and still keep the same level of immersion.</p>
<h2 id="${"verdict"}">Verdict<a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#verdict"}"><span class="${"heading-link"}">#</span></a></h2>
<p>I think the best thing I can say about this game is that after I’ve beat it (which took me 92 hours), I immediately started the game over again, to play with a different character. Even after so many hours, I was still wanting more. Though not my favorite game ever, it was still one of the best.</p>
<p>I hereby give this game a sparkling ${validate_component(Sparkling_highlight, "SparklingHighlight").$$render($$result, {}, {}, {
        default: () => {
          return `10/10`;
        }
      })} score!</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
