import { writable } from 'svelte/store';

const createMenuStore = () => {
	const { subscribe, set, update } = writable(false);

	return {
		subscribe,
		open: () => set(true),
		close: () => set(false),
		toggle: () => update((isOpen) => !isOpen)
	};
};

export const isMenuOpen = createMenuStore();
