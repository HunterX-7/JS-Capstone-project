import { APP_ID } from '../config.js';

export const baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes`;

export const getLikes = () => fetch(baseUrl).then((response) => response.json());
