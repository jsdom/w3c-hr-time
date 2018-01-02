"use strict";

const { clockIsAccurate } = require("../");

require("./primitives/global-monotonic-clock")();
require("./primitives/performance-common")();
if (clockIsAccurate) {
  require("./primitives/performance-submillisecond")();
} else {
  require("./primitives/performance-integers")();
}
