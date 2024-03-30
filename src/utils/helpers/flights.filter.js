
const flightsFliter = (query) => {

    let customFilter =
        `SELECT
        A.code as departureAirportCode,
        B.code as arrivalAirportCode,
        F.*
        FROM Flights as F
        JOIN Airports as A
        ON F.departureAirportId=A.id
        JOIN Airports as B
        ON F.arrivalAirportId=B.id
        JOIN Airplanes as C
        ON C.id=F.airplaneId
        WHERE 1=1 `;

    if (query.trips) {
        const [departureAirportCode, arrivalAirportCode] = query.trips.split('-');

        if (departureAirportCode === arrivalAirportCode) {
            throw new AppError(StatusCodes.BAD_REQUEST, 'Something went wrong doing validation', ['Departure and Arrival Airport can not be same']);
        }

        if (departureAirportCode.length > 0) {
            customFilter += ` AND A.code='${departureAirportCode}' `
        }

        if (arrivalAirportCode.length > 0) {
            customFilter += ` AND B.code='${arrivalAirportCode}' `
        }
    }

    if (query.price) {
        const [lowerLimit, upperLimit] = query.price.split('-');

        if (lowerLimit === undefined || lowerLimit < 0) {
            lowerLimit = 0;
        }

        if (upperLimit === undefined || upperLimit < lowerLimit) {
            upperLimit === 100000;
        }

        customFilter += ` AND F.price BETWEEN ${lowerLimit} AND ${upperLimit}`;
    }

    if (query.tripDate) {
        const endingTripTime = " 23:59:00";
        let startDate = query.tripDate;
        let endDate = query.tripDate + endingTripTime;

        customFilter += ` AND F.departureTime BETWEEN '${startDate}' AND '${endDate}'`
    }

    if (query.travellers) {
        customFilter += ` AND C.capacity >= ${query.travellers}`
    }

    if (query.sort) {
        customFilter += 'ORDER BY '
        let orderEmpty = true;
        const sortingParams = query.sort.split(',');

        sortingParams.map((elem) => {
            if (!orderEmpty) customFilter += ',';
            orderEmpty = false;

            let [colName, method] = elem.split('_');
            customFilter += ` F.${colName} ${method}`;
        })

    }


    return customFilter;
}



module.exports = {
    flightsFliter
}