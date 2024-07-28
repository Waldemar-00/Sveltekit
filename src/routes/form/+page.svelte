<script>
	// @ts-nocheck

	import { applyAction, enhance } from '$app/forms';
	import { goto, invalidate, invalidateAll } from '$app/navigation';
	export let data;
	// $: console.log(data, 'DATA');

	let comment = '';
	export const snapshot = {
		capture: () => comment,
		restore: (value) => (comment = value)
	};
</script>

<form
	method="POST"
	use:enhance={({ formElement, formData, action, submitter, cancel }) => {
		// console.log(formElement, 'FORMELEMENT');
		// console.log(action, 'ACTION');
		// console.log(submitter, 'SUBMITTER');
		// console.log(cancel, 'CANCEL');
		// console.log(formData, 'FORMDATA');
		formData.set('comment', `${formData.get('comment')} ENHANCE`);
		return async ({ result, update }) => {
			// result.type = 'error';
			// console.log(result.type, result.status, result.data, result);
			// update();
			// if (result.type === 'success') invalidateAll();
			if (result.type === 'success') update();
			applyAction(result);
			// update();
		};
	}}
>
	<label for="comment">Your text</label>
	<textarea name="comment" id="comment" bind:value={comment} placeholder="write your comment here"
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
