import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const getInitialTheme = () => {
	if (browser) {
		const stored = localStorage.getItem('theme');
		if (stored === 'light' || stored === 'dark') {
			return stored;
		}
		return null; // Let CSS handle OS preference
	}
	return null;
};

const createThemeStore = () => {
	const { subscribe, set, update } = writable(getInitialTheme());

	return {
		subscribe,
		toggle: () => {
			update((current) => {
				let newTheme;
				if (current === 'dark') {
					newTheme = 'light';
				} else if (current === 'light') {
					newTheme = 'dark';
				} else {
					// No preference set, check current OS preference
					const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
					newTheme = prefersDark ? 'light' : 'dark';
				}
				if (browser) {
					localStorage.setItem('theme', newTheme);
				}
				return newTheme;
			});
		},
		set: (value) => {
			if (browser && value) {
				localStorage.setItem('theme', value);
			}
			set(value);
		}
	};
};

export const theme = createThemeStore();
