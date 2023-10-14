export const calculateTotalCost = (
  productPrice = 0,
  shippingCost = 0,
  currency,
  exchangeRates,
  isUsedArticle = false
): number => {
  let exchangeRate;

  if (currency === "zł") {
    exchangeRate = exchangeRates[0];
  } else if (currency === "€") {
    exchangeRate = exchangeRates[1];
  } else {
    throw new Error("Unsupported currency");
  }

  const totalProductPrice = productPrice * exchangeRate;
  const totalShippingCost = (shippingCost + 20) * exchangeRate;
  const total = totalProductPrice + totalShippingCost;

  return +(total + (total / 100) * (isUsedArticle ? 15 : 6)).toFixed(2);
};
