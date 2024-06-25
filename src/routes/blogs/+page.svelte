<script>
	export let data;
</script>

<ul>
	{#each data.all as { slug }}
		<li><a href="/blogs/{slug}"><h2>{slug.toLocaleUpperCase()}</h2></a></li>
	{/each}
</ul>

<style>
	ul {
		margin-left: 15vw;
	}
</style>
