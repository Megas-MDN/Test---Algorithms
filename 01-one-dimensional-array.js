const getOnlyType = (arr, type) => arr.filter((el) => typeof el === type);

const greaterThan = (arr) => [...arr].sort((a, b) => b - a)[0];

const main = (arr) => {
  if (!Array.isArray(arr))
    throw new Error('Sorry, only array type is allowed!');

  const onlyNumbers = getOnlyType(arr, 'number');
  const onlyStrings = getOnlyType(arr, 'string');
  const highestNumber = greaterThan(onlyNumbers);

  return [onlyNumbers, onlyStrings, highestNumber];
};

module.exports = main;
