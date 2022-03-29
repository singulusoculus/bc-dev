<script>
	import Container from '$lib/Container.svelte'
	import PageHeading from '$lib/PageHeading.svelte'
	import PageFooter from '$lib/PageFooter.svelte'
	import PageContent from '$lib/PageContent.svelte'

	import AboutText from '$lib/content/about.md'

	const content = {
		heading: 'A little bit about me',
	}

</script>

<style>
	img {
		border-radius: 3px;
		align-self: center;
		flex-shrink: 0;
		margin: 0 auto;
	}

	.container {
		display: flex;
	}

	.content {
		margin-right: 15px;
		font-size: 1.3rem;
	}

	@media only screen and (max-width: 750px) {

        .content {
            margin-right: unset;
        }

		.container {
			flex-wrap: wrap;
		}
	}
</style>

<svelte:head>
	<title>Brian Casey | Web Developer | About</title>
</svelte:head>

<Container>
	<PageHeading heading={'About'} />

	<PageContent {content} >
		<div class="container">
			<div class="content">
				<AboutText />
			</div>
			<img src="headshot.jpg" alt="Me">
		</div>
	</PageContent>

	<PageFooter />
</Container>

