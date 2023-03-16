const getPercents = require('./index.js');
xtest('gets 5% of 80', ( ) => {
  expect(getPercents(5, 80)).toBe(8);
});

xtest.failing('it is not number', () => {
  expect(getPercents(j, 80)).toBe(8); // this test will pass
});

test.skip.failing('it is not number', () => {
  expect(getPercents(j, 80)).toBe(8); // this test will pass
});