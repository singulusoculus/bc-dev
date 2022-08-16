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
	import ApPaymentReview from '$lib/content/apreview.md'


	const projects = [
		{
			project: 'Pub Meeple.com',
			content: PubMeeple,
			delay: 200,
			header: 'Home of Pub Meeple',
			link: 'https://www.pubmeeple.com',
			niceLink: 'pubmeeple.com',
			builtWith: ['SvelteKit', 'Svelte.js', 'JavaScript', 'SCSS', 'PHP', "mySQL"],
			imageSrc: 'new-pubmeeple.png',
			imageDesc: 'Pub Meeple',
			github: ''
		},
		{
			project: 'Ranking Engine',
			content: RankingEngine,
			delay: 400,
			header: 'Rank your board games',
			link: 'https://pubmeeple.com/ranking-engine',
			niceLink: 'rankingengine.pubmeeple.com',
			builtWith: ['SvelteKit', 'Svelte.js', 'JavaScript', 'SCSS', 'PHP', "mySQL"],
			imageSrc: 'ranking-engine-3.png',
			imageDesc: 'Board Game Ranking Engine',
			github: ''
		},
		{
			project: 'Top Nine Generator',
			content: TopNine,
			delay: 600,
			header: 'Create a top nine image',
			link: 'https://pubmeeple.com/top-nine',
			niceLink: 'topnine.pubmeeple.com',
			builtWith: ['SvelteKit', 'Svelte.js', 'JavaScript', 'SCSS'],
			imageSrc: 'top-nine-2.1.png',
			imageDesc: 'Top Nine Generator',
			github: ''
		},
		{
			project: 'AP Payment Review',
			content: ApPaymentReview,
			delay: 800,
			header: 'Review and Approve AP Invoices',
			link: '',
			niceLink: '',
			builtWith: ['Svelte.js', 'SQL Server', 'Express.js', 'Microsoft IIS'],
			imageSrc: 'APPaymentReview.png',
			imageDesc: 'AP Payment Review',
			github: 'https://github.com/singulusoculus/ap-payment-review'
		},
		{
			project: 'Brian Casey.dev',
			content: BrianCasey,
			delay: 1000,
			header: 'You are here',
			link: 'https://www.briancasey.dev',
			niceLink: 'briancasey.dev',
			builtWith: ['SvelteKit', 'Svelte.js', 'JavaScript', 'CSS'],
			imageSrc: 'BrianCaseydev.png',
			imageDesc: 'BrianCasey.dev',
			github: 'https://github.com/singulusoculus/bc-dev'
		}
	]

	let activeProject = 'Pub Meeple.com'
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

