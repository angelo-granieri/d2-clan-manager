const API_BASE_URL = 'https://www.bungie.net/Platform';
const API_KEY = 'fae58260f5ce40468d70bdcc94875406'; // Replace with your Bungie API key

/**
 * Fetches the player's profile from the Bungie API.
 * @param membershipType - The type of membership (e.g., Xbox, PlayStation, etc.).
 * @param membershipId - The player's membership ID.
 * @param destinyProfileId - The player's Destiny profile ID.
 * @returns The player's profile data.
 */
export const getPlayerProfile = async (
	membershipType: number,
	membershipId: string,
	destinyProfileId: string
) => {
	console.debug(`Fetching player profile for ${destinyProfileId}...`);
	const url = `${API_BASE_URL}/Destiny2/${membershipType}/Profile/${membershipId}/?components=Profiles`;

	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'X-API-Key': API_KEY
			}
		});

		if (!response.ok) {
			throw new Error(`Error fetching player profile: ${response.statusText}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching player profile:', error);
		throw error;
	}
};
