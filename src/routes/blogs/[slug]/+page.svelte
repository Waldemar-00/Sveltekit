<script>
	// @ts-nocheck

	export let data;
	console.log(data);
</script>

<h2>{data.post.title}</h2>
<p>{data.post.content}</p>
{#each data.all as slug, index (index)}
	<p>{index + 1}. {slug.slug}</p>
{/each}

<style>
	p {
		max-width: 60vw;
		margin: 3rem;
	}
</style>
