<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();

    export let name;
    export let size = 20;
    export let color
</script>


<svg class="icon" width={size} height={size} color={color} on:click={() => {dispatch("clicked")}}>
    <use xlink:href='#{name}' />
</svg>


<style>
.icon {
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    -o-object-fit: contain;
    object-fit: contain;
    -webkit-transform-origin: center center;
    transform-origin: center center;
    stroke: currentColor;
    stroke-width: 1.3;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
}
</style>