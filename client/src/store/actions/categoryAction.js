import { GET_CATEGORIES, GET_CATEGORIES_PRODUCTS } from "./types";

export const getCategories = () => async dispatch => {
    try {
        const res = await fetch('/api/categories');
        const data = await res.json();
        dispatch({
            type: GET_CATEGORIES,
            payload: {
                data
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export const getCategoriesProducts = () => async dispatch => {
    try {
        const res = await fetch('https://dynobd-ecommerce.herokuapp.com/api/categories/products');
        const data = await res.json();
        dispatch({
            type: GET_CATEGORIES_PRODUCTS,
            payload: {
                data
            }
        })
    } catch (err) {
        console.log(err);
    }
}