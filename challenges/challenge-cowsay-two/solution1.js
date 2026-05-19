// =================
// Stripped down cowsayer CLI,
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments

const cowInput = process.argv[2]; // first argument after the script name

// 2. Make supplies for our speech bubble

let topLine = "_";
let bottomLine = "-";
let saying = "";

// 3. Make a cow that takes a string

function cowsay(saying) {
  // default message when nothing is provided
  if (!saying) {
    saying = "Moo!";
  }

  // build bubble lengths: message + one space both sides
  const bubbleLength = saying.length + 2;

  const top = " " + topLine.repeat(bubbleLength);
  const bottom = " " + bottomLine.repeat(bubbleLength);
  const middle = `< ${saying} >`;

  // cow ASCII art
  const cowArt =
    "        \\\   ^__^\n" +
    "         \\\  (oo)\\_______\n" +
    "            (__)\\       )\\/\\\n" +
    "                ||----w |\n" +
    "                ||     ||";

  // combine parts and return full string
  return `${top}\n${middle}\n${bottom}\n${cowArt}`;
}

//4. Pipe argument into cowsay function and return a cow

console.log(cowsay(cowInput));
