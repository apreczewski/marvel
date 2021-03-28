
export const formatNumber = ( value: string): number =>
  parseInt(value.replace(/\D/g, '.'));

interface FormatValueData {
  value: string;
  currency?: string;
  code?: string;
}

export const formatValue = ({
  value,
  currency = 'BRL',
  code = 'pt-BR',
}: FormatValueData): string => {

  return new Intl.NumberFormat(code, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(parseFloat(value));
};

interface CalcData {
  amount: string;
  price: string;
  code: string;
  currency: string;
}

export const handleMultiplication = ({
  amount,
  price,
  currency,
  code,
}: CalcData): string => {
  const result = parseFloat(amount) * parseFloat(price);
  if (result.toString() === 'NaN') {
    return formatValue({ value: '0', currency, code });
  }
  return formatValue({ value: result.toString(), currency, code });
};

export const handleDivision = ({
  amount,
  price,
  currency,
  code,
}: CalcData): string => {
  const result = parseFloat(amount) / parseFloat(price);
  if (result.toString() === 'NaN') {
    return formatValue({ value: '0', currency, code });
  }
  return formatValue({ value: result.toString(), currency, code });
};
