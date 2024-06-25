<script>
	// @ts-nocheck
	export let data;
</script>

<article>
	<main>
		<slot></slot>
	</main>
	<aside>
		<h2>All blogs</h2>
		<ul>
			{#each data.all as { slug }}
				<li><a href="/blogs/{slug}"><h2>{slug.toUpperCase()}</h2></a></li>
			{/each}
		</ul>
	</aside>
</article>

<style>
	article {
		margin: calc(1rem + 2vmin) 15vw;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		gap: 1.5rem;
		/* width: fit-content; */
	}
</style>
