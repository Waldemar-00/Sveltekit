<script>
	// @ts-nocheck

	import { page } from '$app/stores';
</script>

<nav class:has-color={!!$page.data.color} style:background={$page.data.color}>
	<ul>
		<li><a href="/universal">Universal</a></li>
		<li><a href="/universal/red">Red</a></li>
		<li><a href="/universal/green">Green</a></li>
		<li><a href="/universal/blue">Blue</a></li>
		<li>
			{#if $page.data.component}
				<svelte:component this={$page.data.component} data-component />
			{/if}
		</li>
	</ul>
</nav>

<slot />

<style>
	nav {
		display: inline-block;
		width: 86%;
		margin: 1rem 12vw;
		background-color: aquamarine;
		padding: 0.5rem;
		border-radius: 0.5rem;
	}
	nav.has-color,
	nav.has-color a {
		color: white;
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
