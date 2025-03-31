<script lang="ts">
	import { SignIn } from '@auth/sveltekit/components';
</script>

<div class="bg-base-200 flex min-h-screen flex-col items-center justify-center">
	<!-- <img src="/img/logo.svg" alt="Company Logo" class="w-32 h-32 mb-6" /> -->
	<!-- <button class="btn btn-primary" on:click={signIn}>
		{m.sign_in()}
	</button> -->
	<SignIn provider="bungie" signInPage="signin" class="btn btn-primary" />
</div>
