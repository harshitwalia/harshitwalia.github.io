import { c as create_ssr_component, v as validate_component, e as escape, d as each } from "../../../../chunks/index.js";
import { t as title } from "../../../../chunks/meta.js";
import { E as Email, L as Linkedin, G as Github } from "../../../../chunks/email.js";
import { E as Experience$1, y as yearsOfExperience, L as Low_accent_highlight, e as entries, B as Blob1, a as Blob3 } from "../../../../chunks/experience.js";
const Pin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"}" stroke="${"currentColor"}" stroke-width="${"1.5"}"></path><path d="${"M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z"}" fill="${"currentColor"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const Chat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M17 12.5C17.2761 12.5 17.5 12.2761 17.5 12C17.5 11.7239 17.2761 11.5 17 11.5C16.7239 11.5 16.5 11.7239 16.5 12C16.5 12.2761 16.7239 12.5 17 12.5Z"}" fill="${"currentColor"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z"}" fill="${"currentColor"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M7 12.5C7.27614 12.5 7.5 12.2761 7.5 12C7.5 11.7239 7.27614 11.5 7 11.5C6.72386 11.5 6.5 11.7239 6.5 12C6.5 12.2761 6.72386 12.5 7 12.5Z"}" fill="${"currentColor"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const Internet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M3.33789 17C5.06694 19.989 8.29866 22 12.0001 22C15.7015 22 18.9332 19.989 20.6622 17"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M3.33789 7C5.06694 4.01099 8.29866 2 12.0001 2C15.7015 2 18.9332 4.01099 20.6622 7"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M13 21.9506C13 21.9506 14.4079 20.0966 15.2947 16.9999"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M13 2.04932C13 2.04932 14.4079 3.90328 15.2947 7"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M11 21.9506C11 21.9506 9.59215 20.0966 8.70532 16.9999"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M11 2.04932C11 2.04932 9.59215 3.90328 8.70532 7"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M9 10L10.5 15L12 10L13.5 15L15 10"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M1 10L2.5 15L4 10L5.5 15L7 10"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M17 10L18.5 15L20 10L21.5 15L23 10"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const contact_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: '.resume-contact.svelte-qd7474.svelte-qd7474{list-style:none;padding:0;margin-left:auto;margin-right:auto;display:grid;grid-gap:10px;grid-template-columns:1fr 1fr;grid-template-areas:"email email" "website website" "location languages" "birthday experience" "github linkedin"}.resume-contact.svelte-qd7474 li.svelte-qd7474{display:flex;align-items:center;margin:0}.resume-contact.svelte-qd7474 li .icon.svelte-qd7474{margin-right:10px;color:var(--primary-color)}.resume-contact.svelte-qd7474 li .icon.svelte-qd7474 svg{width:24px;height:24px}.resume-contact.svelte-qd7474 li a.svelte-qd7474{text-decoration:none;color:var(--text-color);border-bottom:1px dotted var(--primary-color);padding-bottom:2px}.resume-contact.svelte-qd7474 li a.svelte-qd7474:hover{color:var(--primary-color);border-bottom-style:solid}.resume-contact.svelte-qd7474 li.birthday.svelte-qd7474{grid-area:birthday}.resume-contact.svelte-qd7474 li.location.svelte-qd7474{grid-area:location}.resume-contact.svelte-qd7474 li.experience.svelte-qd7474{grid-area:experience}.resume-contact.svelte-qd7474 li.email.svelte-qd7474{grid-area:email;margin:0 auto}.resume-contact.svelte-qd7474 li.linkedin.svelte-qd7474{grid-area:linkedin}.resume-contact.svelte-qd7474 li.website.svelte-qd7474{grid-area:website;display:none}.resume-contact.svelte-qd7474 li.github.svelte-qd7474{grid-area:github}.resume-contact.svelte-qd7474 li.languages.svelte-qd7474{grid-area:languages}@media(min-width: 768px), print{.resume-contact.svelte-qd7474.svelte-qd7474{margin-left:0;margin-right:0;grid-gap:5px;grid-template-columns:1fr 1fr;grid-template-areas:"location github" "birthday linkedin" "experience email" "languages website"}.resume-contact.svelte-qd7474 li.email.svelte-qd7474{margin:0}.resume-contact.svelte-qd7474 li.website.svelte-qd7474{display:flex}}@media print{.resume-contact.svelte-qd7474.svelte-qd7474{grid-template-areas:"location languages" "birthday email" "experience website"}.resume-contact.svelte-qd7474 .linkedin.svelte-qd7474,.resume-contact.svelte-qd7474 .github.svelte-qd7474{display:none}.resume-contact.svelte-qd7474 a.svelte-qd7474{border:none !important}}',
  map: null
};
function calcYearsSince(date) {
  const birthday = new Date(date);
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<ul class="${"resume-contact svelte-qd7474"}"><li class="${"birthday svelte-qd7474"}"><span class="${"icon svelte-qd7474"}">${validate_component(Star, "StarIcon").$$render($$result, {}, {}, {})}</span>
		<span>${escape(calcYearsSince("1997-01-21"))} years old</span></li>
	<li class="${"experience svelte-qd7474"}"><span class="${"icon svelte-qd7474"}">${validate_component(Experience$1, "ExperienceIcon").$$render($$result, {}, {}, {})}</span>
		<span>${escape(yearsOfExperience)} years of experience
		</span></li>
	<li class="${"location svelte-qd7474"}"><span class="${"icon svelte-qd7474"}">${validate_component(Pin, "PinIcon").$$render($$result, {}, {}, {})}</span>
		<span>Delhi, India</span></li>
	<li class="${"email svelte-qd7474"}"><span class="${"icon svelte-qd7474"}">${validate_component(Email, "EmailIcon").$$render($$result, {}, {}, {})}</span>
		<a href="${"mailto:harshitwalia1997@gmail.com"}" class="${"svelte-qd7474"}">harshitwalia1997@gmail.com</a></li>
	<li class="${"linkedin svelte-qd7474"}"><span class="${"icon svelte-qd7474"}">${validate_component(Linkedin, "LinkedInIcon").$$render($$result, {}, {}, {})}</span>
		<a href="${"https://www.linkedin.com/in/harshit-walia/"}" target="${"_blank"}" class="${"svelte-qd7474"}">LinkedIn Profile </a></li>
	<li class="${"website svelte-qd7474"}"><span class="${"icon svelte-qd7474"}">${validate_component(Internet, "InternetIcon").$$render($$result, {}, {}, {})}</span>
		<a href="${"https://harshitwalia.github.io/"}" target="${"_blank"}" class="${"svelte-qd7474"}">harshitwalia.github.io </a></li>
	<li class="${"github svelte-qd7474"}"><span class="${"icon svelte-qd7474"}">${validate_component(Github, "GitHubIcon").$$render($$result, {}, {}, {})}</span>
		<a href="${"https://github.com/harshitwalia"}" target="${"_blank"}" class="${"svelte-qd7474"}">GitHub Profile </a></li>
	<li class="${"languages svelte-qd7474"}"><span class="${"icon svelte-qd7474"}">${validate_component(Chat, "ChatIcon").$$render($$result, {}, {}, {})}</span>
		<span>English, Hindi, French</span></li>
</ul>`;
});
const sectionTitle_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".section-title.svelte-k89f3w{font-size:24px;margin:0;margin-bottom:16px;border-bottom:2px solid var(--primary-color);font-family:var(--title-font);font-weight:600}",
  map: null
};
const Section_title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<p class="${"section-title svelte-k89f3w"}">${slots.default ? slots.default({}) : ``}</p>`;
});
const photo_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".resume-photo.svelte-1dioell img.svelte-1dioell{border-radius:50%;max-width:100%;max-height:200px;box-sizing:border-box}@media(prefers-color-scheme: dark){.resume-photo.svelte-1dioell img.svelte-1dioell{border:3px solid var(--primary-light-color)}}",
  map: null
};
const Photo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<picture class="${"resume-photo svelte-1dioell"}"><source srcset="${"/images/resume-avatar-dark.png"}" media="${"(prefers-color-scheme: dark)"}">
	<img src="${"/images/resume-avatar.png"}" alt="${"Harshit Walia's Avatar"}" class="${"svelte-1dioell"}">
