import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts,addedToCart,removedFromCart, totalAmount } from '../redux'
import axios from 'axios'

const Cartlist = () => {
  const dispatch = useDispatch()
  const {cart,total} = useSelector(state=> state.addedToCart)
  const fetchProducts = async () => {
    const products = await axios.get("https://fakestoreapi.com/products").catch((err)=>console.log(err))
    dispatch(setProducts(products.data))
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  const {product,addedToCart} = useSelector(state=>state)
  console.log("product",product)
  console.log("addedToCart",addedToCart)
  return (
    <>
      <h2>Added in your cart</h2>
      <button>Pay: {total.toFixed(2)} $</button>
      <div className='all-products'>
        <div className='wrapper'>
      {
      addedToCart.cart.map(id=>{
        const prod = product.products.find(product => product.id === id);
        console.log({prod});
        if(prod) {
          prod.qty = 1; /* default qty */

          const setValue = () => {
            prod.qty = parseInt(document.getElementsByClassName("prod-qty" + prod.id)[0].value);
            console.log('prod-qty',{prodId: prod.id, qty: prod.qty});
            console.log('prod-qty', parseInt(document.getElementsByClassName("prod-qty" + prod.id)[0].value));
          }

          return (          
            <div className='product-container'>
            <figure className='prod-image'>
            <img src={prod.image} alt="View Product" />
            </figure>
            <h2>{prod.title}</h2>
            <p>{prod.price} $</p>
            <p className='prod-description'>{prod.description.substr(0,100)}...</p>
            <p>Ratings : {prod.rating.rate}</p> 
            <p>In stock : {prod.rating.count}</p>
            <span className='prod-category'>{prod.category}</span>
            {cart.some(cart => cart === prod.id) ?<button className='remove-btn' onClick={()=>{dispatch(removedFromCart(prod.id))}}>Remove from Cart</button>:<button className='add-btn' onClick={()=>{dispatch(addedToCart(prod.id))}}>Add To Cart</button>
          }
          <button className="buy-btn" id='buy-btn'  onClick={(e)=> {setValue(); dispatch(totalAmount((prod.price * prod.qty)));}}>Buy ${prod.price}</button>
          <div className='select-qty'>
            <p>Select Quantity</p>
            <div className='counter'>
              {/* <p>-</p> */}
            <input type='number' className={"prod-qty" + prod.id} id='prod-qty' onChange={()=>setValue()} defaultValue={prod.qty} />
            {/* <p>+</p> */}
            </div>
          </div>
            </div>
              
          )
        }
        // product.products.map(prod=>{
        // })
        
      })}
      {console.log("product",product)}    
      </div>
        </div>
    </>
  )
}

export default Cartlist