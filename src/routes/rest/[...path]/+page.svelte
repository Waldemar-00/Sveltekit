<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	let words = ['how', 'deep', 'does', 'the', 'rabbit', 'hole', 'go'];
	$: depth = $page.params.path.split('/').filter(Boolean).length;
	$: next = depth === words.length ? '/rest' : `/rest/${words.slice(0, depth + 1).join('/')}`;
</script>

<section>
	<!-- {@debug depth} -->
	{#each words.slice(0, depth) as word}
		<h3>{word}</h3>
	{/each}
	<!-- {@debug next} -->
	<h1>
		<a href={next}>{words[depth] ?? '?'}</a>
	</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
