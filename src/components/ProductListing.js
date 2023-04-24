import React from 'react'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux'

const ProductListing = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const products = await axios.get("https://fakestoreapi.com/products").catch((err)=>console.log(err))
    dispatch(setProducts(products.data))
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <div>
      <h1>All Products</h1>
      <ProductComponent />
    </div>
  )
}

export default ProductListing