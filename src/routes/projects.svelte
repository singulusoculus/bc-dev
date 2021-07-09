<script>
	import Container from '$lib/Container.svelte'
	import PageHeading from '$lib/PageHeading.svelte'
	import PageFooter from '$lib/PageFooter.svelte'
	import Projects from '$lib/Projects.svelte'
	import ProjectDetails from '$lib/ProjectDetails.svelte'

	const projects = [
		{
			project: 'Ranking Engine',
			content: '<p>This project was my path into modern web development. I love to play board games and like any good hobby should do it propelled me to build stuff to make it better. Most of my projects fall from that tree.</p><p>I ran across a merge sort algorithm years ago that was used to rank a list of video games. This was a fun experience for me and I wanted to translate that for the board game community. This stayed as an idea in the back of my head for a while. Fast forward a few years and I got excited enough about this project that I just started working on it, learning what JavaScript I needed as I went. At some point I decided that it would be good to make a concerted effort to learn JS instead of just tinkering with it which led me to Udemy.</p><p>If you want to see my progress as a web developer all you have to do is look back through the versions of the Ranking Engine. It started extremely basic but has added lots of functionality over the years as I learned more and more JS. I piggy-backed off of Wordpress for user accounts and created my own custom database tables to handle all the ranking data coming through. I wrote custom queries that calculate trending and all time rankings. I integrated with the Board Game Geek API so that users could pull in their collections to rank. I could go on.</p><p>What you will find today is a polished and feature rich web application that is pretty popular in the board game community and even in others. People like to rank their stuff. Who knew?</p>',
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
			content: '<p>This project started as a piece of the Ranking Engine. Finish ranking your list of games and the app would, with the click of a button, automatically generate a grid image with your top nine games to share around.</p><p>I decided this should be broken out into its own app so that users wouldn\'t have to go through the whole ranking process if they already knew what their top games were. Originally, I just took the pieces from the Ranking Engine that I needed and cobbled them together for this purpose.</p><p>One of the original big challenges was writing the code that took the original images from Board Game Geek and resized and cropped them to the right size for a grid like this. The next challenge was to get them all to lay out with a frame separating each one and a logo on the bottom. I learned a lot about promises and async/await doing this.</p><p>After I took some time to learn Svelte I thought that this project would be perfect to translate from vanilla JS to a framework. If you go to the link below you will find the Svelte version of the Top Nine app.</p><p>One of the things I really wanted to add to this version was a visual grid that you could see being built as you added games to your list. I also wanted you to be able to drag and drop to reorder items. It was a lot of fun figuring all this out.</p>',
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
			content: '<p>I have been using WordPress since 2005 to build blogs and websites so when I joined up with the Pub Meeple board game group I offered to make a website for the group. I used the <a href="https://www.elegantthemes.com/gallery/extra/" target=_blank>Extra theme </a> from Elegant Themes to get it done. When we first started the site it was mainly a blog that we updated frequently. During my work on the Ranking Engine and the start of our podcast the blog took a back seat so the home page took on more of a landing page layout.</p><p>I am very happy with the design and layout of this site. It manages to get lots of content from over the years to the surface while not being cluttered.</p>',
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
			content: '<p><p>After learning Svelte I though I\'d learn Sapper by creating something long over due: a personal development website for myself. And you are looking at the results right now. Sapper was a great tool for this project as it gave me page routing and server side rendering.</p><p>I had a lot of fun designing and developing this site and I\'ve got plans to add a blog and some other bits as time goes on.</p><p>If you like what you see here and want me to work on one of your projects, head over to the <a href="./contact">Contact</a> page and shoot me an email.</p>',
			delay: 800,
			header: 'You are here',
			link: 'https://www.briancasey.dev',
			niceLink: 'briancasey.dev',
			builtWith: ['Sapper', 'Svelte.js', 'JavaScript', 'CSS'],
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

