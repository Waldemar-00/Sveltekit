<script>
	import { afterNavigate } from '$app/navigation';
	import { beforeNavigate } from '$app/navigation';
	export let data;
	afterNavigate(() => {
		document.title = `${data.slug}`;
	});
	$: if (data.slug === 'BEFORE') {
		beforeNavigate(({ cancel }) => {
			cancel();
		});
	}
</script>

<slot></slot>
<h2>{data.slug}</h2>
{#if data.slug === 'BEFORE'}
	<input type="text" />
{/if}

<style>
	h2 {
		width: 100vw;
		text-align: center;
	}
	input {
		display: block;
		margin: 2rem 15vw;
		width: 70vw;
		height: 1.5rem;
		text-align: center;
	}
</style>
