import { combineReducers } from "redux";
import listProducts from "./listProducts";
import productDetail from './productDetail';
import listCategory from './listCategory';
import user from "./user";

export default combineReducers({
  listProducts,
  productDetail,
  listCategory,
  user
})