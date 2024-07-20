<script>
	export let data;
</script>

<h1>Welcome to SvelteKit</h1>

<a href="/redirect/fake">Fake page</a>
<div class="loads">
	<h2 class="fromEvent">{data.fromEvent}</h2>
	<h2>{data.textA}</h2>
</div>
<enhanced:img src="../assets/deer.jpg?blur=4" alt="Deer" />
<p>
	Hot pink color from the handle function and from property transformPageChunck! Placed in body of
	the page!
</p>

<style>
	a {
		display: block;
		width: 40vmin;
		text-align: center;
		margin: 2rem auto;
	}
	.loads {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 2rem auto;
	}
</style>
