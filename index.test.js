const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  it('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  it('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo  ', bar: '  bar  ', baz: '  baz  ' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  it('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo  ', bar: '  bar  ', baz: '  baz  ' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  })
  it('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo  ', bar: '  bar  ', baz: '  baz  ' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  it('[5] returns the largest number in an array of numbers', () => {
    const result = utils.findLargestInteger([2, 1, 7, 3, 14, 7]);
    expect(result).toBe(14);
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const result = counter.countDown();
    expect(result).toBe(3);
  })
  it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    const firstCall = counter.countDown();
    expect(firstCall).toBe(3);
    const secondCall = counter.countDown();
    expect(secondCall).toBe(2);
  })
  it('[8] the count eventually reaches zero but does not go below zero', () => {
    const firstCall = counter.countDown();
    expect(firstCall).toBe(3);

    const secondCall = counter.countDown();
    expect(secondCall).toBe(2);

    const thirdCall = counter.countDown();
    expect(thirdCall).toBe(1);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    const firstCall = seasons.next();
    expect(firstCall).toBe('summer');
  })
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    const firstCall = seasons.next();
    expect(firstCall).toBe('summer');

    const secondCall = seasons.next();
    expect(secondCall).toBe('fall');
  })
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    const firstCall = seasons.next();
    expect(firstCall).toBe('summer');

    const secondCall = seasons.next();
    expect(secondCall).toBe('fall');

    const thirdCall = seasons.next();
    expect(thirdCall).toBe('winter');
  })
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    const firstCall = seasons.next();
    expect(firstCall).toBe('summer');

    const secondCall = seasons.next();
    expect(secondCall).toBe('fall');

    const thirdCall = seasons.next();
    expect(thirdCall).toBe('winter');

    const fourthCall = seasons.next();
    expect(fourthCall).toBe('spring');
  })
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    const firstCall = seasons.next();
    expect(firstCall).toBe('summer');

    const secondCall = seasons.next();
    expect(secondCall).toBe('fall');

    const thirdCall = seasons.next();
    expect(thirdCall).toBe('winter');

    const fourthCall = seasons.next();
    expect(fourthCall).toBe('spring');

    const fifthCall = seasons.next();
    expect(fifthCall).toBe('summer');
  })
  it('[14] the 40th call of seasons.next returns "spring"', () => {
    // ******************COME BACK TO THIS************************
  //   const fortiethCall = () => {
  //     for (var i = 0; i < 40; i++) {
  //     seasons.next();
  //   }
  // }
  // expect(fortiethCall()).toBe('spring');
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  it('[15] driving the car returns the updated odometer', () => {
    const driving = focus.drive(100);
    expect(driving).toBe(100);

    const moreMiles = focus.drive(100);
    expect(moreMiles).toBe(200);

    const evenMoreMiles = focus.drive(400);
    expect(evenMoreMiles).toBe(600);

    const outOfGas = focus.drive(1);
    expect(outOfGas).toBe(600);
  });

  it('[16] driving the car uses gas', () => {
    const usesGas = focus.drive(90);
    expect(focus).toHaveProperty('fuel', 17);

    const usesAllGas = focus.drive(510);
    expect(focus).toHaveProperty('fuel', 0);
  });

  it('[17] refueling allows to keep driving', () => {
    const emptyFuel = focus.drive(600);
    expect(focus).toHaveProperty('fuel', 0);

    const fillHalfTank = focus.refuel(10);
    expect(focus).toHaveProperty('fuel', 10);

    // only 10 gallons left but we 'put in' 20 and still only 20 gallons in there
    const overfillTank = focus.refuel(20);
    expect(focus).toHaveProperty('fuel', 20);

    // drive some more after refilling. Drain half the tank by going 300 miles which is correct
    const keepDriving = focus.drive(300);
    expect(focus).toHaveProperty('fuel', 10);
  });

  it('[18] adding fuel to a full tank has no effect', () => {
    const noMoreFuel = focus.refuel(1);
    expect(focus.fuel).toBe(20);

    const useTwoGallons = focus.drive(60);
    expect(focus.fuel).toBe(18);

    const fillOneGallon = focus.refuel(1);
    expect(focus.fuel).toBe(19);

    const topOff = focus.refuel(1);
    expect(focus.fuel).toBe(20);
  });

})

describe('[Exercise 7] isEvenNumberAsync', () => {
  it('[19] resolves true if passed an even number', () => {
    utils.isEvenNumberAsync(2)
    .then(result => {
      expect(result).toBe(true);
    })
  })
  it('[20] resolves false if passed an odd number', () => {
    utils.isEvenNumberAsync(1)
    .then(result => {
      expect(result).toBe(false);
    })
  })
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
    utils.isEvenNumberAsync('test')
    .then(result => {
      expect(result).toBe('number must be a number')
    })
  })
  it('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
    utils.isEvenNumberAsync(NaN)
    .then(result => {
      expect(result).toBe('number must be a number')
    })
  })
})
