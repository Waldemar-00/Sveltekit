<script>
	// @ts-nocheck
	import { fly } from 'svelte/transition';
	export let data;
</script>

<svelte:head>
	<title>main page of the Notes app</title>
	<!--for SEO and accessibility-->
</svelte:head>
<h1>form for todo</h1>
<main>
	<!-- svelte-ignore a11y-autofocus -->
	<input
		class="notes"
		id="todo"
		required
		type="text"
		autocomplete="off"
		name="inputValue"
		autofocus
		on:keydown={async (e) => {
			if (e.key !== 'Enter') return;
			const inputValue = e.currentTarget.value;
			const input = e.currentTarget;
			const response = await fetch('/notes', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ inputValue })
			});
			const { id } = await response.json();
			data.notes = [...data.notes, { id, inputValue, done: false }];
			input.value = '';
		}}
	/>
	<hr />
	<ul>
		{#each data.notes as t, index (t.id)}
			<li in:fly={{ y: 20 }} out:fly={{ x: 40 }}>
				<div class="del">
					<input
						type="checkbox"
						checked={t.done}
						on:change={async (e) => {
							const done = e.currentTarget.checked;
							await fetch(`/notes/${t.id}`, {
								method: 'PUT',
								headers: {
									'Content-Type': 'application/json' //! headers is optional here
								},
								body: JSON.stringify({ done })
							});
						}}
					/>
					<span>{index + 1}. {t.inputValue}</span>
					<button
						aria-label="Mark as complete"
						on:click={async () => {
							await fetch(`/notes/${t.id}`, {
								method: 'DELETE',
								headers: {
									'Content-Type': 'application/json'
								}
							})
								.then((response) => response.json())
								.then((data) => console.log(data.message));
							data.notes = data.notes.filter((todo) => todo !== t);
						}}>delete</button
					>
				</div>
			</li>
		{/each}
	</ul>
</main>
<footer>
	<a href="/login">Move to Login</a>
</footer>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		width: 80vmin;
		margin: 2rem auto;
	}
	.notes {
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
		min-width: 60vmin;
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
	footer {
		position: fixed;
		bottom: 0;
		text-align: center;
		line-height: calc(1rem + 6vmin);
		width: 70vw;
		height: calc(1rem + 6vmin);
		background-color: aqua;
		border-radius: 50px;
		margin-left: 15vw;
	}
	footer a {
		text-decoration: none;
	}
</style>
