export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11')];

export const server_loads = [2];

export const dictionary = {
	"/(root)": [~5],
	"/(waves)/404": [6,[3]],
	"/(waves)/blog": [~7,[3]],
	"/digital-tools": [10],
	"/(waves)/quote": [~8,[3]],
	"/(waves)/resume": [9,[3]],
	"/reviews/elden-ring": [11],
	"/(blog-article)/[slug]": [4,[2]]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};