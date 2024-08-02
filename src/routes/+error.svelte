<script>
	// @ts-nocheck

	import { page } from '$app/stores';
</script>

<h1>Outer error layout!</h1>
<h2>{$page.status}</h2>
<h2>{$page.error.message}</h2>
{#if $page.status === 404}
	<h2>{$page.url.pathname} it is invalid path</h2>
{/if}

<style>
	h2 {
		margin: 0 auto;
		width: 60vmin;
		text-align: center;
		color: orangered;
	}
</style>
