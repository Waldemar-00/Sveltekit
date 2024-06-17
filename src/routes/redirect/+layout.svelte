<slot></slot>
<nav>
	<ul>
		<li><a href="/redirect/fake">Fake</a></li>
		<li><a href="/redirect/truth">Truth</a></li>
	</ul>
</nav>

<style>
	nav {
		width: 80vmin;
		margin: 3rem auto;
	}
	ul {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
		width: 60vmin;
		font-size: 1.5rem;
		margin: 0 auto;
	}
	a {
		text-decoration: none;
	}
</style>
