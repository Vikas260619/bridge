export const currencyFormat = (
  amount: number,
  currency = 'INR',
  locale = 'en-IN'
) => {
  const modulo = 1;
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 4,
  });

  const fraction = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return amount % modulo === 0
    ? fraction.format(amount)
    : formatter.format(amount);
};
