import { CLIENT_ID, CLIENT_SECRET } from '../config.js';

const baseUrl = 'https://api.seatgeek.com';
const pageLimit = 9;

const fetchWithAuth = async (endpoint, options = {}) => {
  // if endpoint starts with "/" remove it
  endpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;

  const params = new URLSearchParams();
  params.set('client_id', CLIENT_ID);
  params.set('client_secret', CLIENT_SECRET);

  // OPTIONAL: limit result set
  params.set('per_page', pageLimit);

  const url = `${baseUrl}/${endpoint}?${params.toString()}`;
  return fetch(url, options);
};

export default fetchWithAuth;
