import { APP_ID } from '../config.js';

const baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/reservations`;

export const addReservations = (itemId, userId, dateStart, dateEnd) => fetch(baseUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    item_id: itemId,
    username: userId,
    date_start: dateStart,
    date_end: dateEnd,
  }),
}).then((response) => response.ok);

const getBaseUrl = `${baseUrl}?item_id=`;

export const getReservations = async (id) => fetch(getBaseUrl + id)
  .then((response) => response.json());
