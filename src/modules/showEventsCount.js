import countEvents from './countEvents.js';

const showEventsCount = () => {
  const eventsCount = countEvents();
  if (!eventsCount) return;

  const eventsCountEl = document.querySelector('.events-count');
  eventsCountEl.textContent = eventsCount;
};

export default showEventsCount;
