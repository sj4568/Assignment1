import React, { useEffect } from 'react'
import HeroSection from '../../Home/HeroSection/HeroSection'
import Service from '../../Home/Services/Service'
import PopulerProduct from '../../Home/PopulerProduct/PopulerProduct'
import FeaturesProduct from '../../Home/FeaturesProduct/FeaturesProduct'
import OfferTime from '../../Home/OfferTime/OfferTime'
import Banner from '../../Home/Banner/Banner'
import NewsBlog from '../../Home/NewsBolg/NewsBlog'
import { useDispatch, useSelector } from 'react-redux'
import { AddMyInfo, GetProducts, GetUser, Visitor } from '../../Store/Slices/StoreSlice'
import { nanoid } from '@reduxjs/toolkit'
import SetL from '../../SaveLocalState/SaveLocalSizes'

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() =>
  {
    dispatch(GetProducts())
    dispatch(GetUser())
    dispatch(Visitor())
    

  }, [])
 
  return (
    <div >
      <HeroSection />
      <Service />
      <PopulerProduct />
      <FeaturesProduct />
      <OfferTime />
      <Banner />
      <NewsBlog/>
    </div>
  )
}
