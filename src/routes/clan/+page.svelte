<script lang="ts">
    export const clan = {
        name: "Guardians of Light",
        motto: "Together we shine brighter",
        members: 42,
        description: "A Destiny 2 clan focused on raids, strikes, and having fun together.",
        banner: "/clan_banner.png",
    };
</script>

<div class="container mx-auto p-4">
    <div class="card bg-base-100 shadow-xl">
        <div class="card-body flex flex-row">
            <figure class="w-1/3">
                <img src={clan.banner} alt="Clan Banner" class="h-auto object-cover" />
            </figure>
            <div class="w-2/3">
                <h2 class="card-title text-3xl font-bold">{clan.name}</h2>
                <p class="text-lg italic">{clan.motto}</p>
                <p class="mt-4">{clan.description}</p>
                <div class="mt-4">
                    <span class="badge badge-primary">Members: {clan.members}</span>
                </div>
                <div class="card-actions justify-end mt-4">
                    <button class="btn btn-primary">Join Clan</button>
                    <button class="btn btn-secondary">View Activities</button>
                </div>
            </div>
        </div>
    </div>
</div>