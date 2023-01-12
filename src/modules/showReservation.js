function showReservation() {
const div = document.createElement('div');
div.className = 'popup';
div.setAttribute('id', 'popup1');
div.innerHTML = `
                <div class="popup-wrap">
                <h2>Reserve Now</h2><a href="#" class="close">&times;</a>
                <div class="content">
                <div class="container-f">
                    <div class="img-thumb">
                    <img src="https://seatgeek.com/images/performers-landscape/lao-tizer-141547/146635/huge.jpg" alt="Event Image">
                    </div>
                    <div class="details">
                    <h2>Event: Name</h2>
                    <div class="e-details">
                        <p>A: Details</p>
                        <p>B: Details</p>
                    </div>
                    <div class="e-details">
                        <p>C: Details</p>
                        <p>D: Details</p>
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
        return div;
}

export default showReservation;