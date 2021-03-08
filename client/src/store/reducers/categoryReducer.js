import { GET_CATEGORIES, GET_CATEGORIES_PRODUCTS } from "../actions/types";

const init = {
    category: {},
    categories: null,
    categoryProducts: [],
};

const categoryReducer = (state = init, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload.data
            }
        case GET_CATEGORIES_PRODUCTS:
            return {
                ...state,
                categoriesProducts: action.payload.data
            }

        default:
            return state;
    }
};

export default categoryReducer;