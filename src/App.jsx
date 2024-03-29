import { useState, useEffect } from "react";
import { getCandles } from "./helpers/getCandles";

import { SelectSymbol } from "./components/SelectSymbol/SelectSymbol";
import { SelectInterval } from "./components/SelectInterval/SelectInterval";
import Charts from "./components/Chart/Chart";

function App() {
  const [symbol, setSymbol] = useState("BTCUSDT");
  const [interval, setInterval] = useState("30m");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const newData = await getCandles(symbol, interval);
        setData(newData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [symbol, interval]);

  function onSymbolChange(event) {
    setSymbol(event.target.value);
  }

  function onIntervalChange(event) {
    setInterval(event.target.value);
  }

  return (
    <div className="wrapper">
      <div>
        <SelectSymbol onSymbolChange={onSymbolChange} symbol={symbol} />
        <SelectInterval
          onIntervalChange={onIntervalChange}
          interval={interval}
        />
      </div>

      {loading ? <p>Loading...</p> : <Charts data={data} />}
    </div>
  );
}

export default App;
