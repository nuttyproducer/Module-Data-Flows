let removeVowelsFromWords = require("./remove-vowels-in-array");

test("removes vowels from all words in the array", function () {
  // Arrange
  const words = ["Irina", "Etza", "Daniel"];

  // Act
  const result = removeVowelsFromWords(words);

  // Assert
  expect(result).toEqual(["rn", "tz", "Dnl"]);
});

test("the original array is not changed", function () {
  // Arrange
  const words = ["Irina", "Etza", "Daniel"];

  // Act
  removeVowelsFromWords(words);

  // Assert
  expect(words).toEqual(["Irina", "Etza", "Daniel"]);
});
