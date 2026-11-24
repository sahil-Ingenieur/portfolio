export const holdings = [
  { ticker: 'AAPL', name: 'Apple Inc.', quantity: 50, price: 175.5, dayChange: 1.2 },
  { ticker: 'MSFT', name: 'Microsoft Corp.', quantity: 30, price: 380.2, dayChange: -0.8 },
  { ticker: 'GOOGL', name: 'Alphabet Inc.', quantity: 25, price: 165.3, dayChange: 0.5 },
  { ticker: 'AMZN', name: 'Amazon.com Inc.', quantity: 40, price: 185.7, dayChange: -1.1 },
  { ticker: 'TSLA', name: 'Tesla Inc.', quantity: 20, price: 245.8, dayChange: 2.3 },
  { ticker: 'NVDA', name: 'NVIDIA Corp.', quantity: 35, price: 890.1, dayChange: 3.1 },
  { ticker: 'JPM', name: 'JPMorgan Chase & Co.', quantity: 60, price: 210.4, dayChange: 0.4 },
  { ticker: 'BAC', name: 'Bank of America Corp.', quantity: 80, price: 42.6, dayChange: -0.3 },
  { ticker: 'XOM', name: 'Exxon Mobil Corp.', quantity: 45, price: 118.9, dayChange: 0.7 },
  { ticker: 'UNH', name: 'UnitedHealth Group Inc.', quantity: 15, price: 520.3, dayChange: -0.6 },
]

const currentPortfolioValue = holdings.reduce(
  (total, holding) => total + holding.quantity * holding.price,
  0,
)

const previousPortfolioValue = holdings.reduce((total, holding) => {
  const currentHoldingValue = holding.quantity * holding.price
  const previousHoldingValue =
    currentHoldingValue / (1 + holding.dayChange / 100)

  return total + previousHoldingValue
}, 0)

export const portfolioHistory = [
  {
    date: '2026-11-16',
    value: previousPortfolioValue * 0.96,
  },
  {
    date: '2026-11-17',
    value: previousPortfolioValue * 0.975,
  },
  {
    date: '2026-11-18',
    value: previousPortfolioValue * 0.968,
  },
  {
    date: '2026-11-19',
    value: previousPortfolioValue * 0.985,
  },
  {
    date: '2026-11-20',
    value: previousPortfolioValue,
  },
  {
    date: '2026-11-23',
    value: currentPortfolioValue,
  },
]