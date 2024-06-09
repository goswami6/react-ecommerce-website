import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {ShopContext} from '../Context/ShopContext'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'

const Product = () => {
  const {all_product}= useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
