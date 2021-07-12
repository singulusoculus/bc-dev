<script context="module">
	import { getFileContents } from '$lib/getMarkdownContents'

	export async function load( { page, fetch }) {
		const fileNames = ['bi', 'webdev', 'wp', 'learner']
		const md = await getFileContents(fileNames, fetch, page.host)

		return {
			props: {
				md
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

	export let md

	const titles = [
		{
			title: 'Web Developer',
			desc: md.webdev,
			delay: 200,
			years: '2015-Present',
			type: 'webdev'
		},
		{
			title: 'BI Analyst/SQL Developer',
			desc: md.bi,
			delay: 400,
			years: '2011-Present',
			type: 'ms'
		},
		{
			title: 'WordPress Expert',
			desc: md.wp,
			delay: 600,
			years: '2005-Present',
			type: 'cms'
		},
		{
			title: 'Avid Learner',
			desc: md.learner,
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