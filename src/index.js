import { getLikes } from './api/likesApi.js';
import addLikeDom from './modules/addLikeDom.js';
import showEvents from './modules/showEvents.js';
import showEventsCount from './modules/showEventsCount.js';
import showLikesDom from './modules/showLikesDom.js';
import './styles/reset.css';
import './styles/style.css';

const eventsList = document.getElementById('events-list');

// NOTE: load all the events first
document.addEventListener('DOMContentLoaded', () => {
  showEvents().then(() => {
    showEventsCount();
  });
});

// TODO: might want to render likes along with events
// because like count blinks otherwise
getLikes().then((likes) => {
  showLikesDom(likes);
});

eventsList.addEventListener('click', (e) => {
  if (e.target.matches('.fa-heart')) addLikeDom(e);
});