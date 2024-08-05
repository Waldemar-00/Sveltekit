<script>
	// @ts-nocheck
	import { env } from '$env/dynamic/public';
	export let data;
</script>

<h1 style="--dynamic_color: {env.PUBLIC_DYNAMIC_COLOR}">{data.c}</h1>
<h2>{data.a}</h2>

<style>
	h1 {
		color: var(--dynamic_color);
	}
	h2 {
		text-align: center;
	}
</style>
