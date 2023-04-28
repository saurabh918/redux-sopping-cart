import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addedToCart,removedFromCart } from '../redux'

const ProductComponent = () => {
  const prod = useSelector((state)=>state.product.products)
  const cart = useSelector((state)=>state.addedToCart.cart)
  const dispatch = useDispatch()
  
  return (
    <div className="all-products">
      <div className="wrapper">
      {prod.map(prod => (
        <Link to={`/product/${prod.id}`} className='product-container' key={prod.id}>
        <figure className='prod-image'>
          <img src={prod.image} alt="View Product" />
        </figure>
        <h2>{prod.title}</h2>
        <p>{prod.price} $</p>
        <p className='prod-description'>{prod.description.substr(0,100)}...</p>
        <p>Ratings : {prod.rating.rate}</p> 
        <p>In stock : {prod.rating.count}</p>
        <span className='prod-category'>{prod.category}</span>
        {
          cart.some(p => p === prod.id) ?
               <button className='remove-btn' onClick={()=>{dispatch(removedFromCart(prod.id))}}>Remove from Cart</button>:<button className='add-btn' onClick={()=>{dispatch(addedToCart(prod.id))}}>Add To Cart</button>
        }
        
        </Link>
      ))}
      </div>
    </div>
  )
}

export default ProductComponent