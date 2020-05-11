# y-finance

## Sample Usage

```javascript
import YahooFinance from 'y-finance';

const YahooFinanceEnginer = new YahooFinance();

YahooFinanceEnginer.getQuote('OXY')
  .then((resp) => {
    const data = resp.data.quoteResponse;
    console.log('data', data);
  })
  .catch(console.log);
```
