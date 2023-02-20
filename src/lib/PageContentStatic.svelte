<script>
	export let content;
</script>

<div class="content-wrapper">
	{#if content.heading}
		<div class="header-title">
			{content.heading}
		</div>
	{/if}
	<div class="content-box">
		<span class="fake-border" />
		<div class="content">
			<slot />
		</div>
	</div>
	{#if content.footer}
		<div class="content-footer-wrapper">
			<div class="content-footer-content">
				<div class="content-footer">
					{content.footer}
				</div>
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.content-wrapper {
		width: 90%;
		position: relative;
		margin-top: 2rem;
		flex-grow: 1;

		@media only screen and (max-width: 768px) {
			width: 99%;
		}
	}

	.content-box {
		box-shadow: -10px 10px 11px 0 rgba(0, 0, 0, 0.25);
	}

	.header-title {
		position: absolute;
		left: 60px;
		top: -15px;
		font-size: 1.2rem;
		color: rgba(127, 127, 190, 1);
	}

	.content {
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

	.content-footer-wrapper {
		position: relative;
		margin-bottom: 50px;
	}

	.content-footer-content {
		padding: 0.2rem 2rem;
		border-left: 1px solid rgb(137, 137, 137);
		border-bottom: 1px solid rgb(137, 137, 137);
		border-top: 1px solid transparent;
		transform: skew(33deg);
		position: absolute;
		left: 25px;
		top: -1px;
		background-image: linear-gradient(
			to left,
			rgba(255, 255, 255, 0),
			rgba(255, 255, 255, 0.95),
			rgba(255, 255, 255, 1)
		);
		box-shadow: -10px 10px 11px 0 rgba(0, 0, 0, 0.25);
		z-index: 10;
		color: rgb(104, 104, 104);
	}

	.content-footer {
		transform: skew(-33deg);
		font-size: 1.2rem;
	}

	@media only screen and (max-width: 960px) {
		.content {
			padding: 1rem;
		}
	}
</style>
