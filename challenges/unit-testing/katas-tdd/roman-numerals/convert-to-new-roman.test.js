let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1", () => {
  expect(convertToNewRoman(1)).toEqual("I");
});

test("returns IV for 4", () => {
  expect(convertToNewRoman(4)).toEqual("IV");
});

test("returns IX for 9", () => {
  expect(convertToNewRoman(9)).toEqual("IX");
});

test("returns XIV for 14", () => {
  expect(convertToNewRoman(14)).toEqual("XIV");
});

test("returns XLIV for 44", () => {
  expect(convertToNewRoman(44)).toEqual("XLIV");
});

test("returns XCIX for 99", () => {
  expect(convertToNewRoman(99)).toEqual("XCIX");
});

test("returns CD for 400", () => {
  expect(convertToNewRoman(400)).toEqual("CD");
});

test("returns CMXLIV for 944", () => {
  expect(convertToNewRoman(944)).toEqual("CMXLIV");
});
