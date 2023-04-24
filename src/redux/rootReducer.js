import { AddedToCart, productReducers,rem } from "./product/productReducers";
import { ProductDetailReducer } from "./product/productReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  product: productReducers,
  productDetail: ProductDetailReducer,
  addedToCart: AddedToCart,

})

export default rootReducer