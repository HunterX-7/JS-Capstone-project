import { CLIENT_ID, CLIENT_SECRET } from '../config.js';

const baseUrl = 'https://api.seatgeek.com';

const fetchWithAuth = async (endpoint, options = {}) => {
  // if endpoint starts with "/" remove it
  endpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;

  const authParams = new URLSearchParams();
  authParams.set('client_id', CLIENT_ID);
  authParams.set('client_secret', CLIENT_SECRET);

  const url = `${baseUrl}/${endpoint}?${authParams.toString()}`;
  return fetch(url, options);
};

export default fetchWithAuth;
