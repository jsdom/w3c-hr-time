"use strict";

global.Date = {
    now: () => 0,
};

it("imports successfully when Date is faked", () => {
    require("../");
});
