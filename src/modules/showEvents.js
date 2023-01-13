import { addComment, fetchComments } from '../api/commentAPI.js';
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
              <i class="fa-regular fa-heart"></i>
            </button>
            <p>
              <span class="like-count">0</span> Likes
            </p>
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
let wrapper = null;

function showModal(obj, comments) {
  const {
    id,
    short_title: shortTitle,
    performers: [{ image: performerImage }],
    type,
    datetime_local: dateEvent,
    popularity,
    score,

  } = obj;

  if (comments === undefined){
    comments = []
  }

  if (wrapper !== null) {
    document.body.removeChild(wrapper);
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
          <h3>Date : ${new Date(dateEvent).toLocaleString()}</h3>
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
            <h3>Comments (${comments && comments.length})</h3>
            <!-- comments -->
            ${comments !=null && comments.map(comment=>{
              return (`<h4 class="comment-item"> ${comment.username} : "${comment.comment}"</h4>`);
            })}
            
          </div>
          <hr>
          <form  id="add-comment" class = "submit-comment">
            <h2>Add Comment</h2>
            <label for="">Your name</label>
            <div>
            <input type="text" name="name" id="name" required>
              <input type="text" name="item_id" id="item_id" style="visibility:hidden"  value="${id}">
            </div>
            <label for="">Your insights</label>
            <div>
              <textarea name="comment" id="comment" cols="30" rows="3"></textarea>
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

  // post a new comment
  document.getElementById('add-comment').addEventListener('submit', (e) => {
    e.preventDefault();

    let itemId = document.getElementById('item_id').value;
    let username = document.getElementById('name').value;
    let comment = document.getElementById('comment').value;
    console.log(itemId, username, comment);
    addComment(itemId, username, comment).then((status)=>{
        // alert('comment posted successfully');
       if(status === true){
        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
        document.querySelector('.comment-list').innerHTML+=`<h4 class="comment-item"> ${username} : "${comment}"</h4>`
       }else{
        // comment failed
       }
    });

    e.preventDefault();
  });
}

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
      console.log(node.id);
      const comments = await fetchComments(node.id);
      console.log('comments:::',comments);
      showModal(event, comments);
    });
  });
};


export default showEvents;