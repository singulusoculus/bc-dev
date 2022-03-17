<script>
	import { createEventDispatcher } from "svelte"
	const dispatch = createEventDispatcher()

	import Icon from "$lib/Icon.svelte"

	export let text = "Placeholder"
	export let disabled = false
	export let linkref = null
	export let icon = null
	export let type = null
	export let external = false
	export let fontSize = "1rem"
	export let size = "large"
	export let backgroundColor = "var(--second)"
</script>

{#if type === "fab"}
	<button
		class="fab"
		on:click|preventDefault={() => dispatch("clicked")}
		{disabled}
		style="--font-size: {fontSize}; --bg-color: {backgroundColor}"
		class:small={size === "small"}
	>
		<Icon name={icon} size={size === "small" ? 13 : 20} />
	</button>
{:else if type === "submit"}
	<button
		type="submit"
		class:small={size === "small"}
		style="--font-size: {fontSize}; --bg-color: {backgroundColor}"
		{disabled}
	>
		<span>{text}</span>
		{#if icon}
			<Icon name={icon} />
		{/if}
	</button>
{:else if linkref}
	<a
		href={linkref}
		target={external ? "_blank" : ""}
		rel={external ? "noopener" : ""}
		on:click={() => dispatch("clicked")}
		class="button-link"
		style="--font-size: {fontSize}; --bg-color: {backgroundColor}"
	>
		<button type="button" {disabled} class:small={size === "small"}>
			<span>{text}</span>
			{#if icon}
				<Icon name={icon} />
			{/if}
		</button>
	</a>
{:else}
	<button
		on:click|preventDefault|stopPropagation={() => dispatch("clicked")}
		{disabled}
		style="--font-size: {fontSize}; --bg-color: {backgroundColor}"
		class:small={size === "small"}
	>
		<span>{text}</span>
		{#if icon}
			<Icon name={icon} />
		{/if}
	</button>
{/if}

<style lang="scss">
	button {
		--second: rgba(139, 139, 206, 1);
		--flash: #000080;
		--grey: #9e9e9e;

		text-decoration: none;
		color: #fff;
		background-color: var(--bg-color);
		text-align: center;
		letter-spacing: 0.5px;
		-webkit-transition: all 0.2s ease-out;
		transition: all 0.2s ease-out;
		cursor: pointer;
		font-size: var(--font-size);
		outline: 0;
		height: 36px;
		padding: 0 16px;
		border: none;
		border-radius: 2px;
		transition: all 0.2s;
		margin: 1rem;
		white-space: nowrap;
		width: max-content;

		&.small {
			height: 20px;
			padding: 0 8px;
			margin: 0.4rem;
			font-size: 1rem;
		}

		&:hover {
			background-color: var(--flash);
			transform: translateY(-2px);
			-webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12),
				0 3px 1px -1px rgba(0, 0, 0, 0.2);
			box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12),
				0 3px 1px -1px rgba(0, 0, 0, 0.2);
		}

		&:active {
			background-color: var(--flash);
			transform: translateY(1px);
			box-shadow: none;
		}

		&:disabled {
			background-color: var(--grey);
			transition: unset;
			cursor: unset;
		}

		&:hover:disabled {
			transform: unset;
			box-shadow: unset;
		}

		&:active:disabled,
		&:hover:disabled {
			background-color: var(--grey);
		}
		& > :global(.icon) {
			margin-left: 5px;
		}

		&.fab {
			border-radius: 50%;
			min-width: 4.5rem;
			min-height: 4.5rem;
			padding: 0.5rem;
		}

		&.fab.small {
			min-width: 2rem;
			min-height: 2rem;
			padding: 0.2rem;

			@media only screen and (max-width: 768px) {
				padding: 0.5rem;
			}
		}

		&.fab > :global(.icon) {
			margin: 0 auto;
		}
	}
	a {
		text-decoration: none;
	}
</style>
