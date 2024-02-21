import React from 'react'
import ProductContainer from '../../ShowBox/ProductContainer/ProductContainer'
import RelatedProduct from '../../ShowBox/RelatedProduct/RelatedProduct'
import Review from '../../ShowBox/Review/Review'

export default function ShowBox() {
  return (
    <div>
      <ProductContainer />
      <Review/>
      <RelatedProduct/>
    </div>
  )
}
