import { APP_ID } from '../config.js';

const baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes`;

export const addLike = (itemId) => fetch(baseUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ item_id: itemId }),
}).then((response) => response.ok);

export const getLikes = () => fetch(baseUrl).then((response) => response.json());
