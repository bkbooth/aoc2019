function intcodeComputer(memory) {
  let instructionPointer = 0;
  let opcode = memory[instructionPointer];
  let parameter1Address, parameter2Address, destinationAddress;
  let parameter1, parameter2;
  while (opcode !== 99) {
    parameter1Address = memory[instructionPointer + 1];
    parameter2Address = memory[instructionPointer + 2];
    destinationAddress = memory[instructionPointer + 3];

    parameter1 = memory[parameter1Address];
    parameter2 = memory[parameter2Address];
    memory[destinationAddress] =
      opcode === 1 ? parameter1 + parameter2 : parameter1 * parameter2;

    instructionPointer += 4;
    opcode = memory[instructionPointer];
  }

  return memory;
}

module.exports = { intcodeComputer };
