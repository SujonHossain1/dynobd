import { PLACEMENT, PLACEMENT_METHOD, PLACEMENT_PRODUCTS, TOTAL_PRICE } from "./types";

export const placementInformation = (data) => dispatch => {
    dispatch({
        type: PLACEMENT,
        payload: {
            data
        }
    })
};

export const placementProducts = (products) => dispatch => {
    dispatch({
        type: PLACEMENT_PRODUCTS,
        payload: {
            products
        }
    })
}

export const placementPaymentMethod = (method) => dispatch => {
    dispatch({
        type: PLACEMENT_METHOD,
        payload: {
            method
        }
    })
};

export const placementTotalPrice = (totalPrice) => dispatch => {
    dispatch({
        type: TOTAL_PRICE,
        payload: {
            totalPrice
        }
    })
}