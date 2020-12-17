const getTrainsInNextXMins = require('./getTrainsInNextXMins');

test('returns a list of trains due in the next 15 minutes, at 10 minutes past the hour', () => {
  const destinationArray = [{
    display: "Central Station",
    arrivals: [0, 20, 40],
    startTime: '00:00',
    endTime: '23:59',
  }];
  const minutesInTheFuture = 15;
  const minutesNow = 10;
  const testFunction = getTrainsInNextXMins(destinationArray, minutesInTheFuture, minutesNow);
  expect(testFunction.length).toBe(1);
  expect(testFunction[0].display).toBe("Central Station");
  expect(testFunction[0].arrivalTime).toBe(20);
});

test('returns a list of trains due in the next 15 minutes, that does not include trains that have arrived', () => {
  const destinationArray = [{
    display: "Central Station",
    arrivals: [0, 20, 40],
    startTime: '00:00',
    endTime: '23:59',
  }];
  const minutesInTheFuture = 15;
  const minutesNow = 0;
  const testFunction = getTrainsInNextXMins(destinationArray, minutesInTheFuture, minutesNow);
  expect(testFunction.length).toBe(0);
});

test('returns a list of trains due in the next 10 minutes, at 10 minutes past the hour', () => {
  const destinationArray = [{
    display: "Central Station",
    arrivals: [0, 20, 40],
    startTime: '00:00',
    endTime: '23:59',
  }, {
    display: "West Market",
    arrivals: [6, 12, 18, 24, 30, 36, 42, 48, 54],
    startTime: '00:00',
    endTime: '23:59',
  }];
  const minutesInTheFuture = 11;
  const minutesNow = 10;
  const testFunction = getTrainsInNextXMins(destinationArray, minutesInTheFuture, minutesNow);
  expect(testFunction.length).toBe(3);
  expect(testFunction[0].display).toBe("West Market");
  expect(testFunction[0].arrivalTime).toBe(12);
});

test('returns a list of trains due in the next 15 minutes, at 59 minutes past the hour', () => {
  const destinationArray = [{
    display: "Central Station",
    arrivals: [0, 20, 40],
    startTime: '00:00',
    endTime: '23:59',
  }, {
    display: "West Market",
    arrivals: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54],
    startTime: '00:00',
    endTime: '23:59',
  }];
  const minutesInTheFuture = 15;
  const minutesNow = 59;
  const testFunction = getTrainsInNextXMins(destinationArray, minutesInTheFuture, minutesNow);
  expect(testFunction[0].display).toBe("Central Station");
  expect(testFunction[0].arrivalTime).toBe(60);
  expect(testFunction[1].display).toBe("West Market");
  expect(testFunction[1].arrivalTime).toBe(60);
});
