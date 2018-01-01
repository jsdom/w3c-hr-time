"use strict";

// Check fractional parts of performance.now().

const checkPerformanceNowSubmillisecond = performance => {
  const start = performance.now();
  const end = performance.now();
  expect(end - start).toBeGreaterThan(0);
  expect(end - start).toBeLessThan(1);
};

module.exports = checkPerformanceNowSubmillisecond;
