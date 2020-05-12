export const query1Url =
  'https://query1.finance.yahoo.com/v7/finance/quote?formatted=true&symbols=$SYMBOL&fields=$FIELDS';
export const query2Url =
  'https://query2.finance.yahoo.com/v10/finance/quoteSummary/$SYMBOL?formatted=true&modules=$FIELDS';
export const scrapingUrl = 'https://finance.yahoo.com/quote/$SYMBOL/history';

export const quoteFields = [
  'messageBoardId',
  'longName',
  'shortName',
  'marketCap',
  'underlyingSymbol',
  'underlyingExchangeSymbol',
  'headSymbolAsString',
  'regularMarketPrice',
  'regularMarketChange',
  'regularMarketChangePercent',
  'regularMarketVolume',
  'regularMarketOpen',
  'fiftyTwoWeekLow',
  'fiftyTwoWeekHigh',
  'toCurrency',
  'fromCurrency',
  'toExchange',
  'fromExchange',
];

export const financialFields = [
  'incomeStatementHistory',
  'cashflowStatementHistory',
  'balanceSheetHistory',
  'incomeStatementHistoryQuarterly',
  'cashflowStatementHistoryQuarterly',
  'balanceSheetHistoryQuarterly',
];

export const ownershipFields = [
  'institutionOwnership',
  'fundOwnership',
  'majorDirectHolders',
  'majorHoldersBreakdown',
  'insiderTransactions',
  'insiderHolders',
  'netSharePurchaseActivity',
  'earningsHistory',
  'earningsTrend',
  'indexTrend',
];
