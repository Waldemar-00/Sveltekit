<script>
	import { page } from '$app/stores';

	const paths = [
		{ descr: 'reroute', route: '/hooks/universal/reroute' },
		{ descr: 'something', route: '/hooks/universal/something' }
	];
</script>

<slot></slot>
<nav>
	{#each paths as path, index (index)}
		{#if !($page.url.pathname === path.route)}
			<a href={path.route}>{path.descr}</a>
		{/if}
	{/each}
</nav>

<style>
	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		gap: 1.5rem;
		margin: 2rem 15vw;
	}
	nav a {
		text-decoration: none;
		background-color: #fff;
		padding: 0.1rem 1.2rem;
		border-radius: 0.5rem;
		cursor: pointer;
	}
</style>
