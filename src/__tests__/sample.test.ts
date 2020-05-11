import yFinance from '../index';

const yFinanceEnginer = new yFinance();

test('Test Async', async () => {
  expect.assertions(1);
  const data = await yFinanceEnginer.getQuote('OXY');
  console.log('data', data);
  expect(data).not.toBe(null);
});
