<script>
    import { fly } from 'svelte/transition'
	import Lightbox from './Lightbox.svelte'
	import SkillsGrid from './SkillsGrid.svelte'

    export let project
    export let firstMount

    let descDelay = 1800
    let canRender

    setTimeout(() => {
        canRender = true
    }, 400)

    if (!firstMount) {
        descDelay = 400
    }
</script>

<style>
	.project-wrapper {
		box-shadow: -10px 10px 11px 0 rgba(0,0,0,0.25);
	}

	.header {
		position: absolute;
		left: 60px;
		top: -15px;
		font-size: 1.2rem;
		color: rgba(127,127,190,1);
	}

	.content {
		padding: .5rem 3rem 1rem 3rem;
		border: 1px solid rgb(137, 137, 137);
		border-top-color: transparent;
		border-right-color: transparent;
	}

	.fake-border:before {
		content: '';
		display: block;
		background: rgb(137, 137, 137);
		height: 1px;
		width: 50px;
		position: absolute;
		bottom: 100%;
		left: 0px;
		top: 0px;
		z-index: 1;
	}

	.footer-wrapper {
		position: relative;
		margin-bottom: 50px;
	}

	.footer-content {
		padding: .2rem 2rem;
		border-left: 1px solid rgb(137, 137, 137);
		border-bottom: 1px solid rgb(137, 137, 137);
		border-top: 1px solid transparent;
		transform: skew(33deg);
		position: absolute;
		left: 25px;
		top:-1px;
		/* width: 80%; */
		background-image: linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,.95), rgba(255,255,255,1));
		box-shadow: -10px 10px 11px 0 rgba(0,0,0,0.25);
		z-index: 10;
		color: rgb(104, 104, 104);
	}

	.footer-title {
		transform: skew(-33deg);
		font-size: 1.2rem;
	}

	.meta {
		display: flex;
		justify-content: space-around;
        /* flex-wrap: wrap; */
		margin: 1rem 0;
        font-size: 1.1rem;
		color: rgba(127,127,190,1);
	}

	.meta-sub {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		flex: 0 0 40%;
	}

    @media only screen and (max-width: 960px) {
        .meta {
            flex-direction: column;
            justify-content: center;
        }

        .meta-link {
            margin-bottom: 10px;
        }

        .content {
            padding: .3rem 1rem .5rem 1rem;
        }
    }
</style>

{#if canRender}
    <div class="project-wrapper"
        in:fly={{y:50, duration:500, delay: descDelay}}
        out:fly={{y:30, duration:200}}>
        <h3 class="header">
			{project.header}
		</h3>
        <span class="fake-border"></span>
            <div class="content">
				<div class="meta">
					<div class="meta-sub">
						{#if project.link}
						<div class="meta-link">Link: <a href="{project.link}" target="_blank">{project.niceLink}</a></div>
						{/if}
						<div class="built-with">
							<p>Built With:</p>
							<SkillsGrid skills={project.builtWith} />
						</div>
					</div>
					<Lightbox imageSrc={project.imageSrc} imageDesc={project.imageDesc} />
				</div>
				<hr>
                <div class="content-text">
					<svelte:component this={project.content}></svelte:component>
                </div>
            </div>
        <div class="footer-wrapper">
            <div class="footer-content">
                <div class="footer-title">
                    {project.project}
                </div>
            </div>
        </div>
    </div>
{/if}