// Disabling eslint because importing Prism is needed
// even if not directly used in this file
// eslint-disable-next-line no-unused-vars
import Prism from 'prismjs';
import 'prism-svelte';
import readingTime from 'reading-time';

const imports = import.meta.glob('./quotes/*.md', { eager: true });

const quotes = [];
for (const path in imports) {
	const quote = imports[path];
	if (quote) {
		quotes.push({
			...quote.metadata,
			...quote.default.render()
		});
	}
}

const allTagsAndQuotes = quotes
	.filter((x) => !x.hidden)
	.map((quote) =>
		quote.tags.map((tag) => {
			return { tag: tag, quote: quote };
		})
	)
	.flat();

export const categories = groupByTags(allTagsAndQuotes);

function groupByTags(array) {
	return array.reduce((acc, value) => {
		const property = value['tag'];
		acc[property] = acc[property] || [];
		acc[property].push(value['quote']);
		return acc;
	}, {});
}

function getRelatedQuotes(quote) {
	let allRelatedQuotes = [];
	// Get quotes with same tags
	for (const tag of quote.tags) {
		allRelatedQuotes = allRelatedQuotes.concat(categories[tag]);
	}

	let relatedQuotes = [];
	// Sort by number of similar tags
	for (const relQuote of allRelatedQuotes) {
		if (relQuote.slug === quote.slug) {
			continue;
		}
		const rel = relatedQuotes.find((x) => x.quote.slug === relQuote.slug);
		if (rel) {
			rel.count++;
		} else {
			relatedQuotes.push({
				quote: { ...relQuote, readingTime: readingTime(relQuote.html).text },
				count: 1,
				date: relQuote.date
			});
		}
	}

	// If there are no related quotes, just grab all
	if (relatedQuotes.length === 0) {
		relatedQuotes = quotes
			.filter((x) => x.slug !== quote.slug)
			.map((x) => ({
				quote: { ...x, readingTime: readingTime(x.html).text },
				count: 0,
				date: x.date
			}));
	}

	return relatedQuotes;
}

const filteredQuotes = quotes
	.filter((quote) => !quote.hidden)
	.sort((a, b) =>
		new Date(a.date).getTime() > new Date(b.date).getTime()
			? -1
			: new Date(a.date).getTime() < new Date(b.date).getTime()
			? 1
			: 0
	)
	.map((quote) => {
		const readingTimeDuration = readingTime(quote.html).text;

		const relatedQuotes = getRelatedQuotes(quote);

		return {
			...quote,
			readingTime: readingTimeDuration,
			relatedQuotes: relatedQuotes
				.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
				.sort((a, b) => b.count - a.count)
				.slice(0, 3)
				.map((x) => x.quote)
		};
	});

export default filteredQuotes;
