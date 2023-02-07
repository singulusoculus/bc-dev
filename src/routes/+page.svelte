<script>
	import Container from '$lib/Container.svelte';
	import PageHeading from '$lib/PageHeading.svelte';
	import Titles from '$lib/Titles.svelte';
	import TitleDetails from '$lib/TitleDetails.svelte';
	import PageFooter from '$lib/PageFooter.svelte';

	import BusinessIntelligence from '$lib/content/bi.md';
	import WebDev from '$lib/content/webdev.md';
	import WordPress from '$lib/content/wp.md';
	import Learner from '$lib/content/learner.md';

	const titles = [
		{
			title: 'Web Developer',
			desc: WebDev,
			delay: 200,
			years: '2015-Present',
			type: 'webdev'
		},
		{
			title: 'BI Analyst/SQL Developer',
			desc: BusinessIntelligence,
			delay: 400,
			years: '2011-Present',
			type: 'ms'
		},
		// {
		// 	title: 'WordPress Expert',
		// 	desc: WordPress,
		// 	delay: 600,
		// 	years: '2005-Present',
		// 	type: 'cms'
		// },
		{
			title: 'Avid Learner',
			desc: Learner,
			delay: 800,
			years: 'Always',
			type: 'none'
		}
	];

	let activeTitle = 'Web Developer';
</script>

<svelte:head>
	<title>Brian Casey | Web Developer</title>
</svelte:head>

<Container>
	<PageHeading heading={"HI, I'M BRIAN"} />

	<div class="content">
		<Titles {titles} {activeTitle} on:clicked={(event) => (activeTitle = event.detail)} />
		<TitleDetails {titles} {activeTitle} />
	</div>

	<PageFooter />
</Container>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		margin-bottom: auto;
	}
</style>
