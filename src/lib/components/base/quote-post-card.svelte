<script>
	import Card from '$lib/components/base/card.svelte';
	import Tag from './tag.svelte';
	export let quote;
	export let showImage = false;
</script>

{#if quote}
	<Card>
		<div slot="content">
			<div class="title">{quote.title}</div>
			<div class="text">{quote.excerpt}</div>
		</div>
		<div slot="footer">
			{#if quote.tags}
				<div class="tags">
					{#each quote.tags.slice(0, 2) as tag}
						<Tag>{tag}</Tag>
					{/each}
				</div>
			{/if}
		</div>
	</Card>
{/if}
