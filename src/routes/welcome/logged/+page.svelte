<script>
	// @ts-nocheck

	import { PUBLIC_BTN_BGC } from '$env/static/public';
	export let data;
</script>

<h1>You are logged in, Welcome!</h1>
<h2>{data?.information}</h2>
<form method="POST">
	<button style="--bgc:{PUBLIC_BTN_BGC}">Logout</button>
</form>

<style>
	form {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 60vw;
		height: 100vh;
		margin: auto 15vw;
	}
	button {
		border: none;
		border-radius: 0.5rem;
		background-color: var(--bgc);
		color: white;
		padding: 0.5rem 1rem;
		font-size: 2rem;
		margin-left: 2rem;
	}
	h2 {
		text-align: center;
	}
</style>
