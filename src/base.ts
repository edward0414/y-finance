import axios from 'axios';

import { query1Url, scrapingUrl, query1Fields, query2Url, query2Fields } from './constants';
import { makeUrl } from './utilities';

interface DataField {
  raw: string | number;
  format: string;
}

interface Data {
  fullExchangeName: string;
  symbol: string;
  shortName: string;
  longName: string;
  marketCap: DataField;
  regularMarketDayRange: DataField;
  regularMarketPrice: DataField;
  regularMarketVolume: DataField;
  regularMarketDayHigh: DataField;
  regularMarketDayLow: DataField;
  regularMarketChange: DataField;
  regularMarketChangePercent: DataField;
  regularMarketOpen: DataField;
  regularMarketPreviousClose: DataField;
}

class YahooFinance {
  async getQuote(symbol: string) {
    const url = makeUrl(query1Url, symbol, query1Fields);

    try {
      const resp = await axios.get(url);
      const data = resp.data.quoteResponse;

      if (data.error) {
        // throw err
      }

      return data.result;
    } catch (err) {
      // throw err
    }
  }

  async getFinancials(symbol: string) {
    const url = makeUrl(query2Url, symbol, query2Fields);

    try {
      const resp = await axios.get(url);
      const data = resp.data.quoteSummary;

      if (data.error) {
        // throw err
      }

      return data.result;
    } catch (err) {
      // throw err
    }
  }
}

export default YahooFinance;
