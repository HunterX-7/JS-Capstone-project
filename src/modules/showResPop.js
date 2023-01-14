import showReservation from './showReservation.js';
import getEventDetails from '../api/getEventDetails.js';

const showResPop = () => {
  const reserveBtn = document.getElementsByClassName('reserve-btn');
  const testReserv = Array.prototype.filter.call(reserveBtn, (testElement) => testElement.nodeName === 'BUTTON');
  testReserv.forEach((element) => {
    element.addEventListener('click', async () => {
      const event = await getEventDetails(element.id);
      showReservation(event, element.id);
    });
  });
};

export default showResPop;