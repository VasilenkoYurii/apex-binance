const tradingPairs = [
  "BTC-USDT",
  "ETH-USDT",
  "ADA-USDT",
  "XRP-USDT",
  "BNB-USDT",
  "DOT-USDT",
  "SOL-USDT",
  "DOGE-USDT",
  "LTC-USDT",
  "LINK-USDT",
];

export const SelectSymbol = ({ onSymbolChange, symbol }) => {
  return (
    <select onChange={onSymbolChange} value={symbol}>
      {tradingPairs.map((pair, i) => (
        <option key={i}>{pair}</option>
      ))}
    </select>
  );
};
