<script>
	// @ts-nocheck

	import { navigating } from '$app/stores';
</script>

<nav>
	<ul class="navigate">
		<li><a href="/"><h2>Home</h2></a></li>
		<li><a href="/welcome"><h2>Welcome</h2></a></li>
		<li><a href="/timezone"><h2>Timezone</h2></a></li>
		<li><a href="/parent"><h2>Parent</h2></a></li>
		<li><a href="/both"><h2>Both</h2></a></li>
		<li><a href="/universal"><h2>Universal</h2></a></li>
		<li><a href="layouts"><h2>Layouts</h2></a></li>
		<li><a href="groups"><h2>Groups</h2></a></li>
		<li><a href="/match"><h2>Match</h2></a></li>
		<li><a href="/rest"><h2>Rest</h2></a></li>
		<li><a href="/langs"><h2>Langs</h2></a></li>
		<li><a href="/preload"><h2>Preload</h2></a></li>
		<li><a href="/other"><h2>Other</h2></a></li>
		<li><a href="/about"><h2>About</h2></a></li>
		<li><a href="/blogs"><h2>Blogs</h2></a></li>
		<li><a href="/cookies"><h2>Cookies</h2></a></li>
		<li><a href="/todo"><h2>Todo</h2></a></li>
		<li><a href="/login"><h2>Login</h2></a></li>
		<li><a href="/dice"><h2>Dice</h2></a></li>
		<li><a href="/notes"><h2>Notes</h2></a></li>
		<li><a href="/stores"><h2>Stores</h2></a></li>
		<li><a href="/error"><h2>Errors</h2></a></li>
		<li><a href="/redirect"><h2>Redirect</h2></a></li>
		<li><a href="/hooks"><h2>Hooks</h2></a></li>
		<li><a href="/alfa"><h2>Alfa</h2></a></li>
		<li><a href="/beta"><h2>Beta</h2></a></li>
		<li><a href="/ssr"><h2>SSR</h2></a></li>
		<li>
			{#if $navigating}
				navigate to {$navigating.to.url.pathname}
			{/if}
		</li>
	</ul>
</nav>
<slot></slot>

<style>
	:global(body) {
		margin: 0;
	}
	:global(.navigate) {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		position: absolute;
		left: 0;
		top: 0;
		height: fit-content;
		width: 11vw;
		margin-left: 1rem;
		background-color: aquamarine;
		border-radius: 10px;
		padding: 1rem 0.7rem;
	}
	:global(.block) {
		display: flex;
		justify-content: space-evenly;
		width: 90vw;
		margin: 0 auto;
	}
	:global(.navigate a) {
		text-decoration: none;
	}
	:global(li) {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	ul {
		display: flex;
		justify-content: flex-start;
		gap: calc(1rem + 2vmin);
		color: #551a8b;
		font-size: 1rem;
	}
	:global(h1, p) {
		width: 90vw;
		margin: 2rem auto;
		text-align: center;
	}
	:global(h1) {
		color: #551a8b;
	}
	h2 {
		margin: 0;
		padding: 0;
	}
</style>
