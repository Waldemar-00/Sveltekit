<script>
	// @ts-nocheck

	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';
	let prevNav, start, end;
	let seconds = 0;
	$: if ($navigating) {
		start = Date.now();
		prevNav = $navigating;
		end = null;
	} else {
		end = Date.now();
	}
	onMount(() => {
		const timer = setInterval(() => (seconds = seconds + 1), 1000);
		return () => {
			clearInterval(timer);
		};
	});
</script>

<slot></slot>
<nav>
	<ul data-sveltekit-reload>
		<li><a href="/preload">Preload</a></li>
		<li><a href="/preload/fast">Fast</a></li>
		<li><a href="/preload/slow">Slow</a></li>
	</ul>
</nav>

{#if prevNav && end}
	<p>
		Navigation from {prevNav.from.url.pathname} to {prevNav.to.url.pathname} continued:
		<strong>{end - start}ms</strong>
	</p>
{/if}
<p>This page was opened <strong>{seconds}</strong> seconds ago</p>

<style>
	nav {
		width: 80vmin;
		margin: 2rem auto;
	}
	ul {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
</style>
