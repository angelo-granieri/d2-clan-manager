<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { signIn } from '@auth/sveltekit/client';
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-base-200">
	<!-- <img src="/img/logo.svg" alt="Company Logo" class="w-32 h-32 mb-6" /> -->
	<button class="btn btn-primary" on:click={() => signIn()}>
		{m.sign_in()}
	</button>
</div>
