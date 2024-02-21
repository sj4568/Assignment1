import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import img from "../../../../../assets/products/shoe1.jpg"
import ProCard from "./ProductCardMini/ProCard";
import { useSelector } from "react-redux";
import { Dropdown, DropdownHeader, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";
import ProductForm from "./ProductForm/ProductForm";
export default function Products() {
  const products = useSelector(state => state.products)
  const [show,setShow]=useState(false)
  const productArr = products?.map(dat => {
    return <ProCard data={dat}/>
  })

  return (
    <div>
      <div className="header flex bg-rose-400 justify-between place-items-center px-4 py-3">
        <div className="text-2xl text-white">Product List</div>

        <div>
          <button
            className="text-white "
            onClick={() => setShow((prev) => !prev)}
          >
            + Add Product
          </button>
        </div>
      </div>
      {!show ? (
        <>
          <table className="w-full m-3">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
            {productArr}
          </table>
        </>
      ) : (
        <ProductForm />
      )}
    </div>
  );
}
