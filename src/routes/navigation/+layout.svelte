<script>
	// @ts-nocheck

	export let data;
</script>

<slot></slot>
<nav>
	{#each data.slugs as slug, index (index)}
		<a href="/navigation/{slug}">{index + 1}. {slug[0].toUpperCase() + slug.slice(1)} navigation</a>
	{/each}
</nav>

<style>
	nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 70vw;
		margin: 2rem 15vw;
		gap: 1rem;
	}
</style>
