// sumFunction.test.js
const sum = require("./index");

const tests = [
  {
    coins: [25, 10, 5, 2],
    target: 50,
    response: 2,
  },
  {
    coins: shuffleArray([10, 25, 2, 5]),
    target: 50,
    response: 2,
  },
  {
    coins: [1, 2, 3, 4],
    target: 50,
    response: 13,
  },
  {
    coins: [1],
    target: 50,
    response: 50,
  },
  {
    coins: [1, 10, 20, 30],
    target: -10,
    response: 0,
  },
  {
    coins: [1, 10, 20, 30],
    target: -10,
    response: 0,
  },
  {
    coins: Array.from({ length: 255 }, (_, index) => index + 1),
    target: 299,
    response: 2,
  },
];

tests.map((currentTest, index) =>
  test(`Test ${index} should response ${currentTest.response}`, () => {
    expect(sum(currentTest.coins, currentTest.target)).toBe(
      currentTest.response
    );
  })
);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
