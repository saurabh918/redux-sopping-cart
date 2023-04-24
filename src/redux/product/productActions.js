import { SET_PRODUCTS,SELECTED_PRODUCT,PRODUCT_ADDED_TO_CART,PRODUCT_REMOVED_FROM_CART,TOTAL_AMOUNT_TOBE_PAID } from "./productTypes";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products
  }
} 

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product
  }
}

export const addedToCart = (prodId) => {
  return {
    type: PRODUCT_ADDED_TO_CART,
    payload: prodId
  }
}

export const removedFromCart = (prodId) => {
  return {
    type: PRODUCT_REMOVED_FROM_CART,
    payload: prodId
  }
}

export const totalAmount = (price) => {
  return {
    type: TOTAL_AMOUNT_TOBE_PAID,
    payload: price
  }
}