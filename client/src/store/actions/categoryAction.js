import { GET_CATEGORIES } from "./types";

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