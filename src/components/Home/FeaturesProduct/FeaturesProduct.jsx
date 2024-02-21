import React from "react";
import Top from "../../Top/Top";
import ProductCard from "../../ProductCard/ProductCard";

import { useSelector } from "react-redux";

export default function FeaturesProduct() {
  const products = useSelector(state=>state.products)
  // function Data() {
  //   fetch("http://localhost:3700/api/products", {
  //     headers: {
  //       "Content-Type": 'application/json'
  //     },
  //     method: "POST",
  //     body: JSON.stringify(productData)
  // })
  // }
  let arr = []
  for (let i = 0; i < 4; i++)
  {
    arr.push(products && products[i])
  }
  const dataArr = arr?.map(data => {
    return <ProductCard
     data={data}
    />
  })
  

  return (
    <div className="w-full p-4  bg-white ">
      <div className="text-center my-6">
        <div>
          <span className="text-black text-4xl font-bold sale">Trending </span>
          <span className="text-rose-400 text-4xl font-bold sale">
            Products
          </span>
        </div>
        <div className=" h-5 text-black text-[20px] font-extralight sale">
          Trending in nowdays
        </div>
      </div>
      <div className="continer grid lg:grid-cols-4 lg:gap-3  grid-cols-2 md:grid-cols-3 lg:p-5">
        {dataArr}
        
      </div>
    </div>
  );
}
