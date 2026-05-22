let convertToOldRoman = require("./convert-to-old-roman");

test("returns I for 1", () => {
  expect(convertToOldRoman(1)).toEqual("I");
});

test("returns III for 3", () => {
  expect(convertToOldRoman(3)).toEqual("III");
});

test("returns IIII for 4", () => {
  expect(convertToOldRoman(4)).toEqual("IIII");
});

test("returns VII for 7", () => {
  expect(convertToOldRoman(7)).toEqual("VII");
});

test("returns XV for 15", () => {
  expect(convertToOldRoman(15)).toEqual("XV");
});

test("returns XVIII for 18", () => {
  expect(convertToOldRoman(18)).toEqual("XVIII");
});

test("returns XXII for 22", () => {
  expect(convertToOldRoman(22)).toEqual("XXII");
});
