import getEventDetails from '../api/getEventDetails.js';
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
          <button class="btn btn-primary-outline comment-btn" id="${id}">Comments</button>
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


  // modal popup operations (comment)
  const previewBtn = document.querySelectorAll('.comment-btn');

  previewBtn.forEach((node) => {
    document.getElementById(node.id).addEventListener('click', async () => {
      // pass objects to the modal
      const event = await getEventDetails(node.id);
      showModal(event);
    });
  });
};

let wrapper = null;

function showModal(obj) {

  const {
    id,
    short_title: shortTitle,
    performers: [{ name: performerName, image: performerImage }],
    type: type,
    datetime_local: date_event,
    popularity,
    score,

  } = obj;

  if (wrapper !== null) {
    document.body.removeChild(wrapper);;
  }
  // clicked
  wrapper = document.createElement('div');
  wrapper.innerHTML = `
  <div class="modal" id="modal">
    <div class="modal-content">
      <div class="card-preview-header">
        <h3>Event Details</h3>
        <span class="close">&times;</span>
      </div>

      <img src=${performerImage}
        class="popup-img-preview" alt="Image cover">
      <h2 class="work-title-preview">${shortTitle}</h2>
      <div class="description-popup">
        <div class="primaryInfo">
          <h3>Date : ${date_event}</h3>
          <h3>Type : ${type}</h3>
        </div>
        <div class="detailInfo">
          <h3>Popularity: ${popularity}</h3>
          <h3>Score : ${score}</h3>
        </div>
      </div>
      <div class="article-content">
        <div class="comments-container">
          <div class="comment-list">
            <h3>Comments (4)</h3>
            <!-- comments -->
            <h4 class="comment-item">Comment 1 : "Welcome dear"</h4>
            <h4 class="comment-item">Comment 1 : "Welcome dear"</h4>
            <h4 class="comment-item">Comment 1 : "Welcome dear"</h4>
          </div>
          <hr>
          <form action="" id="add-comment">
            <h2>Add Comment</h2>
            <label for="">Your name</label>
            <div>
              <input type="text" name="name" required>
            </div>
            <label for="">Your insights</label>
            <div>
              <textarea name="insights" id="" cols="30" rows="3"></textarea>
            </div>
            <input type="submit" name="comment" id="comment-btn" value="Post your Comment">
          </form>
        </div>
      </div>

    </div>
  </div>`;
  document.body.appendChild(wrapper);

  const modal = document.getElementById('modal');
  modal.style.display = 'block';
  // // Get the <span> element that closes the modal
  const span = document.getElementsByClassName('close')[0];

  // // When the user clicks on <span> (x), close the modal
  span.onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target === document.getElementById('modal')) {
      modal.style.display = 'none';
    }
  };
}

export default showEvents;
