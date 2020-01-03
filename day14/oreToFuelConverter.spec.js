const { runTestCases } = require('../utils/runTestCases');
const { oreToFuelConverter } = require('./oreToFuelConverter');

runTestCases('day14:oreToFuelConverter', oreToFuelConverter, [
  {
    input: [
      { input: '10 ORE', output: '10 A' },
      { input: '1 ORE', output: '1 B' },
      { input: '7 A, 1 B', output: '1 C' },
      { input: '7 A, 1 C', output: '1 D' },
      { input: '7 A, 1 D', output: '1 E' },
      { input: '7 A, 1 E', output: '1 FUEL' },
    ],
    expectedOutput: 31,
  },
  // {
  //   input: [
  //     { input: '9 ORE', output: '2 A' },
  //     { input: '8 ORE', output: '3 B' },
  //     { input: '7 ORE', output: '5 C' },
  //     { input: '3 A, 4 B', output: '1 AB' },
  //     { input: '5 B, 7 C', output: '1 BC' },
  //     { input: '4 C, 1 A', output: '1 CA' },
  //     { input: '2 AB, 3 BC, 4 CA', output: '1 FUEL' },
  //   ],
  //   expectedOutput: 165,
  // },
  // {
  //   input: [
  //     { input: '157 ORE', output: '5 NZVS' },
  //     { input: '165 ORE', output: '6 DCFZ' },
  //     { input: '44 XJWVT, 5 KHKGT, 1 QDVJ, 29 NZVS, 9 GPVTF, 48 HKGWZ', output: '1 FUEL' },
  //     { input: '12 HKGWZ, 1 GPVTF, 8 PSHF', output: '9 QDVJ' },
  //     { input: '179 ORE', output: '7 PSHF' },
  //     { input: '177 ORE', output: '5 HKGWZ' },
  //     { input: '7 DCFZ, 7 PSHF', output: '2 XJWVT' },
  //     { input: '165 ORE', output: '2 GPVTF' },
  //     { input: '3 DCFZ, 7 NZVS, 5 HKGWZ, 10 PSHF', output: '8 KHKGT' },
  //   ],
  //   expectedOutput: 13312,
  // },
  // {
  //   input: [
  //     { input: '2 VPVL, 7 FWMGM, 2 CXFTF, 11 MNCFX', output: '1 STKFG' },
  //     { input: '17 NVRVD, 3 JNWZP', output: '8 VPVL' },
  //     { input: '53 STKFG, 6 MNCFX, 46 VJHF, 81 HVMC, 68 CXFTF, 25 GNMV', output: '1 FUEL' },
  //     { input: '22 VJHF, 37 MNCFX', output: '5 FWMGM' },
  //     { input: '139 ORE', output: '4 NVRVD' },
  //     { input: '144 ORE', output: '7 JNWZP' },
  //     { input: '5 MNCFX, 7 RFSQX, 2 FWMGM, 2 VPVL, 19 CXFTF', output: '3 HVMC' },
  //     { input: '5 VJHF, 7 MNCFX, 9 VPVL, 37 CXFTF', output: '6 GNMV' },
  //     { input: '145 ORE', output: '6 MNCFX' },
  //     { input: '1 NVRVD', output: '8 CXFTF' },
  //     { input: '1 VJHF, 6 MNCFX', output: '4 RFSQX' },
  //     { input: '176 ORE', output: '6 VJHF' },
  //   ],
  //   expectedOutput: 180697,
  // },
  // {
  //   input: [
  //     { input: '171 ORE', output: '8 CNZTR' },
  //     { input: '7 ZLQW, 3 BMBT, 9 XCVML, 26 XMNCP, 1 WPTQ, 2 MZWV, 1 RJRHP', output: '4 PLWSL' },
  //     { input: '114 ORE', output: '4 BHXH' },
  //     { input: '14 VRPVC', output: '6 BMBT' },
  //     { input: '6 BHXH, 18 KTJDG, 12 WPTQ, 7 PLWSL, 31 FHTLT, 37 ZDVW', output: '1 FUEL' },
  //     { input: '6 WPTQ, 2 BMBT, 8 ZLQW, 18 KTJDG, 1 XMNCP, 6 MZWV, 1 RJRHP', output: '6 FHTLT' },
  //     { input: '15 XDBXC, 2 LTCX, 1 VRPVC', output: '6 ZLQW' },
  //     { input: '13 WPTQ, 10 LTCX, 3 RJRHP, 14 XMNCP, 2 MZWV, 1 ZLQW', output: '1 ZDVW' },
  //     { input: '5 BMBT', output: '4 WPTQ' },
  //     { input: '189 ORE', output: '9 KTJDG' },
  //     { input: '1 MZWV, 17 XDBXC, 3 XCVML', output: '2 XMNCP' },
  //     { input: '12 VRPVC, 27 CNZTR', output: '2 XDBXC' },
  //     { input: '15 KTJDG, 12 BHXH', output: '5 XCVML' },
  //     { input: '3 BHXH, 2 VRPVC', output: '7 MZWV' },
  //     { input: '121 ORE', output: '7 VRPVC' },
  //     { input: '7 XCVML', output: '6 RJRHP' },
  //     { input: '5 BHXH, 4 VRPVC', output: '5 LTCX' },
  //   ],
  //   expectedOutput: 2210736,
  // },
]);