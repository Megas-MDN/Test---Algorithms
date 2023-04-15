const getOnlyType = (arr, type) => arr.filter((el) => typeof el === type);

const greaterThan = (arr) => [...arr].sort((a, b) => b - a)[0];

const main = () => {
  const arrNumber = (arr) => getOnlyType(arr, 'number');
  const arrString = (arr) => getOnlyType(arr, 'string');
  const highNumber = (arr) => greaterThan(arrNumber(arr));

  return { arrNumber, arrString, highNumber };
};

module.exports = main;
