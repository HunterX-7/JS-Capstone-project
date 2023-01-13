import { APP_ID } from '../config.js';

const baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/comments`;

export const addComment = (itemId, username, comment) => fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 'item_id': itemId, 'username': username, 'comment': comment }),
}).then((response) => { response.ok });

export const fetchComments = (itemId) => fetch(baseUrl + '?item_id=' + itemId).then((response) => response.json());
