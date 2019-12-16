const fs = require("fs").promises;
const path = require("path");
const { intcodeComputer } = require("./intcodeComputer");

const INPUT_FILE = path.join(__dirname, "input.txt");

fs.readFile(INPUT_FILE, "utf8")
  .then(input => input.split(","))
  .then(program =>
    program.map((value, index) => {
      if (index === 1) return 12;
      if (index === 2) return 2;
      return Number(value);
    })
  )
  .then(intcodeComputer)
  .then(output => console.log("Value at position 0:", output[0]));
