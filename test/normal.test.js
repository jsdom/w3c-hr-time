"use strict";

const { clockIsAccurate, Performance } = require("../");
const timeoutTest = require("./utils/timeout-test");
const checkPerformanceNowSubmillisecond = require("./utils/performance-now-submillisecond");
const checkPerformanceNowIntegers = require("./utils/performance-now-integers");

test("normal timing, without any mocked functions", () => {
  const performance = new Performance();

  if (clockIsAccurate) {
    checkPerformanceNowSubmillisecond(performance);
  } else {
    checkPerformanceNowIntegers(performance);
  }

  return timeoutTest(performance);
});
