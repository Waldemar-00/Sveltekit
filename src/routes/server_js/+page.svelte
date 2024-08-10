<script>
	// @ts-nocheck
	let name;
	async function postName() {
		const req = await fetch('/server_js', {
			method: 'POST',
			body: JSON.stringify(name)
		});
		const response = await req.json();
		console.log(response);
		name = response;
	}
</script>

<h1>Server_JS</h1>

<form on:submit|preventDefault={postName}>
	<input type="text" name="name" placeholder="place your name" bind:value={name} />
	<button>submit</button>
</form>
{#if name}
	<h2>{name}</h2>
{:else}
	<h2>Here will be your name</h2>
{/if}

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.7rem;
	}
	h2 {
		text-align: center;
	}
	input {
		padding: 0.5rem 2rem;
		text-align: center;
		border-radius: 1rem;
		border: none;
		outline-color: #f5d2a0;
	}
	button {
		padding: 0.5rem 2rem;
		border-radius: 1rem;
		text-align: center;
		background-color: #fff;
		border: none;
		cursor: pointer;
	}
	button:active {
		border: 2px solid green;
	}
</style>
