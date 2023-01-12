import showEvents from './modules/showEvents.js';
import showEventsCount from './modules/showEventsCount.js';
import './styles/reset.css';
import './styles/style.css';

document.addEventListener('DOMContentLoaded', () => {
  showEvents().then(() => {
    showEventsCount();
  });
});
