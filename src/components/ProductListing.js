import React, { useState } from 'react'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux'
import Filter from './Filter'

const ProductListing = () => {
  const dispatch = useDispatch();
  const state = useSelector(state=>state)
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
      <Filter />
      <ProductComponent />
    </div>
  )
}

export default ProductListing