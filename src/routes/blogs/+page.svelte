<script>
	export let data;
</script>

<ul>
	{#each data.summaries as { slug }}
		<li><a href="/blogs/{slug}"><h2>{slug.toLocaleUpperCase()}</h2></a></li>
	{/each}
</ul>
