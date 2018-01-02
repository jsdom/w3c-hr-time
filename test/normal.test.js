"use strict";

const { clockIsAccurate } = require("../");

require("./primitives/global-monotonic-clock")();
require("./primitives/performance-common")();
if (clockIsAccurate) {
  // eslint-disable-next-line global-require
  require("./primitives/performance-submillisecond")();
} else {
  // eslint-disable-next-line global-require
  require("./primitives/performance-integers")();
}
