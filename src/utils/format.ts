
export const formatNumber = ( value: string): number =>
  parseInt(value.replace(/\D/g, '.'));

interface ValueCurrentData {
  value: string;
  currencyValue: string;
  code: string;
}

export const formatCurrency = ({
  value,
  currencyValue,
  code,
}: ValueCurrentData): string => {
  const valueFormatted = formatNumber(value);
  return new Intl.NumberFormat(code, {
    currency: currencyValue,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(parseFloat(valueFormatted.toString()));
};

interface CalcData {
  amount: string;
  price: string;
  code: string;
  currencyValue: string;
}

export const handleMultiplication = ({
  amount,
  price,
  currencyValue,
  code,
}: CalcData): string => {
  const result = parseFloat(amount) * parseFloat(price);
  if (result.toString() === 'NaN') {
    return formatCurrency({ value: '0', currencyValue, code });
  }
  return formatCurrency({ value: result.toString(), currencyValue, code });
};

export const handleDivision = ({
  amount,
  price,
  currencyValue,
  code,
}: CalcData): string => {
  const result = parseFloat(amount) / parseFloat(price);
  if (result.toString() === 'NaN') {
    return formatCurrency({ value: '0', currencyValue, code });
  }
  return formatCurrency({ value: result.toString(), currencyValue, code });
};
