import { getReservations } from "../api/reservationsApi.js";

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
                    <img src="${performerImage}" alt="Event Image">
                    </div>
                    <div class="details">
                    <h2>${shortTitle}</h2>
                    <div class="e-details">
                        <p>Country: ${countryLocation}</p>
                        <p>Date: ${new Date(dateEvent).toLocaleString()}</p>
                    </div>
                    <div class="e-details">
                        <p>Address: ${cityLocation}, ${nameStage}</p>
                        <p>Estimated capacity: ${poCode}</p>
                    </div>
                    </div>
                    <div class="counter">
                    <h3> Reservations (3)</h3>
                    <div class="reservations-p">
                        <p>03/11/21 - 03/12/21 by Alex</p>
                        <p>03/14/21 - 03/15/21 by Anna</p>
                        <p>03/18/21 - 03/19/21 by Atem</p>
                    </div>
                    </div>
                    <div class="form-f">
                    <label>Name</label>
                    <input type="text" placeholder="Your name..." name="" id="">
                    <label>Start</label>
                    <input type="text" placeholder="Start date..." name="" id="">
                    <label>End</label>
                    <input type="text" placeholder="End date..." name="" id="">
                    <input type="submit" value="Reserve">
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