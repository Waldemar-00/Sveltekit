<script>
	// @ts-nocheck

	import { page } from '$app/stores';
</script>

<h1>{$page.status}</h1>
<h2>{$page.error.message}</h2>
<h2>{$page.error.other}</h2>

<style>
	h2 {
		margin: 1rem auto;
		text-align: center;
	}
</style>
