import axios from 'axios';

import { query1Url, query2Url, quoteFields, financialFields, ownershipFields } from './constants';
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
    const url = makeUrl(query1Url, symbol, quoteFields);

    try {
      const resp = await axios.get(url);
      const data = resp.data.quoteResponse;

      if (data.error) {
        throw new Error(data.error);
      }

      return data.result;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getFinancials(symbol: string) {
    const url = makeUrl(query2Url, symbol, financialFields);

    try {
      const resp = await axios.get(url);
      const data = resp.data.quoteSummary;

      if (data.error) {
        throw new Error(data.error);
      }

      return data.result;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getOwnership(symbol: string) {
    const url = makeUrl(query2Url, symbol, ownershipFields);

    try {
      const resp = await axios.get(url);
      const data = resp.data.quoteSummary;

      if (data.error) {
        throw new Error(data.error);
      }

      return data.result;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default YahooFinance;
