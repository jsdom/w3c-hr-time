"use strict";

require("./utils/inaccurate-clock")("all");

const { clockIsAccurate, Performance } = require("../");
const timeoutTest = require("./utils/timeout-test");
const checkPerformanceNowIntegers = require("./utils/performance-now-integers");

test("mocked inaccurate clock: all clocks", () => {
  const performance = new Performance();

  expect(clockIsAccurate).toBe(false);
  checkPerformanceNowIntegers(performance);
  return timeoutTest(performance);
});
