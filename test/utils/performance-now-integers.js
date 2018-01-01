"use strict";

// Check performance.now() always returns integers.

const checkPerformanceNowIntegers = performance => {
  const start = performance.now();
  expect(Number.isInteger(start)).toBe(true);
  let end;
  do {
    end = performance.now();
  } while (end === start);
  expect(Number.isInteger(end)).toBe(true);
};

module.exports = checkPerformanceNowIntegers;
