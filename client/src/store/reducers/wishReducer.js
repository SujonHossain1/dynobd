import { toast } from 'react-toastify';
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../actions/types";


const init = {
    wishlist: [],
};

const wishReducer = (state = init, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST: {
            const selectedProduct = action.payload.product;
            let hasProduct = state.wishlist.find(p => p._id === selectedProduct._id);
            if (hasProduct) {
                toast.error('Product Already Added Wishlist')
            } else {
                toast.success('Product  Added Wishlist')
                return {
                    ...state,
                    wishlist: [selectedProduct, ...state.wishlist]
                }
            }
            return {
                ...state
            }

        }
        case REMOVE_FROM_WISHLIST: {
            return {
                ...state,
                wishlist: state.wishlist.filter(p => p._id !== action.payload.productId)
            }
        }
        default:
            return state;
    }
}

export default wishReducer;