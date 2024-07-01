<script>
	export let message;
</script>

<marquee behavior="scroll" scrollamount="9px" scrolldelay="60">
	<h1>{message}</h1>
</marquee>

<style>
	marquee {
		margin-left: 15vw;
		font-family: 'Comic Sans MS';
	}
	h1 {
		color: #e60073;
	}
</style>
