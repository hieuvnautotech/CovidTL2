import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = (data) => {
  return {
    title: {
      text: "Tổng ca nhiễm",
    },

    xAxis: {
      tickInterval: 1,
      type: "logarithmic",
      accessibility: {
        rangeDescription: "Range: 1 to 10",
      },
    },

    yAxis: {
      type: "logarithmic",
      minorTickInterval: 0.1,
      accessibility: {
        rangeDescription: "Range: 0.1 to 1000",
      },
    },

    tooltip: {
      headerFormat: "<b>{series.name}</b><br />",
      pointFormat: "x = {point.x}, y = {point.y}",
    },

    series: [
      {
        data: data.map((item)=>item.Confirmed)
      },
    ],
  };
};
export default function LineChart({ data }) {
  console.log('chartData', data)

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
