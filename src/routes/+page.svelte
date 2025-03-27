<script lang="ts">
    import * as m from "$lib/paraglide/messages";
    import { getPlayerProfile } from "$lib/services/bungieApi";

    let playerProfile: any = null;

    const fetchPlayerProfile = async () => {
        try {
            // Replace with actual membershipType, membershipId, and destinyProfileId
            const membershipType = 1; // Example: Xbox
            const membershipId = "123456789";
            const destinyProfileId = "987654321";

            playerProfile = await getPlayerProfile(membershipType, membershipId, destinyProfileId);
        } catch (error) {
            console.error("Failed to fetch player profile:", error);
        }
    };

    fetchPlayerProfile();
</script>

<h1>{m.hello_world({ name: "user" })}</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

{#if playerProfile}
    <pre>{JSON.stringify(playerProfile, null, 2)}</pre>
{:else}
    <p>{m.loading_player()}</p>
{/if}