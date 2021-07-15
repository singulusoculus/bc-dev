<script>
	import Nav from '$lib/Nav.svelte';
	import Icons from '$lib/Icons.svelte';
	import { firstLoad } from '$lib/stores.js';
	import '$lib/global.css';

	setTimeout(() => {
		firstLoad.set(false)
	}, 2000);


</script>

<style>
	.page-wrapper {
		display: flex;
	}

	main {
		flex: 1 1 auto;
		position: relative;
		box-sizing: border-box;
	}

	@media only screen and (max-width: 960px) {
		.page-wrapper {
			flex-direction: column;
		}
	}
</style>

<svelte:head>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
</svelte:head>

<div class="page-wrapper">
	<Nav />

	<main>
		<slot></slot>
	</main>


	<Icons />
</div>