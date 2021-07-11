<script context="module">
	import { getMarkdownContents } from '$lib/getMarkdownContents'

	export const load = async () => {
		const biMd = await getMarkdownContents('bi')
		const wdMd = await getMarkdownContents('webdev')
		const wpMd = await getMarkdownContents('wp')
		const learnerMd = await getMarkdownContents('learner')
		
		return {
			props: {
				biMd,
				wdMd,
				wpMd,
				learnerMd
			}
		}
	}
</script>

<script>
	import Container from '$lib/Container.svelte'
	import PageHeading from '$lib/PageHeading.svelte'
	import Titles from '$lib/Titles.svelte'
	import TitleDetails from '$lib/TitleDetails.svelte'
	import PageFooter from '$lib/PageFooter.svelte'

	export let biMd
	export let wdMd
	export let wpMd
	export let learnerMd

	const titles = [
		{
			title: 'Web Developer',
			desc: wdMd,
			delay: 200,
			years: '2015-Present',
			type: 'webdev'
		},
		{
			title: 'BI Analyst/SQL Developer',
			desc: biMd,
			delay: 400,
			years: '2011-Present',
			type: 'ms'
		},
		{
			title: 'WordPress Expert',
			desc: wpMd,
			delay: 600,
			years: '2005-Present',
			type: 'cms'
		},
		{
			title: 'Avid Learner',
			desc: learnerMd,
			delay: 800,
			years: 'Always',
			type: 'none'
		}
	]

	let activeTitle = 'Web Developer'

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
	<title>Brian Casey | Web Developer</title>
</svelte:head>

<Container>
		<PageHeading heading={'HI, I\'M BRIAN'} />

		<div class="content">
			<Titles titles={titles} activeTitle={activeTitle} on:clicked="{(event) => activeTitle = event.detail}" />
			<TitleDetails titles={titles} activeTitle={activeTitle} />
		</div>

		<PageFooter />
</Container>