import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../../ProductCard/ProductCard'
export default function RelatedProduct() {
  const products = useSelector((state) => state.products);
    const Data = useSelector(state => state.tempProduct)
    const name = Data?.name
    const arr = products?.map(data => {
        const nameArr = data.name?.toLowerCase().split(" ")
        const temp = name?.toLowerCase().split(' ')
        for (let i of temp ? temp:[])
        {
            for (let j of nameArr)
            {
                if (i === j) {

                    return data
                   
                }
                
            }
            
            
        }
        if (data.type == Data?.type)
        {
            return data
        }
        
        
        
        
            
    })
    const dataArr = arr?.map(data => {
        if(data==undefined)
        {
           return
        }
        return <ProductCard data={data}/>
        
    })
    
  return (
    <div className='p-3'>
      <div className="header flex justify-center flex-col place-items-center gap-2 ">
        <div className="">
          <span className="text-rose-400 lg:text-4xl text-2xl font-bold sale">
            Related 
          </span>
          <span className="text-black lg:text-4xl text-2xl font-bold sale">
            {" "}
            Products
          </span>
        </div>
        <div className="  text-black text-lg w-[350px] text-center font-thin sale">
          join our community for enjoy our best policy join our community .
        </div>
          </div>
          <div className="continer grid lg:grid-cols-5 gap-3 py-3 grid-cols-2">
              {dataArr}
          </div>
    </div>
  );
}
