import axios from 'axios';

import { query1Url, scrapingUrl, query1Fields, query2Url, query2Fields } from './constants';
import { makeUrl } from './utilities';

class yFinance {
  getQuote(symbol: string) {
    const url = makeUrl(query1Url, symbol, query1Fields);

    return axios.get(url);
  }
}

const yFinanceEnginer = new yFinance();
yFinanceEnginer
  .getQuote('OXY')
  .then((resp) => {
    const data = resp.data.quoteResponse;
    console.log('data', data);
  })
  .catch(console.log);

export default yFinance;
