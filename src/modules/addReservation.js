import { addReservations } from "../api/reservationsApi.js";

const postReserve = (id) => {
    const name = document.getElementById('name-reserve').value;
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
  
    addReservations(id, name, start, end)
  }

export default postReserve;