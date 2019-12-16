function intcodeComputer(program) {
  let index = 0;
  let opcode = program[index];
  let operand1, operand2;
  while (opcode !== 99) {
    operand1 = program[program[index + 1]];
    operand2 = program[program[index + 2]];
    program[program[index + 3]] =
      opcode === 1 ? operand1 + operand2 : operand1 * operand2;
    index += 4;
    opcode = program[index];
  }
  return program;
}

module.exports = { intcodeComputer };
