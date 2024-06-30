<script>
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		<li><a href="/universal">Universal</a></li>
		<li><a href="/universal/red">Red</a></li>
		<li><a href="/universal/green">Green</a></li>
		<li><a href="/universal/blue">Blue</a></li>
	</ul>
</nav>
<slot />

<style>
	nav {
		width: 80vmin;
		margin: 1rem 12vw;
		background-color: aquamarine;
		padding: 0.5rem;
		border-radius: 0.5rem;
	}
	ul {
		list-style: none;
		padding: 0;
		display: flex;
		gap: 1.5rem;
		font-size: 1.5rem;
		margin: 0 auto;
		margin-left: 4rem;
	}
	a {
		text-decoration: none;
	}
</style>
