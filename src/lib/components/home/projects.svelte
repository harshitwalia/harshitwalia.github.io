<script>
	import Card from '../base/card.svelte';
	import Section from '../layout/section.svelte';
	import ProjectsGrid from '$lib/components/layout/projects-grid.svelte';
	import OneByOneGrid from '$lib/components/layout/1x1-grid.svelte';
	import ExternalLinkIcon from '$lib/svg/external-link.svelte';
	import Github from '$lib/svg/socials/github.svelte';
	import Blobs from '../layout/blobs.svelte';
	import Image from '../base/image.svelte';
	import Tag from '../base/tag.svelte';
</script>

<section id="projects">
	<Section
		align="top"
		title="Projects"
		description="I like to build some small projects when learning. Technologies are varied and so are their purposes. Most of them are open source!"
	>
		<OneByOneGrid>
			<ProjectsGrid>
				<Card>
					<div slot="image">
						<Image path="projects" filename="personal-website" alt="Personal Website" />
					</div>
					<div slot="content">
						<div class="title">
							Personal Website
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/harshitwalia/harshitwalia.github.io"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>
							</div>
						</div>
						<div class="text">
							The website you’re seeing right now. Designed to be pretty, simple, and lightweight.
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Svelte</Tag>
							<Tag color="secondary">Open Source</Tag>
						</div>
					</div>
				</Card>

			</ProjectsGrid>

		</OneByOneGrid>
		<br/>
		<OneByOneGrid>
			<ProjectsGrid>

				<Card>
					<div slot="image">
						<Image path="projects" filename="gstforce" alt="GSTForce" />
					</div>
					<div slot="content">
						<div class="title">
							GSTForce.in
							<div class="links">
								<a
										class="text-secondary"
										href="https://gstforce.in/"
										target="_blank"
										rel="noopener"
										title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							A web app for managing GST Force Community
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Javascript</Tag>
						</div>
					</div>
				</Card>
			</ProjectsGrid>

		</OneByOneGrid>
	</Section>
	<Blobs maxTop={5} minLeft={50} />
</section>

<style lang="scss">
	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.links {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 15px;
			a {
				width: 30px;
				height: 30px;
				padding: 3px;

				&:hover {
					color: var(--primary-color);
					fill: var(--primary-color);
				}
			}
		}
	}

	.project-post-button {
		width: fit-content;
		margin: 10px auto 0;
		font-weight: 500;
	}
</style>
