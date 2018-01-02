"use strict";

// Check performance.now() always returns integers.

const { Performance } = require("../../");

function testPerformanceIntegers() {
  test("performance.now() always returns integers", () => {
    const performance = new Performance();
    const start = performance.now();
    expect(Number.isInteger(start)).toBe(true);
    let end;
    do {
      end = performance.now();
    } while (end === start);
    expect(Number.isInteger(end)).toBe(true);
  });

  test("performance.timeOrigin always returns integers", () => {
    const start = new Performance().timeOrigin;
    expect(Number.isInteger(start)).toBe(true);
    let end;
    do {
      end = new Performance().timeOrigin;
    } while (end === start);
    expect(Number.isInteger(end)).toBe(true);
  });
}

module.exports = testPerformanceIntegers;
