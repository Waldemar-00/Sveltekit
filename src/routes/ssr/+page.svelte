<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	$: console.log($page, 'GOTO');
</script>

<h1>
	{window.innerWidth} & {window.innerHeight} - {$page.state.message}
</h1>
<div>
	<label for="text">text</label>
	<!-- svelte-ignore a11y-autofocus -->
	<input type="text" id="text" autofocus />
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		gap: 1rem;
		width: 70vw;
		margin: 2rem 15vw;
	}
</style>
