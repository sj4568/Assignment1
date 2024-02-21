import React from 'react'
import { CardText } from 'react-bootstrap'
import RangeBox from './RangeBox/RangeBox';
import CatText from './CatText/CatText';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

export default function SideBar(props) {
  const products = useSelector((state) => state.products);
  
  const show = props.show ? "" : "hidden"
  const clas = `lg:w-[30%] w-full  lg:h-screen lg:px-5 px-3 py-4 sale transition duration-500 ${show} md:w-[40%]`;
    const length = products?.length
  return (
    <motion.div layout className={clas}>
      <div className="product lg:text-3xl font-semibold">Products({length})</div>
      <div className="catagoris mt-5">
        <h1 className="lg:text-2xl pb-3 border-b ">Catagories</h1>
        <div className="button flex lg:flex-col gap-1 mt-2 cursor-pointer md:flex-col">
          <CatText data={"Fashion For Man"} value={"man"} />
          <CatText data={"Fashion For Women"} value={"women"} />
          <CatText data={"Shoe Collection"} value={"shoe"} />
          <CatText data={"Home Applience"} value={"home"} />
          <CatText data={"Electronic Devices"} value={"electronic"} />
        </div>
      </div>
      <div className="catagoris mt-3 ">
        <h1 className="lg:text-2xl pb-3 border-b ">Shop By Price</h1>
        <div className="button flex lg:flex-col lg:gap-1 mt-2 gap-2 md:flex-col ">
          <RangeBox low={0} high={150} />
          <RangeBox low={160} high={200} />

          <RangeBox low={200} high={300} />
          <RangeBox low={"over"} high={1000} />
        </div>
      </div>
    </motion.div>
  );
}
