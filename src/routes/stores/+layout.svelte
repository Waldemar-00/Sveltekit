<script>
	// @ts-nocheck

	import { page } from '$app/stores';
</script>

<slot></slot>
<nav>
	<a href="/stores" aria-current={$page.url.pathname === '/stores'}>Stores</a>
	<a href="/stores/details" aria-current={$page.url.pathname === '/stores/details'}>Details</a>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		width: 60vmin;
		margin: 3rem auto;
		font-size: 2rem;
	}
</style>
