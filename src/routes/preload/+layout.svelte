<script>
	// @ts-nocheck

	import { navigating } from '$app/stores';
	let prevNav;
	let start;
	let end;
	$: if ($navigating) {
		start = Date.now();
		prevNav = $navigating;
		end = null;
	} else {
		end = Date.now();
	}
</script>

<slot></slot>
<nav>
	<ul>
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