</picture>`;
});
const title_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "h1.svelte-1uxg24e{font-size:56px;margin:0;font-weight:700;color:var(--text-color);text-align:center;font-family:var(--title-font)}h5.svelte-1uxg24e{color:var(--text-light-color);margin:0;font-size:24px;font-weight:300;text-align:center;font-family:var(--title-font)}@media(min-width: 768px), print{h1.svelte-1uxg24e,h5.svelte-1uxg24e{text-align:left}}",
  map: null
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="${"resume-title"}"><h1 class="${"svelte-1uxg24e"}">Harshit Walia</h1>
	<h5 class="${"svelte-1uxg24e"}">Software Developer</h5></div>`;
});
const skills_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".resume-skills.svelte-1t6ia8h{list-style:none;padding:0;margin:0}.tags-container.svelte-1t6ia8h{display:grid;grid-template-columns:1fr 1fr 1fr;margin:2px 0 5px}.tag.svelte-1t6ia8h{background-color:var(--primary-lightest-color);border:1px solid var(--primary-color);color:var(--primary-color);border-radius:0.25em;display:inline-block;font-size:0.75em;line-height:2em;margin:0.125em;padding:0 0.5em;text-decoration:none;white-space:nowrap}",
  map: null
};
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<ul class="${"resume-skills svelte-1t6ia8h"}"><li>Front-end
		<div class="${"tags-container svelte-1t6ia8h"}"><span class="${"tag svelte-1t6ia8h"}">React</span>
			<span class="${"tag svelte-1t6ia8h"}">Svelte</span>
			<span class="${"tag svelte-1t6ia8h"}">Angular</span>
			<span class="${"tag svelte-1t6ia8h"}">Vue</span>
			<span class="${"tag svelte-1t6ia8h"}">NextJS</span>
			<span class="${"tag svelte-1t6ia8h"}">TypeScript</span>
			<span class="${"tag svelte-1t6ia8h"}">Ionic</span>
			<span class="${"tag svelte-1t6ia8h"}">Electron</span>
			<span class="${"tag svelte-1t6ia8h"}">PWAs</span></div></li>
	<li>Back-end
		<div class="${"tags-container svelte-1t6ia8h"}"><span class="${"tag svelte-1t6ia8h"}">Node</span>
			<span class="${"tag svelte-1t6ia8h"}">Python</span>
			<span class="${"tag svelte-1t6ia8h"}">Java</span>
			<span class="${"tag svelte-1t6ia8h"}">C++</span></div></li>
	<li>Other
		<div class="${"tags-container svelte-1t6ia8h"}"><span class="${"tag svelte-1t6ia8h"}">Agile</span>
			<span class="${"tag svelte-1t6ia8h"}">.NET</span>
			<span class="${"tag svelte-1t6ia8h"}">Linux</span>
			<span class="${"tag svelte-1t6ia8h"}">MongoDB</span>
			<span class="${"tag svelte-1t6ia8h"}">SQL</span></div></li>
