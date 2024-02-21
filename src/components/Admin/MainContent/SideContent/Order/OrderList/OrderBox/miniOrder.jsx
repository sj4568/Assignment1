import React from 'react'
import { useDispatch } from 'react-redux';
import { UpdateOrder } from '../../../../../../Store/Slices/StoreSlice';

export default function Ordermini({ data,pro_id}) {
    const arra = ["pending", "shipping", "deliverd"];
    const dispatch = useDispatch()
    const status = data?.status
    console.log(status);
    const optioarr = arra?.map(data => {
        return <option value={data} selected={status===data}>{data }</option>
    })
    function AddValue(e) {
        const obj = {
            ...data,
            status:e.target.value
        }
        
        dispatch(UpdateOrder({id:pro_id,body:obj}))
    }
  return (
    <tr>
      <td>
        <img src={data?.img} className='h-16' alt="" />
      </td> 
          <td>{data?.name}</td>
          <td>{data?.amount}</td>
          <td>{data?.size }</td>
      <td>
        <div className={`w-[50%] h-[10px] ${data?.color}`}></div>
      </td>
      <td>
        <select name="" id="" onChange={AddValue}>
          {optioarr}
        </select>
      </td>
    </tr>
  );
}
