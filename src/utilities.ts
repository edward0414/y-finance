export const makeUrl = (base: string, symbol: string, fields: string[]) => {
  const combinedFields = fields.join('%2C');
  return base.replace('$SYMBOL', symbol).replace('$FIELDS', combinedFields);
};
