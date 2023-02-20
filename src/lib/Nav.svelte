<script>
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import Icon from '$lib/Icon.svelte';
	import Icons from '$lib/Icons.svelte';

	let mobileNavVisible = false;

	const toggleMobileNav = () => {
		mobileNavVisible = !mobileNavVisible;
	};
</script>

<div class="nav-wrapper">
	<nav>
		<a href="." class="logo-wrapper" aria-label="home">
			<img src="logo-blueg.png" alt="" class="logo" />
		</a>

		<div class="site-nav">
			<a
				aria-label="home"
				aria-current={$page.url.pathname === '/' ? 'page' : undefined}
				href="."
				class="a-icon-home"
			>
				<Icon name="home" size="36" color="#fff" />
			</a>
			<a
				aria-label="about"
				aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
				href="about"
				class="a-icon-about"
			>
				<Icon name="user" size="36" color="#fff" />
			</a>
			<a
				aria-label="projects"
				aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}
				href="projects"
				class="a-icon-projects"
			>
				<Icon name="grid" size="36" color="#fff" />
			</a>
			<a
				aria-label="uses"
				aria-current={$page.url.pathname === '/uses' ? 'page' : undefined}
				href="uses"
				class="a-icon-uses"
			>
				<Icon name="smartphone" size="36" color="#fff" />
			</a>
			<a
				aria-label="contact"
				aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}
				href="contact"
				class="a-icon-contact"
			>
				<Icon name="mail" size="36" color="#fff" />
			</a>
			<a aria-label="github" href="https://github.com/singulusoculus" class="a-icon-github">
				<Icon name="github" size="36" color="#fff" />
			</a>
		</div>

		{#if mobileNavVisible}
			<div class="mobile-site-nav" transition:fly={{ x: -550, duration: 300 }}>
				<a
					aria-label="home"
					aria-current={$page.url.pathname === '/' ? 'page' : undefined}
					href="."
					class="a-icon-home"
					on:click={toggleMobileNav}
				>
					<Icon name="home" size="36" color="#fff" />
				</a>
				<a
					aria-label="about"
					aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
					href="about"
					class="a-icon-about"
					on:click={toggleMobileNav}
				>
					<Icon name="user" size="36" color="#fff" />
				</a>
				<a
					aria-label="projects"
					aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}
					href="projects"
					class="a-icon-projects"
					on:click={toggleMobileNav}
				>
					<Icon name="grid" size="36" color="#fff" />
				</a>
				<a
					aria-label="uses"
					aria-current={$page.url.pathname === '/uses' ? 'page' : undefined}
					href="uses"
					class="a-icon-uses"
					on:click={toggleMobileNav}
				>
					<Icon name="smartphone" size="36" color="#fff" />
				</a>
				<a
					aria-label="contact"
					aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}
					href="contact"
					class="a-icon-contact"
					on:click={toggleMobileNav}
				>
					<Icon name="mail" size="36" color="#fff" />
				</a>
				<a aria-label="github" href="https://github.com/singulusoculus" class="a-icon-github">
					<Icon name="github" size="36" color="#fff" />
				</a>
			</div>
		{/if}

		<div class="resume">
			<a
				href="https://www.notion.so/Brian-J-Casey-22e9e5e1522e48a0b09d4c9efa588c40"
				class="resume-details"
				target="_blank"
			>
				<Icon name="file-text" size="20" color="#fff" />
				<span>Resume </span>
			</a>
		</div>

		<div class="social-icons" />

		<div class="menu-btn" on:click={toggleMobileNav}>
			<i class="material-icons md-36 md-light">menu</i>
		</div>
	</nav>
</div>

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
		box-shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.3);
		z-index: 10;
	}

	.logo {
		width: 75px;
		margin-top: 10px;
		margin-left: 3px;
		transition: all 0.3s;
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
		transition: all 0.3s ease-out;
		color: white;
		position: absolute;
		bottom: 15px;
	}

	/* HOME */
	.a-icon-home:hover:after {
		content: 'HOME';
		opacity: 1;
		top: 11px;
	}

	.a-icon-home > :global(.icon) {
		opacity: 1;
		transition: all 0.3s ease-out;
	}

	.a-icon-home:hover > :global(.icon) {
		opacity: 0;
	}

	/* ABOUT  */

	.a-icon-about:hover:after {
		content: 'ABOUT';
		opacity: 1;
		top: 11px;
	}

	.a-icon-about > :global(.icon) {
		opacity: 1;
		transition: all 0.3s ease-out;
	}

	.a-icon-about:hover > :global(.icon) {
		opacity: 0;
	}

	/* PROJECTS  */

	.a-icon-projects:hover:after {
		content: 'PROJECTS';
		opacity: 1;
		top: 11px;
	}

	.a-icon-projects > :global(.icon) {
		opacity: 1;
		transition: all 0.3s ease-out;
	}

	.a-icon-projects:hover > :global(.icon) {
		opacity: 0;
	}

	a:first-child + a + a:after {
		left: -8px;
	}

	/* USES */

	.a-icon-uses:hover:after {
		content: 'USES';
		opacity: 1;
		top: 11px;
	}

	.a-icon-uses > :global(.icon) {
		opacity: 1;
		transition: all 0.3s ease-out;
	}

	.a-icon-uses:hover > :global(.icon) {
		opacity: 0;
	}

	/* CONTACT  */

	.a-icon-contact:hover:after {
		content: 'CONTACT';
		opacity: 1;
		top: 11px;
	}

	.a-icon-contact > :global(.icon) {
		opacity: 1;
		transition: all 0.3s ease-out;
	}

	.a-icon-contact:hover > :global(.icon) {
		opacity: 0;
	}

	a:first-child + a + a + a + a:after {
		left: -7px;
	}

	/* GITHUB  */

	.a-icon-github:hover:after {
		content: 'GITHUB';
		opacity: 1;
		top: 11px;
	}

	.a-icon-github > :global(.icon) {
		opacity: 1;
		transition: all 0.3s ease-out;
	}

	.a-icon-github:hover > :global(.icon) {
		opacity: 0;
	}

	a:first-child + a + a + a + a + a:after {
		left: -6px;
	}

	.menu-btn {
		color: #fff;
		position: absolute;
		left: 2rem;
		display: none;
		top: 0.8rem;
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
		margin: 0.7rem;
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
		transition: all 0.3s ease-out;
		color: white;
		position: absolute;
		bottom: 15px;
	}

	a[aria-current]:before {
		content: '';
		width: 2px;
		height: 36px;
		background-color: #8b8bce;
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
		transition: all 0.3s ease-out;
		opacity: 0;
	}

	a:not([aria-current]):not(.logo-wrapper):hover:before {
		opacity: 1;
		left: -13px;
	}

	a[aria-current]:after {
		color: #8b8bce;
	}

	a[aria-current] > :global(.icon) {
		color: #8b8bce;
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
			margin: 1.2rem;
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
