<script>
	// @ts-nocheck

	import { page } from '$app/stores';
</script>

<h1>Outer error layout!</h1>
<h2>{$page.status}</h2>
<h2>{$page.error.message}</h2>

<style>
	h2 {
		margin: 0 auto;
		width: 60vmin;
		text-align: center;
		color: orangered;
	}
</style>
