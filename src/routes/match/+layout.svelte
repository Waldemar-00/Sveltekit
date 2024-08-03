<script>
	const colors = ['ff3e00', '676779', '42b4ff', 'e2cd2d', 'orange'];
</script>

<nav>
	<ul>
		{#each colors as color, index (index)}
			<li><a href="/match/{color}" style="--color: #{color}">#{color}</a></li>
		{/each}
	</ul>
</nav>
<slot></slot>

<style>
	nav {
		width: 80vw;
		margin-left: 15vw;
	}
	ul {
		display: flex;
		gap: 2rem;
		background-color: bisque;
		padding: 1rem;
		border-radius: 0.5rem;
	}
	a {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	a::before {
		content: '';
		display: inline-block;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 0.2rem;
		background-color: var(--color);
	}
</style>
