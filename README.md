# y-finance

## Sample Usage

```javascript
const YahooFinance = require('@edward0414/yahoo-finance');

const YahooFinanceEnginer = new YahooFinance();

YahooFinanceEnginer.getQuote('MSFT')
  .then((data) => {
    console.log('data', data);
  })
  .catch(console.log);

YahooFinanceEnginer.getFinancials('MSFT')
  .then((data) => {
    console.log('data', data);
  })
  .catch(console.log);

YahooFinanceEnginer.getOwnership('MSFT')
  .then((data) => {
    console.log('data', data);
  })
  .catch(console.log);
```
