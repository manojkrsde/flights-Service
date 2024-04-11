
function addRowlockOnFlights(flightId) {
    return `SELECT * FROM Flights WITH (UPDLOCK) WHERE Flights.id = ${flightId}`;
}


module.exports = {
    addRowlockOnFlights
}