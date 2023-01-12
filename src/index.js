import showEvents from './modules/showEvents.js';
import './styles/reset.css';
import './styles/style.css';
import showReservation from './modules/showReservation.js';

document.addEventListener('DOMContentLoaded', showEvents);

const bodyElem = document.getElementById('body');
const footerElem = document.getElementById('footer');
const popupReser = showReservation();
bodyElem.insertBefore(popupReser, footerElem);