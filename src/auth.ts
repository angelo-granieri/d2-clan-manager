import { SvelteKitAuth } from '@auth/sveltekit';
import Bungie from '@auth/sveltekit/providers/bungie';
import { AUTH_SECRET } from '$env/static/private';

export const { handle, signIn, signOut } = SvelteKitAuth({
	providers: [Bungie],
	secret: AUTH_SECRET,
	useSecureCookies: false
});
