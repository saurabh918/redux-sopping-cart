import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const cartData = useSelector((state)=>state.addedToCart.cart)
  const cartItems = [...new Set(cartData)]
  // console.log(cartItems)
  return (
    <div className='cart-section'>
      <Link to="/cartItems/">
        <h3>My Cart <span className='cart-quantity'>{cartItems.length}</span></h3>
      </Link>
    </div>
  )
}
