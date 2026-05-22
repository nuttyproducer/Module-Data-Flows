let add = require("./calculator");

test("empty string returns 0", function () {
  expect(add("")).toEqual(0);
});

test("one number returns that number", function () {
  expect(add("5")).toEqual(5);
});

test("two numbers returns their sum", function () {
  expect(add("3,6")).toEqual(9);
});

test("many numbers returns their sum", function () {
  expect(add("1,2,3,4,5")).toEqual(15);
});

test("numbers bigger than 1000 are ignored", function () {
  expect(add("2,1001")).toEqual(2);
});

test("negative numbers throw an error", function () {
  expect(function () {
    add("1,4,-1");
  }).toThrow("negatives not allowed: -1");
});

test("multiple negatives all show in the error", function () {
  expect(function () {
    add("1,-2,-3");
  }).toThrow("negatives not allowed: -2, -3");
});
