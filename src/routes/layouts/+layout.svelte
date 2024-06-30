<nav>
	<ul>
		<li><a href="/layouts">Layouts</a></li>
		<li><a href="/layouts/alfa">Alfa</a></li>
		<li><a href="/layouts/alfa/beta">Beta</a></li>
		<li><a href="/layouts/alfa/beta/gamma">Gamma</a></li>
	</ul>
</nav>
<div class="divider" data-name="main">
	<slot></slot>
</div>

<style>
	nav {
		width: 80vmin;
		margin: 1rem 12vw;
		background-color: aquamarine;
		padding: 0.5rem;
		border-radius: 0.5rem;
	}
	ul {
		list-style: none;
		padding: 0;
		display: flex;
		gap: 1.5rem;
		font-size: 1.5rem;
		margin: 0 auto;
		margin-left: 4rem;
	}
	a {
		text-decoration: none;
	}
	:global(.divider) {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 80%;
		margin: 3vw 15vw;
		border: 2px solid grey;
		border-radius: 1rem;
	}
	:global(.divider::before) {
		content: attr(data-name) ' layout';
		position: absolute;
		top: -1.6rem;
		left: 1.5rem;
		width: 9rem;
		padding: 0.5rem;
		background-color: #f9f4f4;
		text-align: center;
	}
</style>
