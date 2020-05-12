const YahooFinance = require('../index');

const YahooFinanceEnginer = new YahooFinance();

test('Test getQuote', () => {
  YahooFinanceEnginer.getQuote('MSFT').then((data: any) => {
    expect(data).not.toBe(null);
  });
});

test('Test getFinancials', () => {
  YahooFinanceEnginer.getFinancials('MSFT').then((data: any) => {
    expect(data).not.toBe(null);
  });
});

test('Test getOwnership', () => {
  YahooFinanceEnginer.getOwnership('MSFT').then((data: any) => {
    expect(data).not.toBe(null);
  });
});
