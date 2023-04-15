# Algorithms and Data Structure

This repository contains solutions for three different algorithm problems in JavaScript. Each problem has its own file and a function that implements the solution. Additionally, there is an index.js file that calls each of these functions and uses Node.js's assert library to perform unit tests on each function.

<hr>

## 🧐 Features

### Problem 1: One-Dimensional Array

The first problem involves manipulating a one-dimensional array containing letters and numbers. The solution to this problem can be found in the 01-one-dimensional-array.js file, which contains the following functions:

`arrString(array)`: Returns an array with only the letters from the input one-dimensional array.

`arrNumber(array)`: Returns an array with only the numbers from the input one-dimensional array.

`highNumber(array)`: Returns the highest number in the input one-dimensional array.

### Problem 2: Hashmap Functions

The second problem involves creating a hashmap containing elementary addition, subtraction, multiplication, and division functions. The solution to this problem can be found in the 02-hasmap-functions.js file, which contains the following function:

hashMap[``operation`` ](operands \_): Returns the result of the specified operation on the provided operands. The supported operations are addition (`sum`), subtraction (`subtraction`), multiplication (`multiplication`), and division (`division`). Division is not allowed with a dividend of zero and only allows division of two numbers. The function accepts an array of operands for addition, subtraction, and multiplication.

### Problem 3: Random ID Pattern

The third problem involves generating a random ID pattern with alphanumeric characters. The solution to this problem can be found in the 03-generate-id-random.js file, which contains the following function:

`generateId()`: Returns a string with the random ID pattern XXXX-AAAA-BBBB-CCCC, where XXXX, AAAA, BBBB, and CCCC are random alphanumeric characters.
`Ex: 3zsd-7tbt-84az-l53v`

The `generateId(option1: number | undefined, option2: number | undefined)`: function also accepts 2 optional parameters, the first one says how many characters per set of strings will be generated (default: nChar = 4, numStrngs = 4), ex: generateId(2) : xy-k3-Y0- 3w
The second parameter determines how many sets of strings will be generated,
ex: generateId(undefined, 3): 1234-xyzk-01jL.

### Unit Tests

The index.js file calls each function to run unit tests. Tests are written using Node.js's assert library and verify that the output of each function is correct for different inputs. To run the tests, simply execute the index.js file using Node.js in the terminal:

```bash
node index.js
```

<hr>

## 🛠️ Install project

1. Clone the repository

```bash
git clone https://github.com/Megas-MDN/Test---Algorithms.git
```

2. Enter the cloned folder

```bash
cd Test---Algorithms
```

3. Run tests

```bash
npm test
```

<hr>

## 💻 Built with:

- [javascript](https://www.w3schools.com/js/js_es6.asp): Language
- [Nodejs](https://nodejs.org/en): Engine

<hr>
<p align="center">
Developed with ❤️ by Megas
</p>
