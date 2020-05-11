import yFinance from '../index';

const yFinanceEnginer = new yFinance();

test('Test Async', () => {
  yFinanceEnginer.getQuote('OXY').then((data) => {
    expect(data).not.toBe(null);
  });
});
