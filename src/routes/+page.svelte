<script lang="ts">
    import { onMount } from 'svelte';
    import { getClanMembers } from '$lib/services/bungie-api'; // Assicurati che il percorso sia corretto

    let clanMembers: any | any[] = [];
    const clanId = 'YOUR_CLAN_ID'; // Sostituisci con l'ID del tuo clan

    onMount(async () => {
        clanMembers = await getClanMembers(clanId);
    });
</script>

<div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Membri del Clan</h1>
    {#if clanMembers.length > 0}
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each clanMembers as member}
                <li class="bg-white rounded-lg shadow p-4">
                    <h2 class="text-lg font-semibold">{member.destinyUserInfo.displayName}</h2>
                    <p>ID: {member.destinyUserInfo.membershipId}</p>
                    <p>Tipo di appartenenza: {member.destinyUserInfo.membershipType}</p>
                    </li>
            {/each}
        </ul>
    {:else}
        <p>Caricamento dei membri del clan...</p>
    {/if}
</div>