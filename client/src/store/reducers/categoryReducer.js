import { GET_CATEGORIES } from "../actions/types";

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
        default:
            return state;
    }
};

export default categoryReducer;