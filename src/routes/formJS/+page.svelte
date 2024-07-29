<script>
	// @ts-nocheck
	import { deserialize, applyAction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	export let form;
	// console.log(form?.comment);

	async function submitComment(e) {
		const formData = new FormData(e.currentTarget);

		const response = await fetch(e.currentTarget.action, {
			method: 'POST',
			body: formData
		});

		const result = deserialize(await response.text());
		// if (result.type === 'success') {
		// 	await invalidateAll();
		// }
		// result.type = 'error';
		applyAction(result);
	}
</script>

<h1>{form?.comment ?? 'Form_JS'}</h1>

<form action="" method="POST" on:submit|preventDefault={submitComment}>
	<label for="comment">comment</label>
	<textarea name="comment" id="comment" placeholder="comment"></textarea>
	<button>submit</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	textarea {
		width: 50vw;
		height: 4rem;
		outline-color: #f188aa;
		font-size: 1rem;
		letter-spacing: 1px;
		font-style: italic;
		color: rgb(96, 33, 128);
	}
	label {
		color: white;
	}
	button {
		margin-top: 2rem;
		padding: 0.5rem 3rem;
		background-color: #fff;
		color: darkorchid;
		font-weight: bold;
		border: none;
		border-radius: 1rem;
		font-size: 1.2rem;
	}
	button:hover {
		border: 2px solid darkorchid;
		cursor: pointer;
	}
</style>
