import {Currency} from "../src/js/currency.js";

describe('Currency', () => {
});
test('Declare a Currency Object', () => {
  const myCurrency = new Currency(10, 'usd', 'krw');
  expect(myCurrency).toBeTruthy();
});
