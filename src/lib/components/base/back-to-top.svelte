<script>
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import ArrowUp from '$lib/svg/arrow-up.svelte';

	let visible = false;

	onMount(() => {
		const handleScroll = () => {
			visible = window.scrollY > 500;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

{#if visible}
	<button
		class="back-to-top"
		on:click={scrollToTop}
		transition:scale={{ duration: 200 }}
		aria-label="Back to top"
		title="Back to top"
	>
		<ArrowUp size={24} />
	</button>
{/if}

<style lang="scss">
	.back-to-top {
		position: fixed;
		bottom: 30px;
		right: 30px;
		z-index: 90;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 50px;
		padding: 0;
		border: none;
		border-radius: 50%;
		background: var(--primary-color);
		color: var(--primary-color-contrast);
		box-shadow: 0 4px 15px rgba(var(--primary-color-rgb), 0.4);
		cursor: pointer;
		transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;

		&:hover {
			transform: translateY(-3px);
			box-shadow: 0 6px 20px rgba(var(--primary-color-rgb), 0.5);
		}

		&:active {
			transform: translateY(-1px);
		}

		&:focus-visible {
			outline: 2px solid var(--primary-color);
			outline-offset: 4px;
		}

		@media (max-width: 576px) {
			bottom: 20px;
			right: 20px;
			width: 44px;
			height: 44px;
		}
	}
</style>
