<script>
	import { PUBLIC_BTN_BGC } from '$env/static/public';
</script>

<h1>You are logged in, Welcome!</h1>
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
</style>
