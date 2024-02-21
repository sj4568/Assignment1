import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { DeleteProduct } from '../../../../../Store/Slices/StoreSlice';
import { toast } from 'react-toastify';

export default function ProCard({ data }) {
    const dispatch = useDispatch()
    function Delete()
    {
        const state = confirm("Are you sure delete this product")
        if (state)
        {
            dispatch(DeleteProduct(data?.id))
            toast.success("Product Deleted Successfuly")
        }
        
    }
  return (
    <tr className="my-7">
      <td className="">
        <img src={data?.img} alt="" className="h-16" />
      </td>
      <td>
              <h1>{data?.name}</h1>
      </td>
          <td>${data?.price}</td>
      <td>
        <div className="flex gap-2">
          <button className="flex gap-2 place-items-center px-2 py-2 text-sm text-white rounded-md bg-green-500">
            <FaEdit />
            Update
          </button>
          <button className="flex gap-2 place-items-center px-2 py-2 text-sm text-white rounded-md bg-red-500" onClick={Delete}>
            <FaTrash/>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
