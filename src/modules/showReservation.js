import { getReservations } from '../api/reservationsApi.js';

const showReservation = async (obj, id) => {
  const {
    short_title: shortTitle,
    performers: [{ image: performerImage }],
    datetime_local: dateEvent,
    venue: {
      city: cityLocation,
      country: countryLocation,
      name: nameStage,
      postal_code: poCode,
    },
  } = obj;

  let reserDates = '';

  const reserData = await getReservations(id);

  if (reserData.error === undefined) {
    reserData.forEach((element) => {
      reserDates += `<p>${element.date_start} - ${element.date_end} by ${element.username}</p>`;
    });
  }

  const div = document.createElement('div');
  div.className = 'popup';
  div.setAttribute('id', 'popup1');
  div.innerHTML = `
                <div class="popup-wrap">
                <h2>Reserve Now</h2>
                <a href="#" class="close" onclick="this.parentElement.parentElement.remove()" >&times;</a>
                <div class="content">
                <div class="container-f">
                    <div class="img-thumb">
                    <img class="img-style" src="${performerImage}" alt="Event Image">
                    </div>
                    <div class="details">
                    <h2>${shortTitle}</h2>
                    <div class="e-details">
                        <p><strong>Country:</strong> ${countryLocation}</p>
                        <p><strong>Date:</strong> ${new Date(dateEvent).toLocaleString()}</p>
                    </div>
                    <div class="e-details">
                        <p><strong>Address:</strong> ${cityLocation}, ${nameStage}</p>
                        <p><strong>Capacity:</strong> ${poCode}</p>
                    </div>
                    </div>
                    <div class="counter">
                    <h3> Reservations (<span id="reserCounter">0</span>)</h3>
                    <div class="reservations-p" id="divReservation">
                        ${reserDates}
                    </div>
                    </div>
                    <div class="form-f">
                    <label>Name</label>
                    <input type="text" placeholder="Your name..." name="" id="name-reserve">
                    <label>Start Date</label>
                    <input type="date" placeholder="Start date..." name="" id="start">
                    <label>End Date</label>
                    <input type="date" placeholder="End date..." name="" id="end">
                    <button class="btn btn-primary" type="button" onclick="postReserve(${id})">Reserve Now</button>
                    </div>
                </div>
                </div>
                </div>
                `;
  div.classList.add('popup-visible');
  const bodyElem = document.getElementById('body');
  const footerElem = document.getElementById('footer');

  bodyElem.insertBefore(div, footerElem);
};

export default showReservation;