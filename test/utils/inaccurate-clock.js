"use strict";

// Emulate inaccurate clock.

const realHrtime = process.hrtime;

function delay(func) {
  return (...args) => {
    const delayNS = 1e6; // 1 ms delay in clock
    const start = realHrtime();
    let duration = realHrtime(start);
    while (duration[0] < 1 && duration[1] < delayNS) {
      duration = realHrtime(start);
    }
    return func(...args);
  };
}

function mock(target) {
  if (target === "all" || target === "Date.now") {
    Date.now = delay(Date.now);
  }
  if (target === "all" || target === "process.hrtime") {
    process.hrtime = delay(process.hrtime);
  }
}

module.exports = mock;
