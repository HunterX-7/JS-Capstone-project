const countReservation = () => {
    const divReser = document.getElementById('divReservation');
    const reservNumber = document.getElementById('reserCounter');
    console.log(divReser.children.length)
    reservNumber.innerHTML = divReser.children.length
}

export default countReservation;