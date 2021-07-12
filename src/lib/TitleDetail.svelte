<script>
import { fly } from 'svelte/transition'
import SkillsGrid from './SkillsGrid.svelte'

export let title
export let firstMount

let descDelay = 1800
let canRender

setTimeout(() => {
    canRender = true
}, 200)

if (!firstMount) {
    descDelay = 400
}

</script>

<style>
	.details-wrapper {
		box-shadow: -10px 10px 11px 0 rgba(0,0,0,0.25);
	}

	.details-years {
		position: absolute;
		left: 60px;
		top: -15px;
		font-size: 1.2rem;
		color: rgba(127,127,190,1);
	}

	.details-content {
		padding: 2rem 1.5rem;
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

	.details-title-wrapper {
		position: relative;
		margin-bottom: 50px;
	}

	.details-title-content {
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

	.details-title {
		transform: skew(-33deg);
		font-size: 1.2rem;
	}

    @media only screen and (max-width: 960px) {

        .details-content {
            padding: .3rem 1rem .5rem 1rem;
        }
	}
</style>

{#if canRender}
    <div class="details-wrapper"
        in:fly={{y:50, duration:500, delay: descDelay}}
        out:fly={{y:30, duration:200}}>
        <div class="details-years">
			{title.years}
		</div>
        <span class="fake-border"></span>
            <div class="details-content">
            	<!-- {@html title.desc} -->
				<svelte:component this={title.desc}></svelte:component>
				<SkillsGrid titleType={title.type} />
            </div>
            <div class="details-title-wrapper">
            <div class="details-title-content">
                <div class="details-title">
                    {title.title}
                </div>
            </div>
        </div>
    </div>
{/if}
