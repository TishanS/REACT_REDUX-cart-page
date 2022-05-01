import axios from "axios";
import fakeStoreApi from "../../Api/fakeStoreApi";
import { ActionTypes } from "../Constants/Action-Type";


// export const fetchProducts =  () => {

//   return async function (dispatch, getSatte){
//     const response = await fakeStoreApi.get("/products");
//     dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response.data});
//   }; 
// };

// export const fetchProduct =  (id) => {

//   return async function (dispatch, getSatte){
//     const response = await fakeStoreApi.get(`/products/${id}`);
//     dispatch({type: ActionTypes.SELECTED_PRODUCT, payload: response.data});
//   }; 

// };



export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
    return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
  };