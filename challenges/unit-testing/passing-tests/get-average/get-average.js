// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let sum = 0;
  let count = 0;

  for (const item of numbers) {
    if (typeof item === "number") {
      sum = sum + item;
      count = count + 1;
    }
  }

  return sum / count;
}

module.exports = average;
