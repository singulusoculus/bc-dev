<script>
	import Container from '$lib/Container.svelte';
	import PageHeading from '$lib/PageHeading.svelte';
	import PageFooter from '$lib/PageFooter.svelte';
	import PageContent from '$lib/PageContent.svelte';
	import SkillsGrid from '$lib/SkillsGrid.svelte';

	const gear = {
		heading: 'Gear/Apps I like to use'
	};

	const skills = {
		heading: 'Technical Skills'
	};
</script>

<svelte:head>
	<title>Brian Casey | Web Developer | Uses</title>
</svelte:head>

<Container>
	<PageHeading heading={'Uses'} />

	<PageContent content={gear}>
		<ul>
			<li>Computer: 2021 14" MacBook Pro M1 Pro</li>
			<li>Phone: Apple iPhone 12</li>
			<li>Headphones: Apple Airpods Pro</li>
			<li>Notes: Notion & Obsidian</li>
			<li>IDE: Visual Studio Code</li>
			<li>Keyboard: Keychron K1</li>
			<li>Laptop Stand: Roost 2.0</li>
			<li>Microphone: Audiotechnica ATR2100</li>
		</ul>
	</PageContent>

	<PageContent content={skills}>
		<SkillsGrid />
	</PageContent>

	<PageFooter />
</Container>

<style>
</style>
