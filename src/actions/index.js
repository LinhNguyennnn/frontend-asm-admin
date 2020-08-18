import * as type from "../constants/actionTypes";

export const listProducts = () => {
  return {
    type: type.GET_LIST_PRODUCTS
  }
}

export const insertProduct = (data) => {
  return {
    type: type.INSERT_PRODUCT,
    data
  }
}

export const updateProduct = (data) => {
  return {
    type: type.UPDATE_PRODUCT,
    data
  }
}

export const deleteProduct = (_id) => {
  return {
    type: type.DELETE_PRODUCT,
    _id
  }
}

export const getListCategories = () => {
  return {
    type: type.GET_LIST_CATEGORY,
  }
}

export const listCategories = (data) => {
  return {
    type: type.SHOW_LIST_CATEGORY,
    data
  }
}

export const showListProducts = (data) => {
  return {
    type: type.SHOW_LIST_PRODUCTS,
    data
  }
}

export const getProductDetail = (id, data) => {
  return {
    type: type.GET_PRODUCT_DETAIL,
    id,
    data
  }
}

export const userLogin = (state, user = {}) => {
  return {
    type: type.USER_LOGIN,
    state,
    user
  }
}
export const getUserLogin = (user) => {
  return {
    type: type.GET_USER_LOGIN,
    user
  }
}