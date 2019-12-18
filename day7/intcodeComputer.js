function intcodeComputer(initialMemory, ...inputs) {
  let memory = [...initialMemory];
  let instructionPointer = 0;
  let inputPointer = 0;
  let outputValue;

  let { opcode, params, paramModes } = parseInstruction(memory[instructionPointer]);
  while (opcode !== 99) {
    if (opcode === 1) {
      // add
      const param1 = getParam(memory, memory[instructionPointer + 1], paramModes[0]);
      const param2 = getParam(memory, memory[instructionPointer + 2], paramModes[1]);
      const destinationAddress = memory[instructionPointer + 3];
      memory[destinationAddress] = param1 + param2;
    } else if (opcode === 2) {
      // multiply
      const param1 = getParam(memory, memory[instructionPointer + 1], paramModes[0]);
      const param2 = getParam(memory, memory[instructionPointer + 2], paramModes[1]);
      const destinationAddress = memory[instructionPointer + 3];
      memory[destinationAddress] = param1 * param2;
    } else if (opcode === 3) {
      // input
      const input = inputs[inputPointer++];
      const destinationAddress = memory[instructionPointer + 1];
      memory[destinationAddress] = input;
    } else if (opcode === 4) {
      // output
      const valueAddress = memory[instructionPointer + 1];
      outputValue = paramModes[0] === 1 ? valueAddress : memory[valueAddress];
    } else if (opcode === 5) {
      // jump-if-true
      const param1 = getParam(memory, memory[instructionPointer + 1], paramModes[0]);
      const param2 = getParam(memory, memory[instructionPointer + 2], paramModes[1]);
      if (param1 !== 0) instructionPointer = param2;
      else instructionPointer += params + 1;
    } else if (opcode === 6) {
      // jump-if-false
      const param1 = getParam(memory, memory[instructionPointer + 1], paramModes[0]);
      const param2 = getParam(memory, memory[instructionPointer + 2], paramModes[1]);
      if (param1 === 0) instructionPointer = param2;
      else instructionPointer += params + 1;
    } else if (opcode === 7) {
      // less than
      const param1 = getParam(memory, memory[instructionPointer + 1], paramModes[0]);
      const param2 = getParam(memory, memory[instructionPointer + 2], paramModes[1]);
      const destinationAddress = memory[instructionPointer + 3];
      memory[destinationAddress] = param1 < param2 ? 1 : 0;
    } else if (opcode === 8) {
      // equals
      const param1 = getParam(memory, memory[instructionPointer + 1], paramModes[0]);
      const param2 = getParam(memory, memory[instructionPointer + 2], paramModes[1]);
      const destinationAddress = memory[instructionPointer + 3];
      memory[destinationAddress] = param1 === param2 ? 1 : 0;
    } else {
      throw new Error(`Unknown upcode ${opcode}`);
    }

    if (opcode !== 5 && opcode !== 6) instructionPointer += params + 1;
    ({ opcode, params, paramModes } = parseInstruction(memory[instructionPointer]));
  }

  return outputValue;
}

const OPCODE_PARAMS = {
  99: 0,
  1: 3,
  2: 3,
  3: 1,
  4: 1,
  5: 2,
  6: 2,
  7: 3,
  8: 3,
};

function parseInstruction(instruction) {
  let padded = String(instruction).padStart(5, '0');

  let opcode = Number(padded.slice(-2));
  let params = OPCODE_PARAMS[opcode];
  let paramModes = Array(params)
    .fill()
    .map((_, index) => {
      const start = -2 - (index + 1);
      const end = start + 1;
      return Number(padded.slice(start, end));
    });

  return { opcode, params, paramModes };
}

function getParam(memory, address, paramMode) {
  return paramMode === 1 ? address : memory[address];
}

module.exports = { intcodeComputer, parseInstruction };
