const flatAll = (arr) =>
  arr.flat().reduce((ar, element) => {
    if (Array.isArray(element)) {
      return flatAll([...ar, ...element]);
    }
    if (typeof element !== 'number') return ar;
    ar.push(element);
    return ar;
  }, []);

const hashMap = {
  sum: (...arr) => flatAll(arr).reduce((a, b) => a + b),
  subtraction: (...arr) => flatAll(arr).reduce((a, b) => a - b),
  multiplication: (...arr) => flatAll(arr).reduce((a, b) => a * b),
  division: (a, b) => (b !== 0 ? a / b : new Error("Can't divide by zero")),
};
// console.log(hashMap.sum([5, [5, [5, [5, [5]]]]])); // 25

module.exports = hashMap;
