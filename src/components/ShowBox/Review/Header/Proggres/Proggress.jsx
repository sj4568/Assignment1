import React from 'react'
import Bar from './Bar/Bar';

export default function Proggress() {
  return (
    <div className="sale flex flex-col lg:w-auto w-fulll lg:px-5">
          <Bar
              star={5}
              color={"bg-green-300"}
              amount={3}
              percent={30}
          />
      <Bar />
      <Bar />
      <Bar />
      <Bar />
    </div>
  );
}
