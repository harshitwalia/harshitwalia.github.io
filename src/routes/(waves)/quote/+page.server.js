import { error } from '@sveltejs/kit';
import quotes from '$lib/quotes';

export async function load() {
	const result = Object.keys(quotes).map((index) => {
		const { slug, title, date, excerpt, tags, readingTime } = quotes[index];
		return {
			slug,
			title,
			date,
			excerpt,
			tags,
			readingTime
		};
	});

	if (result) {
		return {
			quotes: result
		}
	}

	throw error(500, `Could not load quotes`);
}
