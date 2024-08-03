<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	// console.log($page, '$PAGE');
</script>

<div style="--color: #{$page?.params?.color}">
	<span>#{$page?.params?.color}</span>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 80vw;
		height: 80vh;
		margin-left: 15vw;
		border-radius: 0.5rem;
		margin-left: 15vw;
		font-size: 5rem;
		text-align: center;
		background-color: var(--color);
		color: #fff;
	}
</style>
