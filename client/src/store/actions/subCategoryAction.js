import { GET_ALL_SUBCATEGORIES, GET_SUBCATEGORIES } from './types';

export const getAllSubCategories = () => async dispatch => {
    const res = await fetch(`https://dynobd-ecommerce.herokuapp.com/api/sub-categories`);
    const data = await res.json();

    dispatch({
        type: GET_ALL_SUBCATEGORIES,
        payload: {
            data
        }
    })

}

export const getSubCategories = (category) => async dispatch => {
    if (category) {
        const res = await fetch(`https://dynobd-ecommerce.herokuapp.com/api/sub-categories/${category}`);
        const data = await res.json();

        dispatch({
            type: GET_SUBCATEGORIES,
            payload: {
                data
            }
        })
    }
}