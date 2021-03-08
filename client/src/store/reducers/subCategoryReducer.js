import { GET_ALL_SUBCATEGORIES, GET_SUBCATEGORIES } from '../actions/types';

const init = {
    subCategory: {},
    subCategories: [],
    subCategoryProducts: [],
    allSubCategories: null, // get values []
};

const subCategoryReducer = (state = init, action) => {
    switch (action.type) {
        case GET_SUBCATEGORIES:
            return {
                ...state,
                subCategories: action.payload.data.subCategories
            }
        case GET_ALL_SUBCATEGORIES:
            return {
                ...state,
                allSubCategories: action.payload.data
            }
        default:
            return state;
    }
};

export default subCategoryReducer;