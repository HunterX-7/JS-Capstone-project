import showReservation from './showReservation.js';
import getEventDetails from '../api/getEventDetails.js';
import countReservation from './countReservations.js';

const showResPop = async () => {
  const reserveBtn = document.getElementsByClassName('reserve-btn');
  const testReserv = Array.prototype.filter.call(reserveBtn, (testElement) => testElement.nodeName === 'BUTTON');
  testReserv.forEach((element) => {
    element.addEventListener('click', async () => {
      const event = await getEventDetails(element.id);
      await showReservation(event, element.id);
      countReservation();
    });
  });
};

export default showResPop;