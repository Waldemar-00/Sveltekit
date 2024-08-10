<script>
	// @ts-nocheck

	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';

	//! export let data;
	export let form;
	// $: console.log(form, 'FORM');
	function toggleModal(command) {
		if (command === 'show') document.querySelector('dialog')?.showModal();
		if (command === 'close') document.querySelector('dialog')?.close();
	}

	function show(bool) {
		pushState('', {
			showModal: bool
		});
	}
	function catchKeydown(e) {
		if (e.key === 'Enter') {
			document.querySelector('#submit').click();
		}
	}
	// $: if (form?.missing) {
	// 	console.log('MISSING');

	// 	alert(`Check your email - ${form?.email}.\nIf it is wrong enter the email again!`);
	// }
</script>

<h1>Modal pushState replaceState</h1>
<h2>
	Both from '$app/navigation' and Modal from './Modal.svelte' <br />
	<!-- {#if data.email}
		Your email is {data.email}
	{/if} -->

	<!-- {#if form?.success}
		Your email is {form?.success}
	{/if} -->

	{#if form?.success}
		Is it your email - {form?.email}.
	{/if}
	{#if form?.missing}
		'Check your email - {form?.email}.<br />If it is wrong enter the email again!'
	{/if}
</h2>
<button
	class="modal"
	on:click={async () => {
		await show(true);
		toggleModal('show');
	}}>Subscribe on Modal</button
>

{#if $page.state.showModal}
	<dialog>
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<form method="POST" on:keydown|preventDefault={catchKeydown}>
			<button
				class="close"
				on:click={async () => {
					await show(false);
					toggleModal('close');
				}}>close</button
			>
			<label for="email">email</label>
			<!-- svelte-ignore a11y-autofocus -->
			<input type="email" name="email" id="email" autofocus value={$page.form?.email || ''} />
			<button type="submit" id="submit">submit</button>
		</form>
	</dialog>
{/if}

<style>
	dialog {
		display: block;
		border: none;
		border-radius: 1rem;
		margin: 30vh auto;
	}
	dialog::backdrop {
		background-color: salmon;
	}
	form {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	label {
		vertical-align: bottom;
		color: chocolate;
	}
	input {
		width: 20vw;
		border-color: chocolate;
		border-radius: 1rem;
		outline-color: chocolate;
		color: chocolate;
		font-size: 1.2rem;
		letter-spacing: 2px;
		padding: 0.5rem 1rem;
	}
	button {
		display: block;
		border: none;
		border-radius: 0.5rem;
		background-color: chocolate;
		color: #fff;
		font-size: 1rem;
		padding: 0.5rem 1rem;
	}
	.modal {
		background-color: orangered;
	}
	h2 {
		width: 70vw;
		margin: 2rem 15vw;
		color: chocolate;
		text-align: center;
		line-height: 3rem;
	}
	button {
		display: block;
		width: 30vw;
		border: none;
		border-radius: 1rem;
		background-color: chocolate;
		color: #fff;
		font-size: 1.2em;
		padding: 0.3rem;
		margin: 2rem auto;
	}
</style>
