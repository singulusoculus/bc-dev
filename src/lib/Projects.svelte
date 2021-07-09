<script>
    import { fly } from 'svelte/transition'
    import { createEventDispatcher } from 'svelte'

    export let projects
    export let activeProject

    let dispatch = createEventDispatcher()

</script>

<style>

	.projects {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
        color: rgb(104, 104, 104);
        margin: 1rem 0;
        
	}

	.project {
        margin: .5rem 1.5rem;
		font-size: 1.3rem;
        cursor: pointer;
        position: relative;
        background-color: white;
    }
    
    .project.active-project:after {
        content: '';
        display: block;
        width: 100%;
        background-color: transparent;
        z-index: -1;
        border: 1px solid rgb(137, 137, 137);
        border-right-color: transparent;
        position: absolute;
        top: 15px;
        left: -10px;
        height: 15px;
        box-shadow: -10px 10px 11px 0 rgba(0,0,0,0.25);
    }

    .project:not(.active-project):after {
        content: '';
        display: block;
        width: 100%;
        background-color: transparent;
        z-index: -1;
        border: 1px solid rgb(137, 137, 137);
        border-right-color: transparent;
        position: absolute;
        top: 15px;
        left: -10px;
        height: 15px;
        box-shadow: -10px 10px 11px 0 rgba(0,0,0,0.25);
        opacity: 0;
        transition: all .6s;
        transform: translateY(3px);
    }

    .project:not(.active-project):hover:after {
        opacity: 1;
        transform: translateY(0px);
    }

</style>

<div class="projects" >
    {#each projects as project, i}
        <span class="fake-border"></span>
        <div 
        class="project" 
        class:active-project={activeProject === project.project} 
        on:click={() => dispatch('clicked', project.project)}
        in:fly={{x:-100, duration: 300, delay: 1300 + i * 150}} 
        out:fly={{y:30, duration:200}}>
            {project.project}
        </div>
    {/each}
</div>