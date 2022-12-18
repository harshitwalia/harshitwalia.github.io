<script>
	export let animated = true;
</script>

<svg
	id="logo"
	class:animated
	width="1006"
	height="169"
	viewBox="0 0 1006 169"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g id="icon">
		<path
			d="M148.112 150.986C159.606 155.763 172.529 155.785 184.038 151.047C195.548 146.309 204.702 137.199 209.485 125.721L254.375 18.0134C242.882 13.2362 229.959 13.2142 218.449 17.9523C206.939 22.6904 197.786 31.8003 193.002 43.2782L148.112 150.986Z"
			fill="url(#paint0_linear)"
		/>
		<path
			d="M73.8789 150.988C85.3724 155.766 98.2954 155.788 109.805 151.05C121.315 146.311 130.468 137.201 135.252 125.724L180.142 18.0162C168.649 13.239 155.726 13.217 144.216 17.9551C132.706 22.6931 123.553 31.8031 118.769 43.281L73.8789 150.988Z"
			fill="url(#paint1_linear)"
		/>
		<g id="darker">
			<path
				d="M9.18199 130.636C11.6709 124.669 13.7057 118.541 15.6676 112.396C16.6319 109.272 18.2278 106.38 20.3567 103.897C22.4855 101.415 25.1019 99.3947 28.044 97.9628C30.9861 96.5308 34.1912 95.7171 37.4609 95.572C40.7306 95.427 43.9953 95.9537 47.0529 97.1196C50.1106 98.2855 52.896 100.066 55.2369 102.35C57.5778 104.634 59.4242 107.374 60.6619 110.4C61.8996 113.426 62.5023 116.673 62.4326 119.941C62.3628 123.208 61.6222 126.427 60.2566 129.397C59.3419 131.465 58.1411 133.395 56.6895 135.129C50.4653 143.614 41.5646 149.762 31.4186 152.584C21.2726 155.407 10.471 154.74 0.750626 150.69L9.18199 130.636Z"
				fill="url(#paint2_linear)"
			/>
			<path
				d="M97.0919 38.466C94.6031 44.4327 92.5682 50.5615 90.6063 56.7064C89.642 59.8298 88.0461 62.7223 85.9173 65.2049C83.7884 67.6875 81.172 69.7073 78.2299 71.1393C75.2878 72.5713 72.0827 73.385 68.813 73.53C65.5433 73.675 62.2786 73.1483 59.221 71.9825C56.1634 70.8166 53.3779 69.0364 51.037 66.752C48.6962 64.4677 46.8497 61.7279 45.612 58.7021C44.3743 55.6764 43.7716 52.4291 43.8414 49.1614C43.9111 45.8937 44.6517 42.675 46.0173 39.7046C46.9321 37.6368 48.1328 35.7073 49.5845 33.9726C55.8086 25.4878 64.7093 19.3399 74.8553 16.5176C85.0013 13.6953 95.8029 14.3625 105.523 18.412L97.0919 38.466Z"
				fill="url(#paint3_linear)"
			/>
		</g>
	</g>
	<g id="name">

	</g>
	<defs>
		<linearGradient
			id="paint0_linear"
			x1="169.78"
			y1="159.992"
			x2="232.561"
			y2="8.94658"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#66B3B3" />
			<stop offset="1" stop-color="#95CACA" />
		</linearGradient>
		<linearGradient
			id="paint1_linear"
			x1="95.547"
			y1="159.995"
			x2="158.328"
			y2="8.94937"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#66B3B3" />
			<stop offset="1" stop-color="#95CACA" />
		</linearGradient>
		<linearGradient
			id="paint2_linear"
			x1="52.6972"
			y1="105.259"
			x2="14.1123"
			y2="154.478"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#0CA4A5" />
			<stop offset="1" stop-color="#097677" />
		</linearGradient>
		<linearGradient
			id="paint3_linear"
			x1="53.5767"
			y1="63.8427"
			x2="92.1617"
			y2="14.6241"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#0CA4A5" />
			<stop offset="1" stop-color="#097677" />
		</linearGradient>
	</defs>
</svg>

<style lang="scss">
	#logo {
		width: auto;
		height: 100%;
	}

	#logo {
		#name {
			transition: all 0.2s ease-in-out;
			fill: var(--text-color);
			stroke: var(--text-color);

			path {
				fill: inherit;
				stroke: inherit;
			}
		}

		#icon {
			transition: all 0.2s ease-in-out;

			fill: var(--text-light-color);
			stroke: var(--text-light-color);

			#darker {
				transition: all 0.2s ease-in-out;

				fill: var(--text-color);
				stroke: var(--text-color);
			}

			path {
				fill: inherit;
				stroke: inherit;
			}
		}

		&:hover {
			#icon {
				fill: url(#paint0_linear);
				stroke: var(--primary-light-color);

				#darker {
					fill: url(#paint3_linear);
					stroke: var(--primary-color);
				}
			}
		}
	}

	// LOGO SVG ANIMATION

	@keyframes animate-svg-fill {
		0% {
			fill: transparent;
		}

		100% {
			fill: inherit;
		}
	}

	@keyframes animate-svg-stroke {
		0% {
			stroke-dashoffset: 550;
			stroke-dasharray: 550;
		}

		99.999% {
			stroke-dasharray: 550;
		}

		100% {
			stroke-dashoffset: 0;
		}
	}

	@keyframes animate-svg-stroke-long {
		0% {
			stroke-dashoffset: 700;
			stroke-dasharray: 700;
		}

		99.999% {
			stroke-dasharray: 700;
		}

		100% {
			stroke-dashoffset: 0;
			stroke-dasharray: 700;
		}
	}

	@media screen and (prefers-reduced-motion: no-preference) {
		#logo.animated {
			#icon {
				> path {
					animation: animate-svg-fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4s both,
						animate-svg-stroke 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s both;
				}

				#darker {
					> path {
						animation: animate-svg-fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2s both,
							animate-svg-stroke 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s both;
					}
				}
			}
			#name {
				> path:nth-child(1) {
					animation: animate-svg-fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both,
						animate-svg-stroke 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.2s both;
				}
				> path:nth-child(2) {
					animation: animate-svg-fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both,
						animate-svg-stroke 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.3s both;
				}
				> path:nth-child(3) {
					animation: animate-svg-fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both,
						animate-svg-stroke 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.4s both;
				}
				> path:nth-child(4) {
					animation: animate-svg-fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s both,
						animate-svg-stroke 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.5s both;
				}
				> path:nth-child(5) {
					animation: animate-svg-fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s both,
						animate-svg-stroke 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s both;
				}
				> path:nth-child(6) {
					animation: animate-svg-fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s both,
						animate-svg-stroke 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.7s both;
				}
				> path:nth-child(7) {
					animation: animate-svg-fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4s both,
						animate-svg-stroke 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
				}
				> path:nth-child(8) {
					animation: animate-svg-fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s both,
						animate-svg-stroke 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
				}
				> path:nth-child(9) {
					animation: animate-svg-fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s both,
						animate-svg-stroke 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
				}
				> path:nth-child(10) {
					animation: animate-svg-fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7s both,
						animate-svg-stroke 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s both;
				}
				> path:nth-child(11) {
					animation: animate-svg-fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s both,
						animate-svg-stroke 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s both;
				}
				> path:nth-child(12) {
					animation: animate-svg-fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.9s both,
						animate-svg-stroke 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s both;
				}
				> path:nth-child(13) {
					animation: animate-svg-fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2s both,
						animate-svg-stroke 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4s both;
				}
			}
		}
	}
</style>
