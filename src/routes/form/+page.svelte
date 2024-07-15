<script>
	export let data;

	let comment = '';
	export const snapshot = {
		capture: () => comment,
		restore: (value) => (comment = value)
	};
</script>

<form method="POST">
	<label for="comment">Your text</label>
	<textarea name="comment" id="comment" bind:value={comment} placeholder="write your text here"
	></textarea>
	<button>Submit</button>
</form>
{#if data.comment}
	<h1>{data.comment}</h1>
{/if}

<style>
	form {
		display: flex;
		align-items: center;
		gap: 1em;
		width: 70vw;
		margin: 3rem 15vw;
	}
</style>
