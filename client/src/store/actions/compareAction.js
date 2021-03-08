import { ADD_TO_COMPARE, REMOVE_FROM_COMPARE } from "./types";

export const addToCompare = (selectedProduct, quantity) => dispatch => {
    const product = { ...selectedProduct };
    product.quantity = quantity ? quantity : 1

    dispatch({
        type: ADD_TO_COMPARE,
        payload: {
            product
        }
    })
};

export const removeFromCompare = (productId) => dispatch => {
    dispatch({
        type: REMOVE_FROM_COMPARE,
        payload: {
            productId
        }
    })
}