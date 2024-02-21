import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Chart from "react-apexcharts";
export default function MonthlyChart() {
  const orders = useSelector((state) => state.orders);
  
  
  const prices = orders?.map((data) => data?.order?.netPrice);

  const [state, setState] = useState({
    chart: {
      type: "line",
      stroke: {
        curves: "smooth",
      },
    },
    series: [
      {
        name: "Todays Orders",
        data: prices,
      },
    ],
    xaxis: {
      categories: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    },
  });

  return (
    <div id="chart " className='py-3'>
      <Chart
        type="line"
        width={"100%"}
        height={300}
        series={[
          {
            name: "This Month sale",
            data: prices,
          },
        ]}
        options={state}
          ></Chart>
          <div className="text-center text-xl sale">This Month Sale</div>
    </div>
  );
}
