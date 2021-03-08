import { GET_PRODUCTS, GET_SINGLE_PRODUCT } from "./types";

export const getProducts = () => async dispatch => {
    const res = await fetch('/api/products');
    const data = await res.json();

    dispatch({
        type: GET_PRODUCTS,
        payload: {
            data,
        }
    })
}
export const getSingleProduct = (slug) => async dispatch => {
    try {
        const res = await fetch(`/api/products/${slug}`);
        const data = await res.json();
        dispatch({
            type: GET_SINGLE_PRODUCT,
            payload: {
                data
            }
        })
    } catch (err) {
        console.log(err);
    }

}