const FROM_CHEMICAL = 'ORE';
const TO_CHEMICAL = 'FUEL';

const cachedReactions = {};

function oreToFuelConverter(chemicalReactions) {
  const toReaction = findReaction(chemicalReactions, TO_CHEMICAL);
  return countFromChemicals(chemicalReactions, toReaction, FROM_CHEMICAL);
}

function countFromChemicals(chemicalReactions, toReaction, fromChemical) {
  return toReaction.inputs.reduce((sum, input) => {
    if (input.chemical === fromChemical) {
      return sum + Math.ceil(toReaction.quantity / input.quantity);
    } else {
      const toReaction = findReaction(chemicalReactions, input.chemical);
      return (
        sum +
        Math.ceil(toReaction.quantity / input.quantity) *
          countFromChemicals(chemicalReactions, toReaction, fromChemical)
      );
    }
  }, 0);
}

function findReaction(chemicalReactions, chemicalToFind) {
  let cachedReaction = cachedReactions[chemicalToFind];
  if (cachedReaction) return cachedReaction;

  let reaction = chemicalReactions.find(({ output }) => {
    const { chemical } = parseChemical(output);
    return chemical === chemicalToFind;
  });
  console.log({ chemicalToFind, reaction });
  const { chemical, quantity } = parseChemical(reaction.output);
  const inputs = reaction.input.split(', ').map(input => parseChemical(input));
  //   const { chemical, quantity } = parseChemical(input);
  //   return { chemical, quantity };
  //   return inputs;
  // }, {});

  const result = { chemical, quantity, inputs };
  cachedReactions[chemical] = result;
  return result;
}

function parseChemical(input) {
  let [quantity, chemical] = input.split(' ');
  quantity = Number(quantity);
  return { chemical, quantity };
}

module.exports = { oreToFuelConverter };
