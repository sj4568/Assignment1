import React, { useState } from 'react'
import MonthlyChart from './Chart';
import Container from './Container/Container';
import OrderList from './OrderList/OrderList';

export default function Order() {
    const [status, setStatus] = useState("pending")
    function ChangeStatus(obj)
    {
        setStatus(obj)
    }
  return (
    <div>
      <div className="header flex bg-rose-400 justify-between place-items-center px-4 py-3">
        <div className="text-2xl text-white">Order List</div>
          </div>
          <div>
              <MonthlyChart/>
          </div>
          <Container handle={ChangeStatus} />
          <div>
              <OrderList status={status}/>
          </div>
    </div>
  );
}
