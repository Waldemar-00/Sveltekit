<script>
	// @ts-nocheck
	export let data;
	console.log(data);
</script>

<h1>form for todo</h1>
<main>
	<form method="POST" action="?/create">
		<!-- svelte-ignore a11y-autofocus -->
		<input type="text" autocomplete="off" name="inputValue" autofocus />
	</form>
	<hr />
	<ul>
		{#each data.todos as t, index (t.id)}
			<li>
				<form method="POST" action="?/delete">
					<input type="hidden" name="id" value={t.id} />
					<div class="del">
						<span>{index + 1}. {t.inputValue}</span>
						<button aria-label="Mark as complete">delete</button>
					</div>
				</form>
			</li>
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
		width: 60vmin;
		transform: translateX(-16%);
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
	.del {
		width: 60vmin;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	button {
		border: none;
		opacity: 0.5;
		border-radius: 5px;
		cursor: pointer;
		transition: all 0.2s;
		padding: 0.5rem 0.8rem;
	}
	button:hover {
		opacity: 1;
		background-color: #eee;
	}
</style>
