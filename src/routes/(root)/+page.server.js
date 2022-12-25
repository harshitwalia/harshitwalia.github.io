import { error } from '@sveltejs/kit';
import posts from '$lib/posts';
import quotes from '$lib/quotes';

export async function load({ params }) {
	const result = Object.keys(posts)
		.slice(0, 4)
		.map((index) => {
			const { slug, title, date, excerpt, tags, readingTime } = posts[index];
			return {
				slug,
				title,
				date,
				excerpt,
				tags,
				readingTime
			};
		});
	const qresult = Object.keys(quotes)
		.slice(0, 4)
		.map((index) => {
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


	if (result && qresult) {
		return {
			posts: result,
			quotes: qresult
		};
	}

	throw error(500, `Could not load ${params.slug}`);
}
