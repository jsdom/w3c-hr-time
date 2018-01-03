"use strict";

// Check the Performance interface roughly works.

const { Performance } = require("../../");

const TIMEOUT = 2000;
const DELTA = 20; // ±20 ms
// Jest expects accuracy to be expressed in terms of number of digits after the decimal point.
const NUM_DIGITS = -Math.log10(DELTA * 2);

function testPerformanceCommon() {
  test("performance.now() returns duration from initialization of Performance object", () => {
    const performance = new Performance();

    return new Promise(resolve => {
      setTimeout(resolve, TIMEOUT);
    }).then(() => {
      expect(performance.now()).toBeCloseTo(TIMEOUT, NUM_DIGITS);
    });
  });

  test("performance.timeOrigin returns time at initialization of Performance object", () => {
    const performance = new Performance();
    const now = Date.now();
    expect(performance.timeOrigin).toBeCloseTo(now, NUM_DIGITS);
  });

  test("performance.toJSON() returns an object with timeOrigin", () => {
    const performance = new Performance();
    expect(performance.toJSON()).toEqual({ timeOrigin: performance.timeOrigin });
  });
}

module.exports = testPerformanceCommon;
