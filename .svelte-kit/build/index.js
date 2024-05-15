
import root from '__GENERATED__/root.svelte';
import { respond } from '../../node_modules/@sveltejs/kit/src/runtime/server/index.js';
import { set_paths, assets, base } from '../../node_modules/@sveltejs/kit/src/runtime/paths.js';
import { set_building, set_version } from '../../node_modules/@sveltejs/kit/src/runtime/env.js';
import { set_private_env } from '../../node_modules/@sveltejs/kit/src/runtime/env-private.js';
import { set_public_env } from '../../node_modules/@sveltejs/kit/src/runtime/env-public.js';

const app_template = ({ head, body, assets, nonce }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\n\t\t<!-- Favicon -->\n\t\t<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/favicons/apple-touch-icon.png\" />\n\t\t<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/favicons/favicon-32x32.png\" />\n\t\t<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/favicons/favicon-16x16.png\" />\n\t\t<link rel=\"manifest\" href=\"/favicons/site.webmanifest\" />\n\t\t<link rel=\"mask-icon\" href=\"/favicons/safari-pinned-tab.svg\" color=\"#0ca4a5\" />\n\t\t<link rel=\"shortcut icon\" href=\"/favicons/favicon.ico\" />\n\t\t<link rel=\"icon\" href=\"/favicons/favicon.svg\" />\n\n\t\t<!-- Tell browser this site is responsive -->\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<!-- Tell browser this site supports light and dark mode -->\n\t\t<meta name=\"color-scheme\" content=\"light dark\" />\n\t\t<!-- Color for browser url bar in mobile/Safari -->\n\t\t<meta name=\"theme-color\" media=\"(prefers-color-scheme: light)\" content=\"#C2E6E9\" />\n\t\t<meta name=\"theme-color\" media=\"(prefers-color-scheme: dark)\" content=\"#163F45\" />\n\t\t<!-- Disable Google FLOC -->\n\t\t<meta http-equiv=\"Permissions-Policy\" content=\"interest-cohort=()\" />\n\n\t\t<!-- Twitter stuff -->\n\t\t<meta name=\"author\" content=\"Harshit Walia\" />\n\t\t<meta name=\"twitter:card\" content=\"summary_large_image\" />\n\t\t<meta name=\"twitter:creator\" content=\"@Harshitwalia97\" />\n\n\t\t<!-- Fonts -->\n\t\t<!-- Preload on browsers that support it -->\n\t\t<link rel=\"preload\" as=\"font\" type=\"text/css\" href=\"/fonts/ubuntu-mono.css\" />\n\t\t<link rel=\"preload\" as=\"font\" type=\"text/css\" href=\"/fonts/wotfard.css\" />\n\t\t<!-- Load normally on browsers that don't (Safari) -->\n\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"/fonts/ubuntu-mono.css\" />\n\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"/fonts/wotfard.css\" />\n\n\t\t<!-- Plausible - ethical analytics -->\n\t\t<script\n\t\t\tasync\n\t\t\tdefer\n\t\t\tdata-domain=\"harshitwalia.dev\"\n\t\t\tsrc=\"https://stats.harshitwalia.dev/js/index.js\"\n\t\t></script>\n\t\t<script>\n\t\t\twindow.plausible =\n\t\t\t\twindow.plausible ||\n\t\t\t\tfunction () {\n\t\t\t\t\t(window.plausible.q = window.plausible.q || []).push(arguments);\n\t\t\t\t};\n\t\t</script>\n\n\t\t<script>\n\t\t\t// The script below uses Plausible to track the % of people that have a dark/light mode preference\n\t\t\t// But it breaks the Bounce Rate metrics\n\t\t\tif (plausible) {\n\t\t\t\tif (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {\n\t\t\t\t\tplausible('Dark Mode Enabled');\n\t\t\t\t} else if (\n\t\t\t\t\twindow.matchMedia &&\n\t\t\t\t\twindow.matchMedia('(prefers-color-scheme: light)').matches\n\t\t\t\t) {\n\t\t\t\t\tplausible('Light Mode Enabled');\n\t\t\t\t} else {\n\t\t\t\t\tplausible('No Dark/Light Preference');\n\t\t\t\t}\n\t\t\t}\n\t\t</script>\n\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte-root\">" + body + "</div>\n\t</body>\n</html>\n";

const error_template = ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid #ccc;\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n";

let read = null;

set_paths({"base":"","assets":""});
set_version("1715747906774");

let default_protocol = 'https';

// allow paths to be globally overridden
// in svelte-kit preview and in prerendering
export function override(settings) {
	default_protocol = settings.protocol || default_protocol;
	set_paths(settings.paths);
	set_building(settings.building);
	read = settings.read;
}

export class Server {
	constructor(manifest) {
		this.options = {
			csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
			csrf: {
				check_origin: true,
			},
			dev: false,
			embedded: false,
			handle_error: (error, event) => {
				return this.options.hooks.handleError({ error, event }) ?? {
					message: event.route.id != null ? 'Internal Error' : 'Not Found'
				};
			},
			hooks: null,
			manifest,
			paths: { base, assets },
			public_env: {},
			read,
			root,
			service_worker: false,
			app_template,
			app_template_contains_nonce: false,
			error_template,
			version: "1715747906774"
		};
	}

	/**
	 * Take care: Some adapters may have to call `Server.init` per-request to set env vars,
	 * so anything that shouldn't be rerun should be wrapped in an `if` block to make sure it hasn't
	 * been done already.
	 */
	async init({ env }) {
		const entries = Object.entries(env);

		const prv = Object.fromEntries(entries.filter(([k]) => !k.startsWith('PUBLIC_')));

		const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith('PUBLIC_')));

		set_private_env(prv);
		set_public_env(pub);

		this.options.public_env = pub;

		if (!this.options.hooks) {
			const module = await import("./hooks.js");

			this.options.hooks = {
				handle: module.handle || (({ event, resolve }) => resolve(event)),
				handleError: module.handleError || (({ error }) => console.error(error.stack)),
				handleFetch: module.handleFetch || (({ request, fetch }) => fetch(request))
			};
		}
	}

	async respond(request, options = {}) {
		if (!(request instanceof Request)) {
			throw new Error('The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details');
		}

		return respond(request, this.options, options);
	}
}