</ul>`;
});
const Circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const experience_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".resume-experience.svelte-axcje9 .experience.svelte-axcje9{display:flex;gap:10px}.resume-experience.svelte-axcje9 .experience .timeline.svelte-axcje9{width:60px;margin-bottom:-16px;display:flex;flex-direction:column;align-items:center}.resume-experience.svelte-axcje9 .experience .timeline .line.svelte-axcje9{border-left:2px dashed var(--primary-color);width:2px;flex:1}.resume-experience.svelte-axcje9 .experience .timeline .time.svelte-axcje9{color:var(--text-light-color);width:24px;padding:2px;display:flex;flex-direction:column;align-items:center;gap:2px;font-size:12px;word-wrap:none;white-space:nowrap}.resume-experience.svelte-axcje9 .experience .timeline .time.svelte-axcje9 svg{width:20px;height:20px;color:var(--primary-color)}.resume-experience.svelte-axcje9 .experience.current .time.svelte-axcje9 svg{padding:2px;background:var(--card-background-color);border:1px solid var(--primary-color);border-radius:50%;fill:var(--primary-color)}.resume-experience.svelte-axcje9 .experience.svelte-axcje9:not(:last-child){padding-bottom:16px}.resume-experience.svelte-axcje9 .experience:last-child .timeline .line.svelte-axcje9{display:none}.resume-experience.svelte-axcje9 .experience .content.svelte-axcje9{flex:1}.resume-experience.svelte-axcje9 .experience .title div.svelte-axcje9{font-size:18px;display:block}.resume-experience.svelte-axcje9 .experience .title .company-name.svelte-axcje9{color:var(--text-color);font-size:22px;font-family:var(--title-font);font-weight:600}.resume-experience.svelte-axcje9 .experience .title .icon.svelte-axcje9 svg{width:14px;height:14px}.resume-experience.svelte-axcje9 .experience .title small.svelte-axcje9{font-size:14px;font-weight:300;color:var(--text-light-color);fill:var(--text-light-color)}.resume-experience.svelte-axcje9 .experience p.svelte-axcje9{margin-top:10px;text-align:justify}",
  map: null
};
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"resume-experience svelte-axcje9"}">${each(entries, (entry) => {
    return `<div class="${["experience svelte-axcje9", entry.current ? "current" : ""].join(" ").trim()}"><div class="${"timeline svelte-axcje9"}"><div class="${"time svelte-axcje9"}">${entry.current ? `Current` : ``}
					${validate_component(Circle, "CircleIcon").$$render($$result, {}, {}, {})}
					${escape(entry.timeframe.split(" ")[0])}</div>
				<div class="${"line svelte-axcje9"}"></div></div>
			<div class="${"content svelte-axcje9"}"><div class="${"title svelte-axcje9"}"><div class="${"svelte-axcje9"}"><span class="${"company-name logitix svelte-axcje9"}">${validate_component(Low_accent_highlight, "LowAccentHighlight").$$render($$result, { id: entry.id }, {}, {
      default: () => {
        return `${escape(entry.title)}`;
      }
    })}
						</span></div>
					<small class="${"svelte-axcje9"}">${escape(entry.jobTitle)} | <span class="${"icon svelte-axcje9"}">${validate_component(Pin, "PinIcon").$$render($$result, {}, {}, {})}</span> ${escape(entry.location)}</small></div>
				<p class="${"svelte-axcje9"}">${escape(entry.description)}</p></div>
		</div>`;
  })}
</div>`;
});
const resume_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.resume.svelte-1k6ewli.svelte-1k6ewli{border-radius:10px;padding:35px 0 10px 0;color:var(--text-color);font-family:var(--default-font);font-size:16px;background-color:var(--card-background-color);position:relative;overflow:hidden;display:grid;gap:20px 30px;grid-template-columns:1fr;grid-template-areas:"photo" "name" "about" "skills" "work" "education"}@media(min-width: 768px), print{.resume.svelte-1k6ewli.svelte-1k6ewli{padding:30px 20px;grid-template-columns:2fr 1fr;grid-template-rows:1fr 1fr 1fr 1fr;grid-template-areas:"name photo" "work about" "work skills" "work education"}}@media(min-width: 900px), print{.resume.svelte-1k6ewli.svelte-1k6ewli{margin:20px auto;max-width:210mm;box-shadow:8px 14px 38px rgba(39, 44, 49, 0.6), 1px 3px 8px rgba(39, 44, 49, 0.3)}}.resume.svelte-1k6ewli section.svelte-1k6ewli{padding:5px;border-radius:10px}.resume.svelte-1k6ewli section.name-and-contact.svelte-1k6ewli{grid-area:name;display:flex;flex-direction:column;justify-content:space-between}.resume.svelte-1k6ewli section.photo.svelte-1k6ewli{grid-area:photo;display:flex;align-items:center;justify-content:center}.resume.svelte-1k6ewli section.about.svelte-1k6ewli{grid-area:about}.resume.svelte-1k6ewli section.about p.svelte-1k6ewli{text-align:justify}.resume.svelte-1k6ewli section.work.svelte-1k6ewli{grid-area:work}.resume.svelte-1k6ewli section.education.svelte-1k6ewli{grid-area:education}.resume.svelte-1k6ewli section.education p.svelte-1k6ewli{text-align:justify}.resume.svelte-1k6ewli section.skills.svelte-1k6ewli{grid-area:skills}.resume.svelte-1k6ewli .blobs.svelte-1k6ewli{position:absolute;top:0;right:0;width:100%;height:100%}.resume.svelte-1k6ewli .blobs .blob.svelte-1k6ewli{position:absolute}.resume.svelte-1k6ewli .blobs .blob.one.svelte-1k6ewli{height:120%;width:120%;top:-54%;right:-45%}.resume.svelte-1k6ewli .blobs .blob.two.svelte-1k6ewli{height:100%;width:100%;left:23%;top:38%}@media print{.resume.svelte-1k6ewli.svelte-1k6ewli{box-shadow:none;margin:0;padding:10px 10px;max-height:287mm;overflow:hidden}.resume.svelte-1k6ewli section.svelte-1k6ewli{margin:0}}@page{padding:0;margin:0cm;size:A4 portrait}',
  map: null
};
const Resume = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<article class="${"resume svelte-1k6ewli"}"><div class="${"blobs svelte-1k6ewli"}"><div class="${"blob one svelte-1k6ewli"}">${validate_component(Blob1, "Blob1").$$render($$result, {}, {}, {})}</div>
        <div class="${"blob two svelte-1k6ewli"}">${validate_component(Blob3, "Blob3").$$render($$result, {}, {}, {})}</div></div>
    <section class="${"name-and-contact svelte-1k6ewli"}">${validate_component(Title, "Title").$$render($$result, {}, {}, {})}
        ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</section>
    <section class="${"photo svelte-1k6ewli"}">${validate_component(Photo, "Photo").$$render($$result, {}, {}, {})}</section>
    <section class="${"about svelte-1k6ewli"}">${validate_component(Section_title, "SectionTitle").$$render($$result, {}, {}, {
    default: () => {
      return `About`;
    }
  })}
        <p class="${"svelte-1k6ewli"}">I believe in making the world better by building simple, powerful, and robust software. My interests include algorithms, communications, and server software with a strong emphasis on elegance and
            performance. I am an avid competitive programmer too.
        </p></section>
    <section class="${"work svelte-1k6ewli"}">${validate_component(Section_title, "SectionTitle").$$render($$result, {}, {}, {
    default: () => {
      return `Professional Experience`;
    }
  })}
        ${validate_component(Experience, "Experience").$$render($$result, {}, {}, {})}</section>
    <section class="${"education svelte-1k6ewli"}">${validate_component(Section_title, "SectionTitle").$$render($$result, {}, {}, {
    default: () => {
      return `Education`;
    }
  })}
        <p class="${"svelte-1k6ewli"}">Graduated as a${escape(" ")}
            <b>Computer Engineer</b> at${escape(" ")}
            <i>Delhi Technological University</i>, 2019.
        </p></section>
    <section class="${"skills svelte-1k6ewli"}">${validate_component(Section_title, "SectionTitle").$$render($$result, {}, {}, {
    default: () => {
      return `Skills`;
    }
  })}
        ${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}</section>
