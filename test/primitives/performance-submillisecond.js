"use strict";

// Check fractional parts of performance.now() and performance.timeOrigin.

const { Performance } = require("../../");

function testPerformanceSubmillisecond() {
  test("performance.now() has submillisecond resolution", () => {
    const performance = new Performance();
    const start = performance.now();
    const end = performance.now();
    expect(end - start).toBeGreaterThan(0);
    expect(end - start).toBeLessThan(1);
  });

  test("performance.timeOrigin has submillisecond resolution", () => {
    const start = new Performance().timeOrigin;
    const end = new Performance().timeOrigin;
    expect(end - start).toBeGreaterThan(0);
    expect(end - start).toBeLessThan(1);
  });
}

module.exports = testPerformanceSubmillisecond;
