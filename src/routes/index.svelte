<script>
	import { fly, fade } from 'svelte/transition'
	import Container from '$lib/Container.svelte'
	import PageHeading from '$lib/PageHeading.svelte'
	import Titles from '$lib/Titles.svelte'
	import TitleDetails from '$lib/TitleDetails.svelte'
	import PageFooter from '$lib/PageFooter.svelte'
	import SkillsGrid from '$lib/SkillsGrid.svelte'

	const titles = [
		{
			title: 'Data Analyst/SQL Developer',
			desc: '<p>My primary job these last years has been as a Data Analyst and SQL Server developer for a medium size engineering and construction company. I provide analytics and technology solutions to company leaders so they can make the most informed decisions they can based on SharePoint and ERP data in SQL Server using SQL Server Reporting Services, Visual Studio, and Solver BI360. I like to find answers to complex business situation in data and then turn them into solutions.</p><p>This role has grown to include SQL Server administration. I administer security, maintain database backups, manage database servers, and write database triggers and stored procedures. </p><p>I am also responsible for supporting and customizing our ERP system - Microsoft Dynamics SL - and our BI360 Data warehouse solution. This job requires that I interact with users from all parts of the company - from the construction field to engineers to accountants. Fortunately my education was in accounting and I worked on the project side for several years so I can effectively communicate with them all.</p><p>Another part of this job is supporting our large SharePoint environment - not a small task. I take care of security, project site setup, and maintaining databases and backups.</p>',
			delay: 200,
			years: '2011-Present',
			type: 'ms'
		},
		{
			title: 'Web Developer',
			desc: '<p>Being brain-deep in a web development project is the thing that keeps me awake at night - in a good way. I started putting my toe on this path about 20 years ago learning HTML, CSS and some WordPress. I used what I learned to build web sites for myself and my friends, learning new little things as needed. It has been in the last 4 years that I have taken the deep dive into web development. I have since made a study of modern HTML, CSS, and, most importantly, JavaScript. In the beginning, I intentionally avoided JS frameworks to make sure I first understood what goes on under the hood.</p><p>The project that really got me going was the <a href="https://rankingeninge.pubmeeple.com" target="_blank">Board Game Ranking Engine</a>. Strategy board games are another of my hobbies and I wanted a way to easily rank a list of games. I found an example of a merge sort algorithm and off I went. If you want to see my progress as a web developer look no further than the iterations on this project. As it currently sits, it is written in vanilla JavaScript on top of WordPress using the <a href="https://materializecss.com/" target="_blank">Materialize CSS</a> design framework. My experience as a SQL developer and WordPress admin gave me the tools I needed to create the database piece for saving lists and results.</p><p>Since then I have delved into JS frameworks like <a href="https://reactjs.org/" target="_blank">React</a>, <a href="https://vuejs.org/" target="_blank">Vue</a>, and most recently <a href="https://svelte.dev/" target="_blank">Svelte</a>. The last in that list really grabbed me - I loved the new take on a framework not using the virtual DOM but more as a compiler. I have used Svelte to create the <a href="https://topnine.pubmeeple.com" target="_blank">Top Nine Generator</a> app - a way to create top nine images for your board game collection. I then moved on to <a href="https://sapper.svelte.dev/" target="_blank">Sapper</a> to create the web site you are viewing now.</p><p>Web development is like falling down an endless rabbit hole - there is always something new to learn which is good for me since I am an avid learner.<p><p>You can find some examples of my web development work over on the <a href="./projects">Projects</a> page.</p>',
			delay: 400,
			years: '2015-Present',
			type: 'webdev'
		},
		{
			title: 'WordPress Expert',
			desc: '<p>I got started with WordPress in 2005 as a way to start a personal blog. I remember the "5 minute install" was mindblowing at the time. Setting up a full stack web application that fast was impressive. I got sucked into finding themes and customizing them as best I could. I was developed a theme from scratch but I was a great theme tweaker. Good times.</p><p>I have stuck with and watched WordPress grow into what it is today. Along the way I have cobbled together quite the knowledge of the appliction. It\'s amazing what time and persistence will do. I had a little side business for a few years helping people with migration, installation, updates, backups, and other WordPress odds and ends.</p><p>I have had multiple personal websites built on WordPress over the years but the one that you can go and see today is <a href="https://www.pubmeeple.com" target="_blank">PubMeeple.com</a>. I am a board game hobbyist and this site hosts all kinds of board game-related stuff that our group has created over the years. It is created with the Extra theme (by Elegant Themes). It is from here that my web development chops began to grow with the creation of the <a href="https://rankingengine.pubmeeple.com" target="_blank">Board Game Ranking Engine</a>.</p>',
			delay: 600,
			years: '2005-Present',
			type: 'cms'
		},
		{
			title: 'Avid Learner',
			desc: '<p>As a life-long student and information junkie, it is in my nature to find new rabbit holes to dive into to see what I can pull out. Books, good conversations, podcasts, online learning and Google are all my close friends. But I don\'t like just to find new information. No, I like to grasp that information, ponder it, consider it, and find the ways that it intersects and impacts my life and the lives of others. I like to peer into the cracks of reality, see how things really work, and try to find better ways of doing life, work, and relationships. This applies to my whole self: as a husband and father, as a worker, as a friend. </p><p>Being an avid learner also means embracing your faults and mistakes as learning opportunities. We are surrounded by a cloud of learning opportunities each day. And this isn\'t just about optimization for the sake of optimization but for a better lived life, acknowledging that my life is finite and worth being spent on the things I love.</p>',
			delay: 800,
			years: 'Always',
			type: 'none'
		}
	]

	let activeTitle = 'Data Analyst/SQL Developer'

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