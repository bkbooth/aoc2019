function getPermutations(options, permutation = []) {
  if (!options.length) return permutation.length ? [permutation] : [];

  return options.reduce((permutations, value, index, options) => {
    const remainingOptions = [...options.slice(0, index), ...options.slice(index + 1)];
    newPermutations = getPermutations(remainingOptions, [...permutation, value]);
    return [...permutations, ...newPermutations];
  }, []);
}

module.exports = { getPermutations };
