<script>
	import Container from '$lib/Container.svelte'
	import PageHeading from '$lib/PageHeading.svelte'
	import PageFooter from '$lib/PageFooter.svelte'
	import Projects from '$lib/Projects.svelte'
	import ProjectDetails from '$lib/ProjectDetails.svelte'

	import RankingEngine from '$lib/content/rankingengine.md'
	import TopNine from '$lib/content/topnine.md'
	import PubMeeple from '$lib/content/pubmeeple.md'
	import BrianCasey from '$lib/content/briancasey.md'

	const projects = [
		{
			project: 'Ranking Engine',
			content: RankingEngine,
			delay: 200,
			header: 'Rank your board games',
			link: 'https://rankingengine.pubmeeple.com',
			niceLink: 'rankingengine.pubmeeple.com',
			builtWith: ['JavaScript', 'PHP', 'WordPress', 'MaterializeCSS', 'mySQL'],
			imageSrc: 'RankingEngine.png',
			imageDesc: 'Board Game Ranking Engine'
		},
		{
			project: 'Top Nine Generator',
			content: TopNine,
			delay: 400,
			header: 'Create a top nine image grid',
			link: 'https://topnine.pubmeeple.com',
			niceLink: 'topnine.pubmeeple.com',
			builtWith: ['Svelte.js', 'JavaScript', 'CSS'],
			imageSrc: 'TopNine.png',
			imageDesc: 'Top Nine Generator'
		},
		{
			project: 'Pub Meeple.com',
			content: PubMeeple,
			delay: 600,
			header: 'Home of Pub Meeple on the web',
			link: 'https://www.pubmeeple.com',
			niceLink: 'pubmeeple.com',
			builtWith: ['WordPress'],
			imageSrc: 'PubMeeple.png',
			imageDesc: 'Pub Meeple'
		},
		{
			project: 'Brian Casey.dev',
			content: BrianCasey,
			delay: 800,
			header: 'You are here',
			link: 'https://www.briancasey.dev',
			niceLink: 'briancasey.dev',
			builtWith: ['SvelteKit', 'Svelte.js', 'JavaScript', 'CSS'],
			imageSrc: 'BrianCaseydev.png',
			imageDesc: 'BrianCasey.dev'
		}
	]

	let activeProject = 'Ranking Engine'
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		margin-bottom: auto;
	}
</style>

<svelte:head>
	<title>Brian Casey | Web Developer | Projects</title>
</svelte:head>


<Container>
	<PageHeading heading={'Projects'} />

	<div class="content">
		<Projects {projects} {activeProject} on:clicked="{(event) => activeProject = event.detail}" />
		<ProjectDetails {projects} {activeProject} />
	</div>

	<PageFooter />
</Container>

