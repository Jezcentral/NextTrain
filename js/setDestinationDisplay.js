const setDestinationDisplay = (trainOrderNumber, destinationObject, vMinutes) => {
    return `${trainOrderNumber} ${destinationObject.display} ${destinationObject.arrivalTime - vMinutes} ${destinationObject.arrivalTime - vMinutes === 1 ? 'min' : 'mins'}`;
};

module.exports = setDestinationDisplay;
