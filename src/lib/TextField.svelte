<script>
	import { createEventDispatcher } from "svelte"
	let dispatch = createEventDispatcher()

	import Icon from "$lib/Icon.svelte"

	export let text = null
	export let placeholder = null
	export let prependIcon = ""
	export let appendIcon = ""
	export let inputType = "text"
	export let label = null
	export let rows = 5
	export let clearable = false
	export let name = `input-${Math.floor(Math.random() * 10000)}`
	export let disabled = false

	$: isFilled = placeholder || text || text === 0 ? true : false
	$: hasPrependIcon = prependIcon ? true : false
</script>

<div class="text-input">
	{#if inputType === "text"}
		<input
			type="text"
			{disabled}
			{name}
			{placeholder}
			bind:value={text}
			class:has-icon={hasPrependIcon}
			on:input={() => dispatch("textChange", text)}
		/>
	{:else if inputType === "password"}
		<input
			type="password"
			{disabled}
			{name}
			{placeholder}
			bind:value={text}
			class:has-icon={hasPrependIcon}
			on:input={() => dispatch("textChange", text)}
		/>
	{:else if inputType === "number"}
		<input
			type="number"
			{disabled}
			{name}
			{placeholder}
			bind:value={text}
			class:has-icon={hasPrependIcon}
			on:input={() => dispatch("textChange", text)}
		/>
	{:else if inputType === "email"}
		<input
			type="email"
			{disabled}
			{name}
			{placeholder}
			bind:value={text}
			class:has-icon={hasPrependIcon}
			on:input={() => dispatch("textChange", text)}
		/>
	{:else if inputType === "textarea"}
		<textarea {rows} {name} bind:value={text} />
	{/if}

	{#if label}
		<label for={name} class:is-filled={isFilled} class:has-icon={hasPrependIcon}>{label}</label>
	{/if}

	{#if prependIcon}
		<div class="prepend-icon-wrapper" on:click={() => dispatch("click-icon")}>
			<Icon name={prependIcon} />
		</div>
	{/if}

	{#if appendIcon}
		<div class="append-icon-wrapper" on:click={() => dispatch("click-icon")}>
			<Icon name={appendIcon} />
		</div>
	{/if}

	{#if clearable && text}
		<div class="clear-icon-wrapper" on:click={() => (text = "")}>
			<Icon name="x" />
		</div>
	{/if}

	{#if inputType !== "textarea"}
		<div class="line">
			<div class="focused-line" />
		</div>
	{/if}
</div>

<style lang="scss">

	.text-input {
		--black: #232323;
		--text: #444;
		--text-second: #7d868a;
		--flash: #000080;
		--font: 'Lato', sans-serif;
		--size: 1.1rem;
		--focused-size: 1rem;

		position: relative;
		margin: 0.5rem 0 1.5rem 0;

	}


	textarea {
		border-radius: 3px;
		border: 1px solid var(--black);
		resize: vertical;
		padding: 1.2rem;
		width: 97%;
		transition: border-color 0.3s;
		font: var(--font);
		font-size: var(--size);
		background-color: transparent;
		color: var(--text);
		margin-top: 1.5rem;

		@media only screen and (max-width: 768px) {
			width: 95%;
		}
	}


	label {
		position: absolute;
		top: 0;
		padding: 1.5rem 1rem 0.5rem 1rem;
		margin-left: 0.5rem;
		pointer-events: none;
		transition: font-size 0.2s, line-height 0.3s, padding 0.3s;
		cursor: text;
		display: block;
		font-size: var(--size);
	}

	input {
		width: 100%;
		color: var(--text);
		padding: 2rem 1rem 0.5rem 1rem;
		border-top-right-radius: 3px;
		border-top-left-radius: 3px;
		border: none;
		background-color: transparent;
		font-size: var(--size);
		font-family: var(--font);
	}

	input::placeholder {
		color: var(--text-second);
	}

	.line {
		position: absolute;
		height: 1px;
		width: 100%;
		left: 0;
		bottom: 0;
		background-color: var(--black);
	}

	.focused-line {
		height: 0;
		width: 0;
		transition: width 0.3s ease 0s;
		background-color: var(--flash);
		margin: auto;
	}

	.prepend-icon-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		padding: 1.5rem 1rem 1rem 1rem;
		display: block;
	}

	.append-icon-wrapper {
		position: absolute;
		top: 0;
		right: 0;
		padding: 1.5rem 1rem 1rem 1rem;
		display: block;
	}

	.clear-icon-wrapper {
		position: absolute;
		top: 0;
		right: 0;
		padding: 1.5rem 1rem 1rem 1rem;
		display: block;
		cursor: pointer;
	}

	.has-icon {
		padding-left: 4rem;
	}

	div:focus,
	input:focus,
	textarea:focus {
		outline: none;
	}

	input:focus + label {
		line-height: 0.05;
		font-size: var(--focused-size);
		color: var(--flash);
	}

	input + label.is-filled {
		line-height: 0.05;
		font-size: var(--focused-size);
	}

	input:focus ~ .line {
		background-color: var(--flash);
	}

	input:focus ~ .line > .focused-line {
		width: 100%;
		height: 2px;
	}

	input:focus ~ .prepend-icon-wrapper,
	input:focus ~ .append-icon-wrapper {
		color: var(--flash);
	}

	textarea:focus {
		border-color: var(--flash);
		border-width: 2px;
	}

	textarea + label {
		padding-top: 2.5rem;
	}

	textarea:focus + label {
		line-height: 0.05;
		font-size: var(--focused-size);
		background-color: transparent;
		color: var(--flash);
		padding-top: 0;
	}

	textarea + label.is-filled {
		line-height: 0.05;
		font-size: var(--focused-size);
		background-color: transparent;
		padding-top: 0;
	}
</style>
