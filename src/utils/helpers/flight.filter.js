const { City, Airport, Airplane } = require('../../models');
const { Op } = require('sequelize');

const generateCustomFilter = (query) => {



    let filterOptions = {

        attributes: ['id', 'flightNumber', 'arrivalTime', 'departureTime', 'price', 'boardingGate'],

        include: [
            {
                model: Airplane,
                as: "AirplaneDetails",
                attributes: ['name', 'modelNumber', 'capacity'],
                required: true
            },
            {
                model: Airport,
                as: 'DepartureAirport',
                attributes: ['code'],
                required: true,
                include: [
                    {
                        model: City,
                        as: 'AirportCityDetails',
                        attributes: ['name'],
                        required: true
                    }
                ]
            },
            {
                model: Airport,
                as: 'ArrivalAirport',
                attributes: ['code'],
                required: true,

                include: [
                    {
                        model: City,
                        as: 'AirportCityDetails',
                        attributes: ['name'],
                        required: true
                    }
                ]
            }

        ],
        where: {}
    };

    if (query.trips) {
        const [departureAirportCode, arrivalAirportCode] = query.trips.split('-');

        if (departureAirportCode === arrivalAirportCode) {
            throw new Error('Departure and Arrival Airport cannot be the same');
        }

        if (departureAirportCode.length > 0) {
            filterOptions.include[1].where = { code: departureAirportCode };
        }

        if (arrivalAirportCode !== undefined && arrivalAirportCode.length > 0) {
            filterOptions.include[2].where = { code: arrivalAirportCode };
        }
    }

    if (query.price) {
        console.log(query.price);
        const [lowerLimit, upperLimit] = query.price.split('-');


        if (lowerLimit === undefined || lowerLimit < 0) {
            lowerLimit = 0;
        }

        if (upperLimit === undefined || upperLimit < lowerLimit) {
            upperLimit = 100000;
        }

        console.log(lowerLimit, upperLimit);
        filterOptions.where.price = {
            [Op.between]: [lowerLimit, upperLimit]
        };

    }

    if (query.tripDate) {

        let endTimeAdder = ' 23:59:00';
        let recievedDate = query.tripDate;

        const startTime = new Date(recievedDate);
        const endTime = new Date(recievedDate + endTimeAdder);

        filterOptions.where.departureTime = {
            [Op.between]: [startTime, endTime],
        };
    }


    if (query.travellers) {
        filterOptions.where['$AirplaneDetails.capacity$'] = {
            [Op.gte]: query.travellers,
        };
    }

    if (query.sort) {
        let sortingParams = [];
        const sortingCriteria = query.sort.split(',');

        sortingCriteria.forEach(elem => {
            let [colName, method] = elem.split('_');
            sortingParams.push([colName, method]);
        });

        filterOptions.order = sortingParams.map(param => {
            return [param[0], param[1].toUpperCase()];
        });
    }

    console.log(filterOptions)
    return filterOptions;
};

module.exports = {
    generateCustomFilter
};
