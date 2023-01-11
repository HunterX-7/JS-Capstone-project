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
            <p>
              <span class="like-count">0</span> Likes
            </p>
          </div>
      </div>

      <div class="card-button-container">
          <button class="btn btn-primary-outline">Comments</button>
          <button class="btn btn-primary">Reserve</button>
      </div>
    </div>
  `;

  return html;
};

const showEvents = async () => {
  const { events } = await getEvents();

  events.forEach((event) => {
    eventsListEl.innerHTML += createEventCard(event);
  });
};

export default showEvents;
