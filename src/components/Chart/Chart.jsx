import ApexChart from "react-apexcharts";

export default function Charts(props) {
  const options = {
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#009e1a",
          downward: "#cf0101",
        },
      },
    },
  };

  const series = [
    {
      data: props.data,
    },
  ];

  return (
    <ApexChart
      options={options}
      series={series}
      type="candlestick"
      width={900}
      height={480}
    />
  );
}
