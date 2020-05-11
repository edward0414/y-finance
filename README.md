# y-finance

## Sample Usage

```javascript
const YahooFinance = require('@edward0414/yahoo-finance');

const YahooFinanceEnginer = new YahooFinance();

YahooFinanceEnginer.getQuote('MSFT')
  .then((resp) => {
    const data = resp.data.quoteResponse;
    console.log('data', data);
  })
  .catch(console.log);
```
