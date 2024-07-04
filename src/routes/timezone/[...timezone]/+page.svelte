<script>
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	export let data;
	// $: console.log(data, 'DATA');

	onMount(() => {
		const interval = setInterval(() => invalidate('data:now'), 1000);
		// '/timezone/api/now'
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
