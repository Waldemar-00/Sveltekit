<nav>
	<ul class="header">
		<li><a href="/"><h2>Home</h2></a></li>
		<li><a href="/other"><h2>Other</h2></a></li>
		<li><a href="/about"><h2>About</h2></a></li>
		<li><a href="/blogs"><h2>Blogs</h2></a></li>
	</ul>
</nav>
<slot></slot>

<style>
	:global(body) {
		margin: 0;
	}
	:global(.header) {
		display: flex;
		gap: 3rem;
		align-items: center;
		height: calc(1rem + 4vmin);
		width: 90vw;
		margin: 0 auto;
		padding: 1rem 2rem;
		background-color: aquamarine;
		border-radius: 0 0px 50px 50px;
	}
	:global(.block) {
		display: flex;
		justify-content: space-evenly;
		width: 90vw;
		margin: 0 auto;
	}
	:global(.header a) {
		text-decoration: none;
	}
	:global(li) {
		list-style: none;
	}
	ul {
		display: flex;
		justify-content: flex-start;
		gap: calc(1rem + 2vmin);
	}
	:global(h1, p) {
		width: 90vw;
		margin: 2rem auto;
		text-align: center;
	}
</style>
