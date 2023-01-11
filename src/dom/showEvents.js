import getEvents from '../api/getEvents.js';

const mainEl = document.getElementById('main');

const showEvents = async () => {
  const eventsReq = await getEvents();
  const events = eventsReq.events;

  const ul = document.createElement('ul');
  events.forEach((event) => {
    ul.innerHTML += `<li>${event.title}</li>`;
  });

  mainEl.appendChild(ul);
};

export default showEvents;
