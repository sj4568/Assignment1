import React, { useState } from "react";
import { useSelector } from "react-redux";
import Ordermini from "./miniOrder";



export default function OrderBox({ data, id }) {
    
    
    const [show, setShow] = useState(false)
    function change()
    {
        setShow(prev => {
            return prev===true?false:true
        })
    }
  const users = useSelector((state) => state.users);
  const user = users?.filter((state) => state._id == data?.userId)[0];
    const pay = data?.method;
    const products = data?.products
    
    const arr = products?.map(dat => {
        return <Ordermini data={dat} pro_id={id} />
    })
  return (
    <div className="px-3 py-3 sale shadow-sm">
      <div className="flex justify-between ">
        <div className="text-thin">Order Id #{id}</div>
        <div>
          <button className="px-2 py-1 rounded-lg text-white bg-green-400" onClick={change}>
            {show?"Hide":"Show"}
          </button>
        </div>
      </div>
          {show && <><div className="contiiner">
              <div className="flex justify-between pt-4 font-thin">
                  <div className="">
                      <div>Client Name : {user?.name}</div>
                      <address>Address : {data?.address}</address>
                  </div>

                  <div>
                      <div>Net Price : ${data?.netPrice}</div>
                  </div>
              </div>
              <div className="paymentInfo">
                  <h1>Payment Info</h1>
                  <div className="pt-1 font-thin">
                      <div>Type: {pay?.type}</div>
                      {pay?.type !== "COD" && (
                          <>
                              <div>Method:{pay?.method}</div>
                              <div>Transiction Number :{pay?.tr_num}</div>
                          </>
                      )}
                  </div>
              </div>
          </div>
              <div className="pro pt-2">
                  <table className="w-full">
                      <tr>
                          <th>img</th>
                          <th>Name</th>
                          <th>amount</th>
                          <th>size</th>
                          <th>color</th>
                          <th>Status</th>
                      </tr>
                      {arr}
                  </table>
              </div>
          </>
          }
    </div>
  );
}
