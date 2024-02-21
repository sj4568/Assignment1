import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux';
export default function DailyChart() {
  const orders = useSelector(state => state.orders)
  const currentDate = new Date().toDateString().split(" ").join("_")
  const ondayData = orders?.filter(data => data?.order?.date === currentDate)
  const prices = ondayData?.map(data => data?.order?.netPrice)
  console.log(prices);
  console.log(currentDate);
    const [state, setState] = useState({
      chart: {
            type: "line",
            stroke: {
              curves:"smooth"
          }
      },
      series: [
        {
          name: "Todays Orders",
          data: prices,
        },
      ],
      xaxis: {
        categories: [0,100,200,300,400,500,600,700,800,900,1000],
      },
    });
    
  return (
      <div id='chart'>
          <Chart
              type='line'
            
              width={"100%"}
              height={300}
              
              series={
                  [
                      {
                          name: "Today sale",
                          data:[400,300,22,329]
                      }
                  ]
              }
              options={state}
          >
              
        </Chart>
    </div>
  )
}
