"use strict";

// Emulate clock drift.

const realDateNow = Date.now;

const FACTOR = 0.6;
const start = realDateNow();

Date.now = () => {
  return start + Math.round((realDateNow() - start) * FACTOR);
};

module.exports = FACTOR;
