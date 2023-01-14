/*
 * @jest-environment jsdom
 */

import countReservation from "./countReservations.js";

describe('ReservationCounter', () => {
    test('pokeCounter.innerText is equals to 5', () => {

      document.body.innerHTML = '<div><div id="divReservation"></div><span id="reserCounter"></span></div>';
      const reserCont = document.getElementById('divReservation');
      let reserComm = '';
  
      for (let i = 0; i < 5; i += 1) {
        reserComm += '<p></p>';
      }
      reserCont.innerHTML = reserComm;

      countReservation();
  
      const resComments = document.getElementById('reserCounter');
      expect(resComments.innerHTML).toStrictEqual('5');
    });
  });