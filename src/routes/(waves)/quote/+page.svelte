<script>
	import BlogGrid from '$lib/components/layout/3-2-1-grid.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import QuotePostCard from '$lib/components/base/quote-post-card.svelte';

	export let data;

	let { quotes } = data;
</script>

<section id="quote">
	<Section align="top" title="Food For Thought">
		<div class="container">
			<BlogGrid>
				{#each quotes as quote}
					<QuotePostCard {quote} />
				{/each}
			</BlogGrid>
		</div>
	</Section>
</section>
