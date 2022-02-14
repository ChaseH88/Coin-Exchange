/**
 * Utility function to format a number as currency.
 * @param number
 * @returns
 */
const formatCurrency = (number: number) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(number);
}

export { formatCurrency };
