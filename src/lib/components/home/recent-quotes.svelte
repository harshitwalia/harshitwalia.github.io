<script>
	import TwoByTwoGrid from '$lib/components/layout/2x2-grid.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import Blobs from '$lib/components/layout/blobs.svelte';
	import QuotePostCard from '$lib/components/base/quote-post-card.svelte';

	export let quotes = [];
</script>

<section id="recent-quotes">
	<Section
		title="Inspiring Thoughts"
		description="Sometimes, I write about what I find inspiring."
		buttonText="View all Quotes"
		buttonUrl="/quote"
	>
		<TwoByTwoGrid>
			{#each quotes as quote}
				<QuotePostCard {quote} showImage={false} />
			{/each}
		</TwoByTwoGrid>
	</Section>
	<Blobs maxLeft={20} maxTop={5} />
</section>
