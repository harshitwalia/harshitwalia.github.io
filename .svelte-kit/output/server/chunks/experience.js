import { c as create_ssr_component, b as add_attribute } from "./index.js";
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" stroke-width="${"1.5"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7H16M8 7V3.6C8 3.26863 8.26863 3 8.6 3H15.4C15.7314 3 16 3.26863 16 3.6V7M8 7H16"}" stroke="${"currentColor"}" stroke-width="${"1.5"}"></path></svg>`;
});
const Blob1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" viewBox="${"0 0 350 350"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M265.174 126.404C288.906 163.921 302.692 210.687 286.114 243.319C269.362 275.776 221.898 294.273 178.797 292.004C135.695 289.561 96.607 266.178 72.526 229.184C48.2705 192.365 38.8475 141.934 58.3915 106.685C77.9355 71.6107 126.272 51.7177 167.105 56.0802C208.113 60.2682 241.442 88.8862 265.174 126.404Z"}" fill="${"var(--primary-light-color)"}" fill-opacity="${"0.2"}"></path></svg>`;
});
const Blob3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"100%"}" height="${"100%"}" viewBox="${"0 0 533 532"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><g clip-path="${"url(#clip0)"}"><path d="${"M233.607 371.839C187.041 360.883 141.149 335.306 129.28 297.694C117.678 260.084 140.236 210.04 175.107 179.263C210.109 148.621 257.824 137.116 304.264 147.407C350.706 157.431 396.007 189.118 407.568 230.983C418.998 272.713 396.822 324.489 362.116 351.943C327.408 379.663 280.173 382.795 233.607 371.839Z"}" fill="${"var(--primary-light-color)"}" fill-opacity="${"0.2"}"></path></g><defs><clipPath id="${"clip0"}"><rect width="${"376.078"}" height="${"376.078"}" fill="${"white"}" transform="${"translate(532.329 268.494) rotate(135.556)"}"></rect></clipPath></defs></svg>`;
});
const lowAccentHighlight_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--bg-color:var(--primary-light-color)}.wrapper.svelte-qn06g0{position:relative;display:inline-block;z-index:1}.wrapper.svelte-qn06g0::before{content:"";width:calc(100% + 4px);background:var(--bg-color);height:0px;position:absolute;bottom:4px;left:-2px;z-index:-1}',
  map: null
};
const Low_accent_highlight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css);
  return `<div class="${"wrapper svelte-qn06g0"}"${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const careerStart = new Date(2019, 6, 25);
const yearsOfExperience = Math.abs(
  new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970
);
const entries = [
  {
    id: "atlassian",
    title: "Atlassian",
    jobTitle: "Software Engineer II",
    timeframe: "2024 → 2025",
    current: true,
    location: "Delhi, India",
    description: "In this role, I focused on streamlining processes, enhancing disaster recovery strategies, and optimizing resource use to drive cost efficiencies within the Search Enterprise Infra Team. A significant part of my role has been unblocking the path for potentially saving up to USD 1M per year.",
    tags: [
      {
        color: "primary",
        text: "Java"
      },
      {
        color: "primary",
        text: "Python"
      },
      {
        color: "primary",
        text: "AWS"
      },
      {
        color: "primary",
        text: "Operations"
      }
    ]
  },
  {
    id: "amazon",
    title: "Amazon",
    jobTitle: "Software Development Engineer II",
    timeframe: "2022 → 2024",
    location: "Gurugram, India",
    description: "Building interfaces and frameworks to improve Client Experience in Consumer Payments Team [August 2022-> March 2023] and Working on a comprehensive trial management solution catering to any team trial and testing needs. [March 2023 -> Now]",
    tags: [
      {
        color: "primary",
        text: "GraphQL"
      },
      {
        color: "primary",
        text: "TypeScript"
      },
      {
        color: "primary",
        text: "Terraform"
      },
      {
        color: "primary",
        text: "PostgreSQL"
      },
      {
        color: "primary",
        text: "Java"
      },
      {
        color: "primary",
        text: "Python"
      },
      {
        color: "primary",
        text: "AWS"
      }
    ]
  },
  {
    id: "goldman-sachs",
    title: "Goldman Sachs",
    jobTitle: "Technology Analyst",
    timeframe: "2021 → 2022",
    location: "Bangalore, India",
    description: "Developer in Global Markets Division, with special emphasis on creating intuitive trading platforms that track the firm’s inventory in real-time and provide better visibility and control over intra-day liquidity, ultimately facilitating traders to act decisively.",
    tags: [
      {
        color: "primary",
        text: "Java"
      },
      {
        color: "primary",
        text: "Design Pattern"
      },
      {
        color: "primary",
        text: "Slang"
      },
      {
        color: "primary",
        text: "Kafka"
      }
    ]
  },
  {
    id: "tower-research-capital",
    title: "Tower Research Capital",
    jobTitle: "Software Engineer II",
    timeframe: "2019 → 2021",
    location: "Gurugram, India",
    description: "Worked on developing softwares to improve automate & infrastructure surrounding the plumbing of finance",
    tags: [
      {
        color: "primary",
        text: "C++"
      },
      {
        color: "primary",
        text: "Python"
      },
      {
        color: "primary",
        text: "Bash"
      },
      {
        color: "primary",
        text: "Wireshark"
      },
      {
        color: "primary",
        text: "MongoDB"
      }
    ]
  },
  {
    id: "samsung",
    title: "Samsung Research Institute",
    jobTitle: "Student Trainee",
    timeframe: "2018 → 2018",
    location: "Bangalore, India",
    description: "Developed Apparent Age Estimation Software for Data Intelligence Team",
    tags: [
      {
        color: "primary",
        text: "OpenCV"
      },
      {
        color: "primary",
        text: "Python"
      },
      {
        color: "primary",
        text: "CNN"
      },
      {
        color: "primary",
        text: "SSR-Net"
      }
    ]
  }
];
export {
  Blob1 as B,
  Experience as E,
  Low_accent_highlight as L,
  Blob3 as a,
  entries as e,
  yearsOfExperience as y
};
