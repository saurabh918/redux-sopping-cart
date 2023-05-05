import { SET_PRODUCTS,SELECTED_PRODUCT,PRODUCT_ADDED_TO_CART,PRODUCT_REMOVED_FROM_CART, TOTAL_AMOUNT_TOBE_PAID,MEN_CLOTHING_SELECTED,WOMEN_CLOTHING_SELECTED,ELECTRONIC_SELECTED,JEWELRY_SELECTED } from "./productTypes";

const initialState = {
  products : []
}

const cart = {
  cart: [],
  total: 0
}

export const productReducers = (state=initialState,action) => {
  switch(action.type) {
    case SET_PRODUCTS:
      return {...state,products:action.payload,allproducts:action.payload};
    case MEN_CLOTHING_SELECTED:
      return {...state,products:[...state.allproducts.filter(p => p.category === "men's clothing")]}
    case WOMEN_CLOTHING_SELECTED:
      return {...state,products:[...state.allproducts.filter(p=>p.category === "women's clothing")]}
    case ELECTRONIC_SELECTED:
      return {...state,products:[...state.allproducts.filter(p=>p.category === "electronics")]}
    case JEWELRY_SELECTED:
      return {...state,products:[...state.allproducts.filter(p=>p.category === "jewelery")]}
    default:
      return state
  }
}

export const ProductDetailReducer = (state=initialState,action) => {
  switch(action.type) {
    case SELECTED_PRODUCT:
      return {...state,products:action.payload}
    default:
      return state
  }
}

export const AddedToCart = (state=cart,action) => {
  switch(action.type) {
    case PRODUCT_ADDED_TO_CART:
      return {...state,cart:[...state.cart,action.payload]}
    case PRODUCT_REMOVED_FROM_CART:
      return {...state,cart:[...state.cart.filter(cart=>cart !== action.payload)]}
    case TOTAL_AMOUNT_TOBE_PAID:
      return {...state,total:state.total+action.payload}
    default:
      return state
  }
}