</article>`;
});
const Download = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M6 20L18 20"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M12 4V16M12 16L15.5 12.5M12 16L8.5 12.5"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".resume-wrapper.svelte-1uv12a6.svelte-1uv12a6{position:relative;padding:40px 0 40px;min-height:80vh}.resume-wrapper.svelte-1uv12a6 .download-link.svelte-1uv12a6{position:absolute;top:-5px;left:50%;transform:translateX(-50%);display:flex;align-items:center;justify-content:center;gap:5px;margin:0 auto;width:fit-content;z-index:1}.resume-wrapper.svelte-1uv12a6 .download-link.svelte-1uv12a6 svg{width:20px;height:20px;color:inherit}@media print{.resume-wrapper.svelte-1uv12a6.svelte-1uv12a6{padding:0}.resume-wrapper.svelte-1uv12a6 .download-link.svelte-1uv12a6{display:none !important}body{background:var(--card-background-color)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-jqnzyl_START -->${$$result.title = `<title>Resume - ${escape(title)}</title>`, ""}<meta property="${"og:title"}" content="${"Resume - " + escape(title, true)}"><meta name="${"twitter:title"}" content="${"Resume - " + escape(title, true)}"><!-- HEAD_svelte-jqnzyl_END -->`, ""}


<div class="${"resume-wrapper svelte-1uv12a6"}"><a class="${"download-link button secondary-light svelte-1uv12a6"}" href="${"https://drive.google.com/file/d/15Lw-qDodtw6ZQPeeoaVg7MQqzVQzMp_t/view"}">${validate_component(Download, "DownloadIcon").$$render($$result, {}, {}, {})}
		Download as PDF
	</a>
	${validate_component(Resume, "Resume").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
