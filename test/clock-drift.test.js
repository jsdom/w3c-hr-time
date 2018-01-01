"use strict";

const FACTOR = require("./utils/slow-down-clock");

const { Performance } = require("../");
const timeoutTest = require("./utils/timeout-test");

test("mocked clock drift", () => {
  const performance = new Performance();
  return timeoutTest(performance, FACTOR);
});
