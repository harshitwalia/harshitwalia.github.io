<script>
	import Wavelayout from '$lib/layout/wave.svelte';
	import Hero from '$lib/components/home/hero.svelte';
	import About from '$lib/components/home/about.svelte';
	import RecentPosts from '$lib/components/home/recent-posts.svelte';
	import RecentQuotes from '$lib/components/home/recent-quotes.svelte';
	import Experience from '$lib/components/home/experience.svelte';
	import Projects from '$lib/components/home/projects.svelte';

	export let data;
	let { posts,quotes } = data;
</script>

<Wavelayout>
	<div class="container">
		<Hero />
		<About />
		<RecentPosts {posts} />
		<RecentQuotes {quotes} />
		<Projects />
		<Experience />
	</div>
</Wavelayout>
