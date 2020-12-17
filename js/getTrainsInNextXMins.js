const getTrainsInNextXMins = (destinationSchedule, minutesOfAdvancedWarning, startMinutes = vMinutes) => {
    const currentVMinutes = startMinutes;
    const in15VMinutes = currentVMinutes + minutesOfAdvancedWarning;
    const arrivalsArray = destinationSchedule.map((destination) => {
        const destinationArrival = [];
        destination.arrivals.map((time, index) => {
            destinationArrival.push({
                display: destination.display,
                arrivalTime: destination.arrivals[index],
            });
        });
        return destinationArrival;
    });
    let filteredArray = [];
    if (in15VMinutes > 60) {
        // flatten array to simplify sorting
        filteredArray = arrivalsArray.flat().filter((arrival) => {
            // if current minutes plus 15 is greater than 60, the check needs to be an OR
            return arrival.arrivalTime > currentVMinutes || arrival.arrivalTime < in15VMinutes;
        }).map((arrayItem) => {
            return {
                display: arrayItem.display,
                arrivalTime: arrayItem.arrivalTime < currentVMinutes ? arrayItem.arrivalTime + 60 : arrayItem.arrivalTime,
            }
        });
    }
    else {
        // flatten array to simplify sorting
        filteredArray = arrivalsArray.flat().filter((arrival) => {
            // if current minutes plus 15 is less than 60, the check needs to be an AND
            return arrival.arrivalTime > currentVMinutes && arrival.arrivalTime < in15VMinutes;
        });
    }
    const sortedArray = filteredArray.sort((a, b) => {
        return a.arrivalTime - b.arrivalTime;
    });
    return sortedArray;
};

module.exports = getTrainsInNextXMins;
