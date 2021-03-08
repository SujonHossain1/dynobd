import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./types";

export const addToWishlist = (givenProduct, quantity) => dispatch => {
    let product = { ...givenProduct };
    product.quantity = quantity ? quantity : 1;

    dispatch({
        type: ADD_TO_WISHLIST,
        payload: {
            product
        }
    })
};

export const removeFromWishlist = (productId) => dispatch => {
    dispatch({
        type: REMOVE_FROM_WISHLIST,
        payload: {
            productId
        }
    })
}