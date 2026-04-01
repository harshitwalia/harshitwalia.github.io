<script>
	import { theme } from '$lib/stores/theme';
	import Sun from '$lib/svg/sun.svelte';
	import Moon from '$lib/svg/moon.svelte';
	import { fade } from 'svelte/transition';

	// Determine if currently dark based on store or OS preference
	$: isDark = $theme === 'dark' || ($theme === null && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);
</script>

<button
	class="theme-toggle"
	on:click={() => theme.toggle()}
	aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
	title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
>
	<span class="icon-wrapper">
		{#if isDark}
			<span class="icon" in:fade={{ duration: 200 }}>
				<Sun size={20} />
			</span>
		{:else}
			<span class="icon" in:fade={{ duration: 200 }}>
				<Moon size={20} />
			</span>
		{/if}
	</span>
</button>

<style lang="scss">
	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		padding: 0;
		border: none;
		border-radius: 50%;
		background: transparent;
		color: var(--text-color);
		cursor: pointer;
		transition: background-color 0.2s ease, transform 0.2s ease;

		&:hover {
			background: rgba(var(--primary-color-rgb), 0.1);
			transform: scale(1.05);
		}

		&:active {
			transform: scale(0.95);
		}

		&:focus-visible {
			outline: 2px solid var(--primary-color);
			outline-offset: 2px;
		}
	}

	.icon-wrapper {
		position: relative;
		width: 20px;
		height: 20px;
	}

	.icon {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
