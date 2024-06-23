import Freecurrencyapi from '@everapi/freecurrencyapi-js';

export const convertCurrency = async (amount, fromCurrency, toCurrency) => {
  try {
    const freecurrencyapi = new Freecurrencyapi('fca_live_ekhVu2b0cPklCtXzFf7OzqD7KpJ1Wls3Rpoyu8il');

    const response = await freecurrencyapi.latest({
      base_currency: fromCurrency,
      currencies: toCurrency
    });

    const conversionRate = response.data[toCurrency];

    if (!conversionRate) {
      throw new Error(`Conversion rate not available for ${toCurrency}`);
    }

    const convertedAmount = amount * conversionRate;

    console.log(`Conversion rate from ${fromCurrency} to ${toCurrency}: ${conversionRate}`);
    console.log(`Converted amount: ${convertedAmount}`);

    return convertedAmount;
  } catch (error) {
    console.error("Currency conversion error:", error);
    return null;
  }
};
