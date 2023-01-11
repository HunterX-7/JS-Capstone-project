import { getLikes } from './api/likesApi.js';
import showEvents from './modules/showEvents.js';
import showLikesDom from './modules/showLikesDom.js';
import './styles/reset.css';
import './styles/style.css';

getLikes().then((likes) => {
  showLikesDom(likes);
});

document.addEventListener('DOMContentLoaded', showEvents);
