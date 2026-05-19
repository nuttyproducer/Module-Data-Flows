// =================
// Stripped down cowsayer CLI,
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

// 1. Make a command line interface using readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 2. Make supplies for our speech bubble
const topLine = "_";
const bottomLine = "-";

// 3. Make a cow that takes a string
const cow = (saying) => {
  if (!saying) {
    saying = "Moo!";
  }

  const bubbleLength = saying.length + 2;
  const top = " " + topLine.repeat(bubbleLength);
  const bottom = " " + bottomLine.repeat(bubbleLength);
  const middle = `< ${saying} >`;

  const cowArt = // Added some cow dung in the grassy fields... :)
    "        \\   ^__^                        °\n" +
    "         \\  (oo)\\_______                 °\n" +
    "            (__)\\       )\\/\\            °_\n" +
    "                ||----w |               (_)\n" +
    "                ||     ||              (___)";

  return `${top}\n${middle}\n${bottom}\n${cowArt}`;
};

// 4. Use readline to get a string from the terminal
rl.question("What should the cow say? ", (answer) => {
  console.log(cow(answer));
  rl.close();
});
