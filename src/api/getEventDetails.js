import fetchWithAuth from './fetchWithAuth.js';

const getEventDetails = async (id) => {
    const response = await fetchWithAuth(`events/${id}`);
    if (!response.ok) {
        throw new Error(
            `HTTP error! status: ${response.status} ${response.statusText}`,
        );
    }
    return response.json();
};

export default getEventDetails;