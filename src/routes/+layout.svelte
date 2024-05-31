<nav class="header">
	<a href="/"><h2>Home</h2></a>
	<a href="/other"><h2>Other</h2></a>
	<a href="/about"><h2>About</h2></a>
</nav>
<slot></slot>

<style>
	:global(.header) {
		display: flex;
		gap: 3rem;
		align-items: center;
		height: 20vmin;
		width: 90vw;
		margin: 0 auto;
		padding: 1rem 2rem;
		background-color: aquamarine;
		border-radius: 50px;
	}
	:global(.block) {
		display: flex;
		justify-content: space-evenly;
		width: 90vw;
		margin: 0 auto;
	}
</style>
