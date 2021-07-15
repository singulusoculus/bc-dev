<script>
	import { fly } from 'svelte/transition'
	import { page } from '$app/stores';
	import Icon from '$lib/Icon.svelte'
	import Icons from '$lib/Icons.svelte'

	let mobileNavVisible = false


	const toggleMobileNav = () => {
		mobileNavVisible = !mobileNavVisible
	}
</script>

<style>
	.nav-wrapper {
		flex: 0 0 auto;
		width: 65px;
	}

	nav {
		width: 65px;
		height: 100vh;
		position: fixed;
		top: 0;
		background-color: #181818;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-shadow: 4px 4px 5px 0 rgba(0,0,0,0.30);
		z-index: 10;
	}

	.logo {
		width: 75px;
		margin-top: 10px;
		margin-left: 3px;
		transition: all .3s;
	}

	.logo:hover {
		transform: rotate(45deg);
	}

	.site-nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	.site-nav > a {
		margin-bottom: 1rem;
		position: relative;
	}

	.site-nav > a:after {
		content: '';
		font-size: 9px;
		letter-spacing: 2px;
		display: block;
		width: 100%;
		text-align: center;
		opacity: 0;
		transition: all .3s ease-out;
		color: white;
		position: absolute;
		bottom: 15px;
	}

	/* home */
	.icon-home:before {
		content: "home";
		opacity: 1;
		transition: all .3s ease-out;
	}

	.icon-home:hover:before{
		opacity: 0;
	}

	.a-icon-home:hover:after {
		content: "HOME";
		opacity: 1;
	}

	.a-icon-home:hover > i:before {
		opacity: 0;
	}

	/* about - account_circle */
	.icon-about:before {
		content: "account_circle";
		opacity: 1;
		transition: all .3s ease-out;
	}

	.icon-about:hover:before{
		opacity: 0;
	}

	.a-icon-about:hover:after {
		content: "ABOUT";
		opacity: 1;
	}

	.a-icon-about:hover > i:before {
		opacity: 0;
	}

	/* projects - apps */
	.icon-projects:before {
		content: "apps";
		opacity: 1;
		transition: all .3s ease-out;
	}

	.icon-projects:hover:before{
		opacity: 0;
	}

	.a-icon-projects:hover:after {
		content: "PROJECTS";
		opacity: 1;
	}

	.a-icon-projects:hover > i:before {
		opacity: 0;
	}

	a:first-child+a+a:after{
		left: -8px;
	}

	/* uses - phonelink */
	.icon-uses:before {
		content: "phonelink";
		opacity: 1;
		transition: all .3s ease-out;
	}

	.icon-uses:hover:before{
		opacity: 0;
	}

	.a-icon-uses:hover:after {
		content: "USES";
		opacity: 1;
	}

	.a-icon-uses:hover > i:before {
		opacity: 0;
	}

	/* CONTACT - email */
	/* .icon-contact:before {
		content: "";
		opacity: 1;
		transition: all .3s ease-out;
	}

	.icon-contact:hover:before{
		opacity: 0;
	}

	.a-icon-contact:hover > i:before {
		opacity: 0;
	} */
	
	.a-icon-contact:hover:after {
		content: "CONTACT";
		opacity: 1;
	}

	.a-icon-contact > :global(.icon) {
		opacity: 1;
		transition: all .3s ease-out;
	}

	.a-icon-contact:hover > :global(.icon) {
		opacity: 0;
	}

	a:first-child+a+a+a+a:after{
		left: -7px;
	 } 
	

	.menu-btn {
        color: #fff;
        position: absolute;
        left: 2rem;
		display: none;
		top: .8rem;
	}

	.mobile-site-nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		position: absolute;
		top: 65px;
		background-color: #181818;
		width: 100%;
		justify-content: center;
		z-index: 10;
	}

	.mobile-site-nav > a {
		margin: 1rem;
		position: relative;
	}

	.mobile-site-nav > a:after {
		content: '';
		font-size: 9px;
		letter-spacing: 2px;
		display: block;
		width: 100%;
		text-align: center;
		opacity: 0;
		transition: all .3s ease-out;
		color: white;
		position: absolute;
		bottom: 15px;
	}

	a[aria-current]:before {
		content: '';
		width: 2px;
		height: 36px;
		background-color: #8B8BCE;
		position: absolute;
		left: -13px;
		border-radius: 3px;
	}

	a:not([aria-current]):not(.logo-wrapper):not(.resume):before {
		content: '';
		width: 2px;
		height: 36px;
		background-color: white;
		position: absolute;
		left: -18px;
		border-radius: 3px;
		transition: all .3s ease-out;
		opacity: 0;
	}

	a:not([aria-current]):not(.logo-wrapper):hover:before {
		opacity: 1;
		left: -13px;
	}


	a[aria-current]:after {
		color: #8B8BCE;
	}

	/* [aria-current] > i {
		color: #8B8BCE;
	} */

	a[aria-current] > :global(.icon) {
		color: #8B8BCE;
	}


	@media only screen and (max-width: 960px) {
		.nav-wrapper {
			width: unset;
		}

		nav {
			flex-direction: row;
			width: 100%;
			height: 65px;
			position: relative;
		}

		.site-nav {
			flex-direction: row;
			align-content: center;
		}

		.site-nav > a {
			margin: 1.5rem;
		}

		.logo {
			margin-left: 1rem;
		}

		a[aria-current]:before {
			width: 36px;
			height: 2px;
			left: 0px;
			border-radius: 3px;
			top: 45px;
		}

		a:not([aria-current]):not(.logo-wrapper):not(.resume):before {
			width: 36px;
			height: 2px;
			left: 0px;
			top: 49px;
			border-radius: 3px;
			opacity: 0;
		}

		a:not([aria-current]):not(.logo-wrapper):hover:before {
			top: 45px;
			left: 0px;
		}
	}

	.resume {
		display: none;
	}

	.resume-details {
		display: flex;
		align-items: center;
		text-decoration: none;
		cursor: pointer;
	 	color: white;
	}

	@media only screen and (max-width: 550px) {
		.menu-btn {
			display: inline-block;
			cursor: pointer;
		}
		
		.site-nav {
			display: none;
			position: absolute;
			top: 65px;
			background-color: #181818;
			width: 100%;
			justify-content: center;
			z-index: 10;
			/* left: -550px; */
		}

		nav {
			justify-content: center;
		}

		.logo-wrapper {
			z-index: 50;
		}

		.logo {
			margin-top: 5px;
		}

		.resume {
			display: block;
			position: absolute;
			top: 20px;
			right: 20px;
		}
	}

