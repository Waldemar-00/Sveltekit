<script>
	// @ts-nocheck
	export let data;
	console.log(data);
</script>

<h1>form for todo</h1>
<main>
	<form method="POST">
		<input type="text" autocomplete="off" name="inputValue" />
	</form>
	<hr />
	<ul>
		{#each data.todos as t, index (index)}
			<li>{index + 1}. {t.inputValue}</li>
		{/each}
	</ul>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		width: 80vmin;
		margin: 2rem auto;
	}
	input {
		width: 80vmin;
		padding: 0.4rem;
		font-size: 1.2rem;
		outline-color: grey;
	}
	hr {
		width: 50vmin;
		transform: translateX(-30%);
	}
	ul {
		align-self: flex-start;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: flex-start;
		list-style: none;
		font-size: 1.3rem;
		width: fit-content;
	}
</style>
