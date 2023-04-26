import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { selectedProduct,addedToCart,removedFromCart } from '../redux'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const ProductDetail = () => {
  const {productId} = useParams()
  const dispatch = useDispatch()
  const store = useSelector(state => state)
  const state = useSelector(state=>state.productDetail.products)
  const cart = useSelector(state=> state.addedToCart.cart)
  
  const fetchProductDetail = async () => {
    console.log("kfk")
    const response = await axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err)=>{
      console.log("err", err)
    })
    dispatch(selectedProduct(response.data))
  }
  useEffect(()=>{
    // console.log("use effect")
    fetchProductDetail()
    console.log(state)
  },[])

  if(state.length === 0) {
    return (<h1>Loading</h1>)
  }
    return (
    <div className='product-details'>
      <div className="wrapper">
        <h1>Product Details</h1>
        <h2>{state.title && state.title}</h2>
        <div className='detail-info'>
        <figure>
          <img src={state.image && state.image} alt="View Product" />
        </figure>
        <div className="product-content">
        <div className="product-description">
        <p>{state.description && state.description}</p>
        </div>
        <div className="other-details">
        <p>Price - {state.price && state.price} $</p>
        <p>In Stock - {state.rating.count && state.rating.count} </p>
        <p>Ratings - {state.rating.rate && state.rating.rate}</p>
        <p>Category - {state.category && state.category}</p>
        </div>
        </div>
        </div>
        {cart.some(cart => cart === state.id) ?<button className='remove-btn' onClick={()=>{dispatch(removedFromCart(state.id));console.log(store)}}>Remove from Cart</button>:<button className='add-btn' onClick={()=>{dispatch(addedToCart(state.id));console.log(store)}}>Add To Cart</button>
            }
      </div>
    </div>
  )}

export default ProductDetail