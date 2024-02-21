import React, { useEffect, useRef, useState } from 'react'

import ProductCard from '../../../ProductCard/ProductCard'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'


export default function Container({handle}) {
  const myRef = useRef(null)
  const [size, SetSize] = useState(window.innerWidth)
  window.addEventListener("resize", () => {
    SetSize(prev => window.innerWidth)
 
  })
  const Products = useSelector(state => state.products)
  function Scroll()
  {
   if (size <= 650) {
     handle(false);
    
     
   }
      
  }

 
  let count = 0;
  const productArr = Products?.map(data => {
      count+=1
        return <ProductCard data={data} key={data.id} index={count} />
    })
  return (
    <motion.div layout className='grid lg:grid-cols-4 mt-3 grid-cols-2 md:grid-cols-3' ref={myRef} onScroll={()=>{console.log("hello")}}>
      {productArr}
    </motion.div>
  )
}
