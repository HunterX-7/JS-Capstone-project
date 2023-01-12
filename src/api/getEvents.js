import fetchWithAuth from './fetchWithAuth.js';

const getEvents = async () => {
  const response = await fetchWithAuth('events');
  if (!response.ok) {
    throw new Error(
      `HTTP error! status: ${response.status} ${response.statusText}`,
    );
  }
  return response.json();
};

export default getEvents;
