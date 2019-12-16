const fs = require("fs").promises;
const path = require("path");
const { intcodeComputer } = require("./intcodeComputer");

const INPUT_FILE = path.join(__dirname, "input.txt");
const DESIRED_OUTPUT = 19690720;

fs.readFile(INPUT_FILE, "utf8")
  .then(input => input.split(","))
  .then(memory => memory.map(Number))
  .then(memory => {
    for (let noun = 0; noun < 100; noun++) {
      for (let verb = 0; verb < 100; verb++) {
        let output = intcodeComputer([
          memory[0],
          noun,
          verb,
          ...memory.slice(3)
        ]);
        if (output[0] === DESIRED_OUTPUT) {
          return { noun, verb };
        }
      }
    }
    throw new Error("Noun and verb not found.");
  })
  .then(({ noun, verb }) =>
    console.log(`100 * ${noun} (noun) + ${verb} (verb) = ${100 * noun + verb}`)
  );
