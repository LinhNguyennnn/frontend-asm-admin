import axios from "../utils/axios";

export const getListProducts = () => {
  return axios.get('/api/admin/products');
}

export const getProductDetail = id => {
  return axios.get(`/api/product-detail/${id}`)
}

export const getUser = state => {
  return axios.post("/api/admin/login", state)
}

export const getListCategories = () => {
  return axios.get("/api/list-categories")
}

export const updateProductAPI = (data) => {
  return axios.put("/api/admin/update-product", data)
}

export const deleteProductAPI = (_id) => {
  return axios.delete(`/api/admin/delete-product`, { data: { _id } })
}

export const insertProductAPI = (state) => {
  return axios.post(`/api/admin/insert-product`, state)
}