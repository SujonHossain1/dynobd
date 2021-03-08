import { toast } from 'react-toastify';
import * as Types from '../actions/types';
const init = {
    compare: []
};


const compareReducer = (state = init, action) => {
    switch (action.type) {
        case Types.ADD_TO_COMPARE: {
            const selectedProduct = action.payload.product;
            let hasProduct = state.compare.find(p => p._id === selectedProduct._id);
            if (hasProduct) {
                toast.error("Product Already Added To Compare")
            } else {
                toast.success("Product Add To Compare")
                return {
                    ...state,
                    compare: [selectedProduct, ...state.compare]
                }
            }
            return {
                ...state
            }

        }

        case Types.REMOVE_FROM_COMPARE: {
            return {
                ...state,
                compare: state.compare.filter(product => product._id !== action.payload.productId)
            }
        }

        default:
            return state;
    }
}

export default compareReducer;