</style>
<div class="nav-wrapper">
	<nav>
		<a href="." class="logo-wrapper">
			<img src="logo-blueg.png" alt="" class="logo">
		</a>

		<div class="site-nav">
			<a aria-current='{$page.path === '/' ? 'page' : undefined}' href='.' class="a-icon-home a-icon">
				<i  class="material-icons md-36 md-light icon-home"></i>
			</a>
			<a aria-current='{$page.path === "/about" ? "page" : undefined}' href='about' class="a-icon-about a-icon">
				<i class="material-icons md-36 md-light icon-about"></i>
			</a>
			<a aria-current='{$page.path === "/projects" ? "page" : undefined}' href='projects' class="a-icon-projects a-icon">
				<i class="material-icons md-36 md-light icon-projects"></i>
			</a>
			<a aria-current='{$page.path === "/uses" ? "page" : undefined}' href='uses' class="a-icon-uses a-icon">
				<i class="material-icons md-36 md-light icon-uses"></i>
			</a>
			<a aria-current='{$page.path === "/contact" ? "page" : undefined}' href='contact' class="a-icon-contact a-icon">
				<!-- <i class="material-icons md-36 md-light icon-contact"></i> -->
				<!-- <i class="icon-contact"> -->
					<Icon name="mail" size=36 color="#fff"/>
				<!-- </i> -->
			</a>
		</div>

		{#if  mobileNavVisible}
		<div class="mobile-site-nav" transition:fly={{x: -550, duration: 300}}>
			<a aria-current='{$page.path === undefined ? "page" : undefined}' href='.' class="a-icon-home" on:click={toggleMobileNav}>
				<i class="material-icons md-36 md-light icon-home"></i>
			</a>
			<a aria-current='{$page.path === "about" ? "page" : undefined}' href='about' class="a-icon-about" on:click={toggleMobileNav}>
				<i class="material-icons md-36 md-light icon-about"></i>
			</a>
			<a aria-current='{$page.path === "projects" ? "page" : undefined}' href='projects' class="a-icon-projects" on:click={toggleMobileNav}>
				<i class="material-icons md-36 md-light icon-projects"></i>
			</a>
			<a aria-current='{$page.path === "uses" ? "page" : undefined}' href='uses' class="a-icon-uses" on:click={toggleMobileNav}>
				<i class="material-icons md-36 md-light icon-uses"></i>
			</a>
			<a aria-current='{$page.path === "contact" ? "page" : undefined}' href='contact' class="a-icon-contact" on:click={toggleMobileNav}>
				<!-- <i class="material-icons md-36 md-light icon-contact"></i> -->
				<Icon name="mail" size=36 color="#fff"/>
			</a>
		</div>
		{/if}

		<div class="resume">
			<a href="https://www.notion.so/Brian-J-Casey-22e9e5e1522e48a0b09d4c9efa588c40" class="resume-details" target="_blank">
				<i class="material-icons md-12 md-light">assignment_ind</i>
				<span>Resume</span>
			</a>
		</div>

		<div class="social-icons">
		</div>

		<div class="menu-btn" on:click={toggleMobileNav}>
			<i class="material-icons md-36 md-light">menu</i>
		</div>
	</nav>
</div>
