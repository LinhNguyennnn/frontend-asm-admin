import { call, put, takeLatest } from "redux-saga/effects";
import * as type from "../constants/actionTypes";
import * as action from "../actions";
import { getListProducts, getProductDetail, getUser, getListCategories, updateProductAPI, deleteProductAPI, insertProductAPI } from "../api";

function* fetchProduct() {
  try {
    const { data } = yield call(getListProducts);
    yield put(action.showListProducts(data));
  } catch (error) {
    yield (error.message);
  }
}

function* insertProduct({ data }) {
  try {
    yield call(insertProductAPI, data);
  } catch (error) {
    yield (error.message);
  }
}

function* updateProduct({ data }) {
  try {
    yield call(updateProductAPI, data);
    yield put(action.listProducts());
  } catch (error) {
    yield (error.message);
  }
}

function* deleteProduct({ _id }) {
  try {
    yield call(deleteProductAPI, _id);
    yield put(action.listProducts());
  } catch (error) {
    yield (error.message);
  }
}

function* fetchCategory() {
  try {
    const { data } = yield call(getListCategories);
    yield put(action.listCategories(data));
  } catch (error) {
    yield (error.message);
  }
}

function* fetchProductDetail({ id }) {
  try {
    if (!id) throw new Error("ID invalid!");
    const { data } = yield call(getProductDetail, id);
    yield put(action.getProductDetail(null, data));
  } catch (error) {
    yield (error.message);
  }
}


function* userLogin({ state }) {
  try {
    if (state.email === "" || state.password === "" || state.password.length < 4) throw new Error("Invalid Email or Password!");
    const { data } = yield call(getUser, state);
    yield put(action.getUserLogin(data));
  } catch (error) {
    yield (error.message);
  }
}

function* rootSaga() {
  yield takeLatest(type.GET_LIST_PRODUCTS, fetchProduct);
  yield takeLatest(type.GET_PRODUCT_DETAIL, fetchProductDetail);
  yield takeLatest(type.USER_LOGIN, userLogin);
  yield takeLatest(type.GET_LIST_CATEGORY, fetchCategory);
  yield takeLatest(type.UPDATE_PRODUCT, updateProduct);
  yield takeLatest(type.DELETE_PRODUCT, deleteProduct);
  yield takeLatest(type.INSERT_PRODUCT, insertProduct);
}

export default rootSaga;