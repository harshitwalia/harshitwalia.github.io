/**
 * Svelte action for scroll-triggered animations using Intersection Observer
 * @param {HTMLElement} node - The element to observe
 * @param {Object} params - Configuration options
 * @param {number} params.threshold - Visibility threshold (0-1), default 0.2
 * @param {boolean} params.once - Only trigger once, default true
 * @param {string} params.rootMargin - Root margin for observer, default '0px'
 */
export function inview(node, params = {}) {
	const { threshold = 0.2, once = true, rootMargin = '0px 0px -50px 0px' } = params;

	// Check for reduced motion preference
	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (prefersReducedMotion) {
		// Immediately show element without animation
		node.classList.add('in-view');
		return { destroy() {} };
	}

	let hasTriggered = false;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && (!once || !hasTriggered)) {
					hasTriggered = true;
					node.classList.add('in-view');
					node.dispatchEvent(new CustomEvent('inview', { detail: { isIntersecting: true } }));

					if (once) {
						observer.unobserve(node);
					}
				} else if (!entry.isIntersecting && !once) {
					node.classList.remove('in-view');
					node.dispatchEvent(new CustomEvent('inview', { detail: { isIntersecting: false } }));
				}
			});
		},
		{ threshold, rootMargin }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		},
		update(newParams) {
			// Handle parameter updates if needed
		}
	};
}
