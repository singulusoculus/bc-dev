<script>
import ProjectDetail from '$lib/ProjectDetail.svelte'

export let activeProject
export let projects

let firstMount = true

setTimeout(() => {
    firstMount = false
}, 2300)

</script>

<style>
	.projects {
		margin-top: 2rem;
		max-width: 80%;
		position: relative;
	}
</style>

<div class="projects">
    {#each projects as project}
        {#if project.project === activeProject}
            <ProjectDetail {project} {firstMount} />
        {/if}
    {/each}
</div>