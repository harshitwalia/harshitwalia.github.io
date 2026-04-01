<script>
	import { fly, fade } from 'svelte/transition';
	import { isMenuOpen } from '$lib/stores/navigation';
	import { page } from '$app/stores';
	import Close from '$lib/svg/close.svelte';
	import Socials from '$lib/components/base/socials.svelte';
	import ThemeToggle from '$lib/components/base/theme-toggle.svelte';

	// Close menu on navigation
	$: if ($page) {
		isMenuOpen.close();
	}

	// Handle escape key
	function handleKeydown(event) {
		if (event.key === 'Escape') {
			isMenuOpen.close();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if $isMenuOpen}
	<div class="mobile-menu-overlay" transition:fade={{ duration: 200 }} on:click={isMenuOpen.close} />
	<nav class="mobile-menu" transition:fly={{ x: 300, duration: 300 }} aria-label="Mobile navigation">
		<div class="menu-header">
			<ThemeToggle />
			<button
				class="close-btn"
				on:click={isMenuOpen.close}
				aria-label="Close menu"
			>
				<Close size={24} />
			</button>
		</div>

		<div class="menu-links">
			<a href="/blog" class:active={$page.url.pathname.startsWith('/blog')} on:click={isMenuOpen.close}>Blog</a>
			<a href="/quote" class:active={$page.url.pathname.startsWith('/quote')} on:click={isMenuOpen.close}>Thoughts</a>
			<a href="/resume" class:active={$page.url.pathname === '/resume'} on:click={isMenuOpen.close}>Resume</a>
		</div>

		<div class="menu-footer">
			<Socials />
		</div>
	</nav>
{/if}

<style lang="scss">
	@import '../../scss/breakpoints.scss';

	.mobile-menu-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 998;
		backdrop-filter: blur(2px);
	}

	.mobile-menu {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		width: min(300px, 80vw);
		background: var(--page-background-color);
		z-index: 999;
		display: flex;
		flex-direction: column;
		box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
	}

	.menu-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px;
		border-bottom: 1px solid rgba(var(--text-color-rgb), 0.1);
	}

	.close-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		padding: 0;
		border: none;
		border-radius: 50%;
		background: transparent;
		color: var(--text-color);
		cursor: pointer;
		transition: background-color 0.2s ease;

		&:hover {
			background: rgba(var(--primary-color-rgb), 0.1);
		}

		&:focus-visible {
			outline: 2px solid var(--primary-color);
			outline-offset: 2px;
		}
	}

	.menu-links {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 20px;
		gap: 8px;

		a {
			display: block;
			padding: 16px 20px;
			font-size: 1.1rem;
			font-weight: 500;
			color: var(--text-color);
			text-decoration: none;
			border-radius: 8px;
			transition: background-color 0.2s ease, color 0.2s ease;

			&:hover {
				background: rgba(var(--primary-color-rgb), 0.1);
				color: var(--primary-color);
			}

			&.active {
				background: rgba(var(--primary-color-rgb), 0.15);
				color: var(--primary-color);
			}

			&:focus-visible {
				outline: 2px solid var(--primary-color);
				outline-offset: 2px;
			}
		}
	}

	.menu-footer {
		padding: 20px;
		border-top: 1px solid rgba(var(--text-color-rgb), 0.1);

		:global(.socials) {
			justify-content: center;
		}
	}
</style>
