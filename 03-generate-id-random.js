const bigString = 'abcdefghijklmnopqrstuvwxyz0123456789';

const getRamdomChar = (bigStr) =>
  bigStr[Math.floor(Math.random() * bigStr.length)];

const getNRandom = (num, str = '') =>
  num <= 0 ? str : getNRandom(num - 1, str + getRamdomChar(bigString));

const getNstringsNTimes = (n, num, arr = []) => {
  arr.push(getNRandom(n));
  if (num <= 1) return arr.join('-');
  return getNstringsNTimes(n, num - 1, arr);
};

// console.log(getNstringsNTimes(2, 5)); // z1-yq-jy-5v-r5
module.exports = getNstringsNTimes;
