<script>
	import TelegramIcon from '$lib/svg/socials/telegram.svelte';
	import TwitterIcon from '$lib/svg/socials/twitter.svelte';
	import GitHubIcon from '$lib/svg/socials/github.svelte';
	import LinkedInIcon from '$lib/svg/socials/linkedin.svelte';
	import EmailIcon from '$lib/svg/socials/email.svelte';
</script>

<div class="socials">
	<a
		href="https://twitter.com/Harshitwalia97"
		target="_blank"
		rel="noopener"
		title="Say Hi on Twitter"
	>
		<TwitterIcon />
	</a>
	<a
		href="https://github.com/harshitwalia"
		target="_blank"
		rel="noopener"
		title="See my GitHub profile"
	>
		<GitHubIcon />
	</a>
	<a
		href="https://www.linkedin.com/in/harshit-walia/"
		target="_blank"
		rel="noopener"
		title="Connect on LinkedIn"
	>
		<LinkedInIcon />
	</a>
	<a
		href="mailto:emailharshitwalia@gmail.com"
		target="_blank"
		rel="noopener"
		title="Send an email to emailharshitwalia@gmail.com"
	>
		<EmailIcon />
	</a>
</div>

<style lang="scss">
	@import '../../scss/breakpoints.scss';
	.socials {
		display: flex;
		align-items: center;
		gap: 20px;

		a {
			width: 24px;
			color: var(--text-color);
			fill: var(--text-color);

			&:hover {
				color: var(--link-highlight-color);
				fill: var(--link-highlight-color);
			}
		}
	}
</style>
