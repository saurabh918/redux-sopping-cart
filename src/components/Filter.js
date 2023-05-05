import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { electronicsSelected, jewelrySelected, menClothingSelected, setProducts, womenClothingSelected } from '../redux'
import { Link } from 'react-router-dom'

const Filter = () => {
  const dispatch = useDispatch()
  const state = useSelector(state=>state)
  const clearFilters = () => {
    let radio = document. querySelector('input[type=radio]:checked');
    if(radio) radio. checked = false;
    dispatch(setProducts(state.product.allproducts))
  }
  return (
    <div className='filter-options'>
      <div className='wrapper'>
      <span>
        <label>Men's clothing</label>
        <input inline name="group1" type="radio" onChange={()=>dispatch(menClothingSelected())} />
      </span>
      <span>
      <label>Women's clothing</label>
        <input inline name="group1" type="radio" onChange={()=>dispatch(womenClothingSelected())} />
      </span>
      <span>
      <label>Electronics</label>
        <input inline name="group1" type="radio" onChange={()=>dispatch(electronicsSelected())} />
      </span>
      <span>
      <label>Jewelry</label>
        <input inline name="group1" type="radio" onChange={()=>dispatch(jewelrySelected())} />
      </span>
      <button onClick={()=>clearFilters()}>
        Clear Filter
      </button>
      </div>
    </div>
  )
}

export default Filter