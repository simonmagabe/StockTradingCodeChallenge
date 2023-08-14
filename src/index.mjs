import "./styles.css";

const prices = [7, 1, 5, 3, 6, 4];

const calculateMaxProfit = prices => {
  if (!prices || prices.length === 0) {
    return 0;
  }

  let lowestPrice = prices[0];
  let maximumProfit = 0;
  
  prices.forEach(price => {
    if (price < lowestPrice) {
      lowestPrice = price;
    } else {
      maximumProfit = Math.max(maximumProfit, price - lowestPrice);
    }
  })
  return maximumProfit;
}
calculateMaxProfit(prices);

document.getElementById("app").innerHTML = `
<h1>StockBuying!</h1>
<article>
  <p>Maximum Profit: <span><strong>$${calculateMaxProfit(prices)}</strong></span></p>
</Article>
`;