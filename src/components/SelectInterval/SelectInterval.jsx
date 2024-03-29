const intervals = ["30m", "1h", "6h", "12h", "1d", "3d", "1w", "1M"];

export const SelectInterval = ({ onIntervalChange, interval }) => {
  return (
    <select onChange={onIntervalChange} value={interval}>
      {intervals.map((interval, i) => (
        <option key={i}>{interval}</option>
      ))}
    </select>
  );
};
