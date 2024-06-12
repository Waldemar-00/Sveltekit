<script>
	// @ts-nocheck

	let number;
	// async function dice() {
	// 	const response = await fetch('/dice');
	// 	number = await response.json();
	// }
</script>

<h1>Dice</h1>

<div>
	<button on:click={async () => (number = await (await fetch('/dice')).json())}
		>Roll yours dices</button
	>
	<main>{number ?? 'Dice number'}</main>
</div>

<style>
	div {
		width: 80vw;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.4rem;
	}
	button {
		padding: 0.7rem 1rem;
		border: none;
		border-radius: 0.5rem;
		background-color: darkgoldenrod;
		color: #fff;
		font-size: 1.2rem;
	}
	main {
		font-size: 3rem;
		color: darkgreen;
	}
</style>
