const assert = require('assert');

const oneDimensionalArray = require('./01-one-dimensional-array');
const hashMap = require('./02-hasmap-functions');
const generateId = require('./03-generate-id-random');

// Testes unitários
try {
  // oneDimensionalArray
  console.log('Tests oneDimensionalArray');

  const inputMixArray = ['a', 10, 'b', 'hola', 122, 15];
  const { arrNumber, arrString, highNumber } = oneDimensionalArray();

  assert.deepEqual(['a', 'b', 'hola'], arrString(inputMixArray));
  assert.deepEqual([10, 122, 15], arrNumber(inputMixArray));
  assert.equal(122, highNumber(inputMixArray));

  // hashMap
  console.log('Tests hashMap');
  const arrSum = [
    0,
    -1,
    [5, 3],
    [1, 3],
    [-5, [4, ['z', 1], 6, [3], 1], 5],
    [2, 5],
    -3,
    'k',
  ];
  assert.equal(3, hashMap.sum(1, 2));
  assert.equal(30, hashMap.sum(arrSum));

  assert.equal(-30, hashMap.subtraction(arrSum));
  assert.equal(42, hashMap.subtraction(57, 7, 8));

  assert.equal(24, hashMap.multiplication(1, 2, 3, 4));
  assert.equal(0, hashMap.multiplication(arrSum));
  assert.equal(24, hashMap.multiplication([1, [2, 3], [4, 1]]));

  assert.throws(() => {
    throw new Error("Can't divide by zero");
  }, hashMap.division(1, 0));

  assert.equal(0.1, hashMap.division(1, 10));
  assert.equal(2, hashMap.division(10, 5));

  // generateId
  console.log('Tests generateId');

  const id = generateId();
  const id2 = generateId(2, 5);
  const id3 = generateId(5, 2);

  const regex4by4 =
    /^[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}$/gm;
  const regex2by5 =
    /^[a-zA-Z0-9]{2}-[a-zA-Z0-9]{2}-[a-zA-Z0-9]{2}-[a-zA-Z0-9]{2}-[a-zA-Z0-9]{2}$/gm;
  const regex5by2 = /^[a-zA-Z0-9]{5}-[a-zA-Z0-9]{5}$/gm;

  assert.equal(true, regex4by4.test(id)); // Exemplo: 3zsd-7tbt-84az-l53v
  assert.equal(false, regex4by4.test(id2)); // Exemplo: fd-4t-a5-pw-bf
  assert.equal(false, regex4by4.test(id3)); // Exemplo: uh40i-1ehg5

  assert.equal(true, regex2by5.test(id2));
  assert.equal(true, regex5by2.test(id3));

  console.log('End of tests');
} catch (error) {
  console.log(error);
}
