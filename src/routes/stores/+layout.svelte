<script>
	// @ts-nocheck

	import { page, updated } from '$app/stores';
	console.log($updated);
</script>

<slot></slot>
<nav>
	<a href="/stores" aria-current={$page.url.pathname === '/stores'}>Stores</a>
	<a href="/stores/details" aria-current={$page.url.pathname === '/stores/details'}>Details</a>
</nav>

<button on:click={() => window.location.reload()}>Location reload</button>

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
	button {
		display: block;
		width: 60vmin;
		margin: 3rem auto;
		padding: 0.5rem;
		font-size: 1.2rem;
		background-color: rgb(54, 140, 143);
		color: #fff;
		border: none;
		border-radius: 1rem;
		cursor: pointer;
	}
</style>
