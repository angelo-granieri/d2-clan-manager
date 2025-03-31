import { SvelteKitAuth } from "@auth/sveltekit"
import Bungie from "@auth/sveltekit/providers/bungie"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Bungie],
  useSecureCookies: false,
})