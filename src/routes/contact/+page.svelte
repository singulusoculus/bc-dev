

<script>
	import Container from '$lib/Container.svelte'
	import PageHeading from '$lib/PageHeading.svelte'
	import PageFooter from '$lib/PageFooter.svelte'
	import PageContent from '$lib/PageContent.svelte'

	import TextField from '$lib/TextField.svelte'
	import Button from '$lib/Button.svelte'

	let nameField
	let emailField
	let messageField
	let form
	let message

	const content = {
		heading: 'Get in touch',
	}

	const handleSubmit = () => {
		if (!nameField) return message = "You must enter your name"
		if (!emailField) return message = "You must enter your email address"
		if (!messageField) return message = "You must enter a message"
		
		let formData = new FormData(form)

		fetch('/contact', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            // Clear form
            nameField = ''
            emailField = ''
            messageField = ''
            
			message = "Thanks for contacting me! I'll get back to you soon"
		})
	}
</script>

<svelte:head>
	<title>Brian Casey | Web Developer | Contact</title>
</svelte:head>

<Container>
	<PageHeading heading={'Contact'} />

	<PageContent {content} >
		{#if message}
			<div class="message">{message}</div>
		{/if}
		<p>Do you have a project you want me to work on? Want to hire me? Send me a message.</p> 
		<form name="contact" method="post" netlify netlify-honeypot="bot-field" bind:this={form} on:submit|preventDefault={handleSubmit}>
			<input type="hidden" name="form-name" value="contact" />
			<input type="hidden" name="bot-field" />
			<TextField inputType="text" label="Name" bind:text={nameField} name="name"  />
			<TextField inputType="email" label="E-mail" bind:text={emailField} name="email" />
			<TextField inputType="textarea" label="Message" bind:text={messageField} name="message" />
			<div class="button">
				<Button type='submit' text="Send"/>
			</div>
		</form>
	</PageContent>

	<PageFooter />
</Container>

<style lang="scss">
	p {
		font-size: 1.2rem;
	}

	.button {
        margin: 0 auto;
        text-align: center;

        & :global(button) {
            margin-top: 0;
        }
    }

	.message {
		color: red;
		font-style: italic;
		text-align: center;
		font-size: 1.3rem
	}
</style>