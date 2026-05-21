let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  const numbers = [3, 21, 88, 4, 36];

  // Act
  const result = getLargestNumber(numbers);

  // Assert
  expect(result).toEqual(88);
});

test("the original array is not changed", function () {
  // Arrange
  const numbers = [3, 21, 88, 4, 36];

  // Act
  getLargestNumber(numbers);

  // Assert - array should still be the same
  expect(numbers).toEqual([3, 21, 88, 4, 36]);
});
