<nav>
	<ul>
		<li><a href="/error">Error</a></li>
		<li><a href="/error/expected">Expected error</a></li>
		<li><a href="/error/unexpected">Unexpected error</a></li>
	</ul>
</nav>
<slot></slot>

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
		gap: 1rem;
		width: 60vmin;
		font-size: 1.5rem;
		margin: 0 auto;
	}
	a {
		text-decoration: none;
	}
</style>
