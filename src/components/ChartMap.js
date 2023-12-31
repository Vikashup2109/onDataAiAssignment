import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const AreaChart = ({ apiData, profile }) => {
  const [series, setSeries] = useState([
    {
      name: "Cash Balance",
      data: Object.values(apiData[profile].cashBalanceHistory),
    },
  ]);

  useEffect(() => {
    setSeries([
      {
        name: "Cash Balance",
        data: Object.values(apiData[profile].cashBalanceHistory),
      },
    ]);
  }, [profile, apiData]);

  const [options] = useState({
    chart: {
      type: "area",
      // height: 350,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    xaxis: {
      type: "month",
      categories: Object.keys(apiData[profile].cashBalanceHistory),
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: "#EAF5FF",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#FFF",
            opacity: 1,
          },
        ],
      },
    },
  });

  return (
    <div id="chart" className="w-full sm:w-[400px]">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        // height={350}
        // width={400}
        className="w-full sm:w-[400px]"
      />
    </div>
  );
};

export default AreaChart;
