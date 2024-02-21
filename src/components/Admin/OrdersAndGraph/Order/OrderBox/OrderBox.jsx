import React from 'react'
import StatusBox from '../../../AdminSdebar/MenuBar/StatusBox/StatusBox'
import { FaCheck, FaTrash } from 'react-icons/fa'
import { useSelector } from 'react-redux';

export default function OrderBox({ data,index }) {
  const users = useSelector(state => state.users)

  const userId = data?.userId
  const user = users.filter(data => data._id === userId)[0]
  const products = data?.products
  const arr = products?.map((dat,index) => {
    return <span className={`border-none m-0 p-0 `} style={{ fontSize: 12 - (products?.length) }}>{index + 1}. {dat?.name }</span>
  })
  return (
    <tr>
      <td>{index}</td>
      <td>{user?.name}</td>
      <td>{data?.date}</td>
      <td className='flex flex-col'>{arr }</td>
      <td>$300</td>
      <td>
        <StatusBox text={"pending"} />
      </td>
      <td>
        <div className="buttn flex  border-none gap-3">
          <button className="py-2 px-3 gap-2 bg-green-500 flex place-items-center text-white rounded-md">
            <FaCheck />
            Accept
          </button>
          <button className="py-2 px-3 gap-2 bg-red-500 flex place-items-center text-white rounded-md">
            <FaTrash />
            Cencel
          </button>
        </div>
      </td>
    </tr>
  );
}
