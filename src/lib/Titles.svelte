<script>
    import { fly } from 'svelte/transition'
    import { createEventDispatcher } from 'svelte'

    export let titles
    export let activeTitle

    let dispatch = createEventDispatcher()

</script>

<style>

	.titles {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
        color: rgb(104, 104, 104);
        margin: 1rem 0;
        
	}

	.title {
        margin: .5rem 1.5rem;
		font-size: 1.3rem;
        cursor: pointer;
        position: relative;
        background-color: white;
    }
    
    .title.active-title:after {
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

    .title:not(.active-title):after {
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

    .title:not(.active-title):hover:after {
        opacity: 1;
        transform: translateY(0px);
    }

</style>

<div class="titles" >
    {#each titles as title, i}
        <span class="fake-border"></span>
        <div 
        class="title" 
        class:active-title={activeTitle === title.title} 
        on:click={() => dispatch('clicked', title.title)}
        in:fly={{x:-100, duration: 300, delay: 1300 + i * 150}} 
        out:fly={{y:30, duration:200}}>
            {title.title}
        </div>
    {/each}
</div>