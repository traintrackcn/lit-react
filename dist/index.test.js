"use strict";

var _index = require("./index");

it('test imports', function () {
  expect(_index.LITPath).toBeTruthy();
  expect(_index.s).toBeTruthy();
  expect(_index.store).toBeTruthy(); // expect(LITComponentHandler).toBeTruthy();

  expect(_index.LITStateHandler).toBeTruthy();
});
