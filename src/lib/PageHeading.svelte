<script>
import { fly, fade } from 'svelte/transition'
import { firstLoad } from '$lib/stores.js'

export let heading

let isFirstLoad
let duration

const unsubcribe = firstLoad.subscribe(value => {
	isFirstLoad = value
})

$: isFirstLoad ? duration = 500 : duration = 0

</script>

<style>	
	.wrapper {
		filter: drop-shadow(0px 3px 5px rgba(0,0,0,0.4));
		width: 100%;
	}

	header {
	position: relative;
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	background-image: linear-gradient(
		to right bottom,
		rgba(153,153,153, 1),
		rgba(153,153,153, 0.7));
	background-size: cover;
	background-position: top;
	clip-path: polygon(0 0, 100% 0%, 100% 40%, 35% 100%, 0% 55%);
	width: 100%;
	}

	.me {
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	font-size: 3rem;
	line-height: 2;
	text-transform: uppercase;
	margin-bottom: 2.5rem;
	color: white;
	}	

	.resume {
		position: absolute;
		top: 15px;
		right: 55px;
	}

	.resume-details {
		display: flex;
		align-items: center;
		text-decoration: none;
		cursor: pointer;
	 color: white;
	}

	@media only screen and (max-width: 960px) {
		.resume {
			right: 10px;
		}
	}

	@media only screen and (max-width: 550px) {
		.resume {
			display: none;
		}
	}


</style>

<span class="wrapper">
	<header in:fade="{{duration: duration}}">
		<h1 class="me" out:fade="{{duration: 300}}">
			{#each heading as char, i}
				<span
					in:fade="{{delay: 300 + i * 100, duration: 300}}"
				>{char}</span>
			{/each}
		</h1>
		<div class="resume" in:fade="{{duration: duration}}">
		<a href="https://www.notion.so/Brian-J-Casey-22e9e5e1522e48a0b09d4c9efa588c40" class="resume-details" target="_blank">
			<i class="material-icons md-12 md-light">assignment_ind</i>
			<span>Resume</span>
		</a>
	</div>
	</header>
</span>