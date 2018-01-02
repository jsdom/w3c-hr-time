"use strict";

const FACTOR = require("./utils/slow-down-clock");

require("./primitives/global-monotonic-clock")(FACTOR);
require("./primitives/performance-common")();
