import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART } from "./types"

export const addToCart = (givenProduct, quantity) => dispatch => {
    let product = { ...givenProduct };
    product.quantity = quantity ? quantity : 1

    dispatch({
        type: ADD_TO_CART,
        payload: {
            product,
        }
    })
};

export const removeFromCart = (productId) => dispatch => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: {
            productId
        }
    })
};

export const productQuantity = (action, productId) => dispatch => {
    dispatch({
        type: action === 'increase' ? INCREASE_QUANTITY : DECREASE_QUANTITY,
        payload: {
            productId
        }
    })
}