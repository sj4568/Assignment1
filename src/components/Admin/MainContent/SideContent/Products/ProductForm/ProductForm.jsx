import React, { useState } from "react";
import InputBox from "./InputBox/InputBox";
import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { AddProduct } from "../../../../../Store/Slices/StoreSlice";
import { toast } from "react-toastify";

export default function ProductForm() {
    const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    type: "",
  });
    const [img,setImg]=useState("")
  function AddValue(e) {
    const { name, value,files } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
      const form = new FormData();
      form.set("image", files && files[0]);
      form.set("key", "55d07bcbfea93bd44662af25d0776cad");
      axios.post("https://api.imgbb.com/1/upload", form).then((dat) => {
        const data = dat.data;

        setImg(data?.data?.display_url);
      });
  }
  function HandleSubmit(e) {
    e.preventDefault();
      const product = {
          ...formData,
          id: nanoid(),
          img:img
      }
      dispatch(AddProduct(product))
      toast("Add Product Successfully")
      setFormData({
          name: "",
          price: 0,
          type:""
      })
  }
  return (
    <div className="flex justify-center place-items-center p-5 ">
      <form
        action=""
        className="p-4 shadow rounded-lg w-[50%]"
        onSubmit={HandleSubmit}
      >
        <div className="header p-2 text-xl text-center font-bold text-rose-400">
          Add Product
        </div>
        <div className="inputs">
          <InputBox
            title="Name"
            type="text"
            placeholder="Product Name"
            id="name"
            name="name"
                      onChange={AddValue}
                      value={formData.name}
          />
          <InputBox
            title="product Image"
            type="file"
                      placeholder="Product Name"
                      onChange={AddValue}
          />
          <InputBox
            title="Product Price"
            type="number"
            placeholder="Product Price"
            id="price"
            name="price"
                      onChange={AddValue}
                      value={formData.price}
          />
          <div className="py-2">
            <label htmlFor="select-menu">The type of Product</label>
            <select
              name="type"
              id="select-menu"
              className="form-select"
              onChange={AddValue}
            >
              <option value="">Chose a type</option>
              <option value="man">Man</option>
              <option value="women">Women</option>
              <option value="home">Home</option>
              <option value="elelctronic">Elelctronic</option>
            </select>
          </div>
          <input
            className="form-control bg-rose-400 text-white font-semibold"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}
