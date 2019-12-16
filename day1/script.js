const fs = require("fs").promises;
const path = require("path");
const calculateFuel = require("./calculateFuel");

const INPUT_FILE = path.join(__dirname, "input.txt");

fs.readFile(INPUT_FILE, "utf8")
  .then(input => input.split("\n"))
  .then(masses =>
    masses
      .map(Number)
      .map(calculateFuel)
      .reduce((sum, mass) => sum + mass, 0)
  )
  .then(fuelRequired => console.log("Fuel required:", fuelRequired));
