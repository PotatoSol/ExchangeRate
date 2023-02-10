import {Currency} from "../src/js/currency.js";

describe('Currency', () => {
});
test('Declare a Currency Object', () => {
  const myCurrency = new Currency();
  expect(myCurrency).toBeTruthy();
});

