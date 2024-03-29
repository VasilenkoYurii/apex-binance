import axios from "axios";

export async function getCandles(symbol = "BTCUSDT", interval = "1m") {
  const correctSymbol = symbol.split("-").join("").toUpperCase();
  const response = await axios.get(
    `https://api.binance.com/api/v3/klines?symbol=${correctSymbol}&interval=${interval}&limit=100`
  );
  const candles = response.data.map((candle) => {
    return {
      x: new Date(candle[0]),
      y: [
        parseFloat(candle[1]),
        parseFloat(candle[2]),
        parseFloat(candle[3]),
        parseFloat(candle[4]),
      ],
    };
  });

  return candles;
}
