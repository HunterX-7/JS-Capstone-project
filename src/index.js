import addLikeDom from './modules/addLikeDom.js';
import showEvents from './modules/showEvents.js';
import './styles/reset.css';
import './styles/style.css';

const eventsList = document.getElementById('events-list');
eventsList.addEventListener('click', (e) => {
  if (e.target.matches('.fa-heart')) addLikeDom(e);
});

document.addEventListener('DOMContentLoaded', showEvents);
