const { sumar } = require('../src/index');

test('suma 2 + 3 = 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('suma -1 + 1 = 0', () => {
  expect(sumar(-1, 1)).toBe(0);
});