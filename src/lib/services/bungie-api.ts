    const API_KEY = 'YOUR_BUNGIE_API_KEY';
    const BASE_URL = 'https://www.bungie.net/Platform';

    export async function getClanMembers(clanId: string) {
        const response = await fetch(`${BASE_URL}/GroupV2/${clanId}/Members/`, {
            headers: { 'X-API-Key': API_KEY },
        });
        const data = await response.json();
        return data.Response.results;
    }