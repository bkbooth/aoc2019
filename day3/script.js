const fs = require("fs").promises;
const path = require("path");
const { intersectingDistanceBySteps } = require("./intersectingDistance");

const INPUT_FILE = path.join(__dirname, "input.txt");

fs.readFile(INPUT_FILE, "utf8")
  .then(input => input.split("\n"))
  .then(inputs => inputs.map(input => input.split(",")))
  .then(([path1, path2]) => intersectingDistanceBySteps(path1, path2))
  .then(distance =>
    console.log("Closest intersecting distance by steps:", distance)
  );
