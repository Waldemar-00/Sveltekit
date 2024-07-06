<script>
	import { PUBLIC_BGC } from '$env/static/public';
</script>

<nav class="timezone" style="--background: {PUBLIC_BGC}">
	<a href="/timezone/America/New_York">New York</a>
	<a href="/timezone/America/Sao_Paulo">São Paulo</a>
	<a href="/timezone/America/Los_Angeles">Los Angeles</a>
	<a href="/timezone/Europe/London">London</a>
	<a href="/timezone/Europe/Paris">Paris</a>
	<a href="/timezone/Africa/Cairo">Cairo</a>
	<a href="/timezone/Asia/Shanghai">Shanghai</a>
	<a href="/timezone/Asia/Tokyo">Tokyo</a>
	<a href="/timezone/Australia/Sydney">Sydney</a>
</nav>
<slot></slot>

<style>
	nav {
		display: flex;
		gap: 2rem;
		width: 80vw;
		margin: 1rem 15vw;
		background-color: var(--background);
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
	}
	.timezone a,
	.timezone a:hover,
	.timezone a:active,
	.timezone a:visited {
		text-decoration: none !important;
	}
</style>
