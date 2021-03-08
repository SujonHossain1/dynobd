import { GET_PRODUCTS, GET_SINGLE_PRODUCT } from '../actions/types';

const init = {
    product: null,// get default value empty object {}
    products: null, // get default value empty array [] 
};


const productReducer = (state = init, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload.data
            }
        case GET_SINGLE_PRODUCT:
            return {
                ...state,
                product: action.payload.data
            }

        default:
            return state
    }
};

export default productReducer;