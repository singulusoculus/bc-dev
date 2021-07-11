<script>
	import Container from '$lib/Container.svelte'
	import PageHeading from '$lib/PageHeading.svelte'
	import PageFooter from '$lib/PageFooter.svelte'
	import PageContent from '$lib/PageContent.svelte'

	const content = {
		heading: 'A little bit about me',
	}

</script>

<style>
	img {
		border-radius: 3px;
		align-self: center;
		flex-shrink: 0;
	}

	.container {
		display: flex;
	}

	.content {
		margin-right: 15px;
	}

	p {
		font-size: 1.1rem;
	}

	@media only screen and (max-width: 750px) {

        .content {
            margin-right: unset;
        }

		.container {
			flex-wrap: wrap;
		}

		p {
			font-size: 1rem;
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
				<p>Hi, I'm Brian Casey - husband, father of four, follower of Jesus. It's nice to meet you.</p>
				<p>My main bread and butter is as a Business Intelligence Developer and Data Analyst for a private university but I'm also a web developer and web consultant. I come from a finance and project accounting background (my degree and original professional experience).</p>
				<p>I am a board gamer by hobby. Like any good hobby it made me want to create things for it which is what pushed me even further as a web developer. I love to play games like Carcassonne, Star Wars Rebellion, and Irish Gauge.</p>
				<p>I love to watch good movies with my wife or get down on the floor and wrestle with my four boys. You will also find me reading, enjoying a good cup of coffee, listening to a podcast, drumming, doing weird exercises, writing, and trying to make my house a better home. I'm also short one eye thanks to a childhood cancer. I feel very blessed to be here.</p>
			</div>
			<img src="headshot.jpg" alt="Me">
		</div>
	</PageContent>

	<PageFooter />
</Container>

