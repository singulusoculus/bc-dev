<script>
	let canRender

	setTimeout(() => {
		canRender = true
	}, 300)
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		position: relative;
		/* height: 100vh; */
		min-height: 100vh;
	}

	@media only screen and (max-width: 960px) {
		.container {
			min-height: calc(100vh - 65px);
		}
	}
</style>

{#if canRender}
	<div class="container" >
		<slot></slot>
	<!-- in:fadeIn out:fadeOut -->
	</div>
{/if}
