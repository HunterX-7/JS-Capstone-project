import { addReservations } from "../api/reservationsApi.js";

const postReserve = (id) => {
    const name = document.getElementById('name-reserve').value;
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    const divReser = document.getElementById('divReservation')

    addReservations(id, name, start, end)

    divReser.innerHTML += `<p>${start} - ${end} by ${name}</p>`;

    document.getElementById('name-reserve').value = '';
    document.getElementById('start').value = '';
    document.getElementById('end').value = '';
  }

export default postReserve;