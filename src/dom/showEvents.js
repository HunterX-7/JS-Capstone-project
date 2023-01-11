import getEvents from '../api/getEvents.js';

const eventsListEl = document.getElementById('events-list');

const createEventCard = (event) => {
  const {
    id,
    short_title: shortTitle,
    performers: [{ name: performerName, image: performerImage }],
  } = event;

  const html = `
    <div class="card" data-card=${id}>
      <img class="card-image" src="${performerImage}" alt="${performerName}">

      <div class="card-title-container">
          <h3 class="card-title">${shortTitle}</h3>
          <div class="card-like-container">
            <button class="like-button">
              <ion-icon name="heart-outline"></ion-icon>
            </button>
            <span class="like-count">5 likes</span>
          </div>
      </div>

      <div class="card-button-container">
          <button class="btn-primary">Comments</button>
          <button class="btn-primary">Reserve</button>
      </div>
    </div>
  `;

  return html;
};

const showEvents = async () => {
  const eventsData = await getEvents();
  const events = eventsData.events;

  events.forEach((event) => {
    eventsListEl.innerHTML += createEventCard(event);
  });
};

export default showEvents;
