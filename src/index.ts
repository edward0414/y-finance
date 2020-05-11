import axios from 'axios';

import { query1Url, scrapingUrl, query1Fields, query2Url, query2Fields } from './constants';
import { makeUrl } from './utilities';

class YahooFinance {
  getQuote(symbol: string) {
    const url = makeUrl(query1Url, symbol, query1Fields);

    return axios.get(url);
  }
}

export default YahooFinance;
