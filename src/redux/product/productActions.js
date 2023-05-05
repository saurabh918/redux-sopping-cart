import { SET_PRODUCTS,SELECTED_PRODUCT,PRODUCT_ADDED_TO_CART,PRODUCT_REMOVED_FROM_CART,TOTAL_AMOUNT_TOBE_PAID,MEN_CLOTHING_SELECTED,WOMEN_CLOTHING_SELECTED,ELECTRONIC_SELECTED,JEWELRY_SELECTED} from "./productTypes";

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

export const menClothingSelected = () => {
  return {
    type: MEN_CLOTHING_SELECTED
  }
}

export const womenClothingSelected = () => {
  return {
    type: WOMEN_CLOTHING_SELECTED
  }
}

export const electronicsSelected = () => {
  return {
    type: ELECTRONIC_SELECTED
  }
}

export const jewelrySelected = () => {
  return {
    type: JEWELRY_SELECTED
  }
}