import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Popular from '../../Components/Popular/Popular'
import Offers from '../../Components/Offers/Offers'
import NewBrands from '../../Components/NewBrands/NewBrands'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewBrands/>
      <NewsLetter/>
    </div>
  )
}

export default Shop