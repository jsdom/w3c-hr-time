"use strict";

const { getGlobalMonotonicClockMS } = require("../../");

const TIMEOUT = 2000;
const DELTA = 20; // ±20 ms
// Jest expects accuracy to be expressed in terms of number of digits after the decimal point.
const NUM_DIGITS = -Math.log10(DELTA * 2);

function testGlobalMonotonicClock(FACTOR = 1) {
  test("timing works with setTimeout", () => {
    const startDateNow = Date.now();
    const startGlobalMonotonicClock = getGlobalMonotonicClockMS();

    return new Promise(resolve => {
      setTimeout(resolve, TIMEOUT);
    }).then(() => {
      expect(Date.now() - startDateNow).toBeCloseTo(TIMEOUT * FACTOR, NUM_DIGITS);
      expect(getGlobalMonotonicClockMS() - startGlobalMonotonicClock).toBeCloseTo(TIMEOUT, NUM_DIGITS);
    });
  });
}

module.exports = testGlobalMonotonicClock;
