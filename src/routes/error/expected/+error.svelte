<script>
	// @ts-nocheck

	import { page } from '$app/stores';
</script>

<h1>{$page.status} {$page.error.message}</h1>
<h2>Expected error!</h2>

<style>
	h2 {
		margin: 0 auto;
		width: 60vmin;
		text-align: center;
		color: red;
	}
</style>
