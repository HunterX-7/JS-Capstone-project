const countReservation = () => {
  const divReser = document.getElementById('divReservation');
  const reservNumber = document.getElementById('reserCounter');
  reservNumber.innerHTML = divReser.children.length;
};

export default countReservation;