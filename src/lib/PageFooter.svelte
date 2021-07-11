<script>
import { fly, fade } from 'svelte/transition'


const year = new Date().getFullYear()

</script>

<style>
	.wrapper {
		filter: drop-shadow(0px -3px 5px rgba(0,0,0,0.3));
		width: 100%;
		margin-top: 10px;
	}

	footer {
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-image: linear-gradient(
			to right bottom,
			rgba(139, 139, 206, 1),
			rgba(139, 139, 206, 0.7));
		background-size: cover;
		background-position: top;
		clip-path: polygon(0 60%, 65% 0, 100% 50%, 100% 100%, 0% 100%);
		width: 100%;
		height: 50px;
	}

	footer p {
		margin-top: 18px;
		color: white;
	}
</style>

<span class="wrapper" out:fade="{{duration: 300}}" in:fade="{{duration: 300, delay: 1000}}">
	<footer>
		<p>Designed and Developed by Brian Casey | © {year}</p>
		<!-- out:fly="{{y: 20, duration: 300}}" in:fade="{{duration: 300}}" -->
		<!-- out:fly="{{y: 20, duration: 300}}" in:fly="{{y: 20, duration: 400, delay: 400}}" -->
	</footer>
</span>