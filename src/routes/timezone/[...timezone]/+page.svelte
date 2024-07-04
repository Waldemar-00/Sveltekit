<script>
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	export let data;
	onMount(() => {
		const interval = setInterval(() => invalidate('/timezone/api/now'), 1000);
		return () => {
			clearInterval(interval);
		};
	});
	// invalidate('/timezone/api/now');
</script>

<h1>
	<!-- {data.timezone || 'Timezone'} -->
	{new Intl.DateTimeFormat([], {
		timeStyle: 'full',
		timeZone: data.timezone
	}).format(new Date(data.now))}
</h1>

<style>
	h1 {
		margin-left: 15vw;
		text-align: left;
	}
</style>
