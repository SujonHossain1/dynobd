import { PLACEMENT, PLACEMENT_METHOD, PLACEMENT_PRODUCTS, TOTAL_PRICE } from "../actions/types";

const init = {
    products: [],
    userId: '',
    phone: '',
    address: [],
    paymentMethod: '',
    totalPrice: 0
};

const orderReducer = (state = init, action) => {
    switch (action.type) {
        case PLACEMENT:
            return {
                ...state,
                userId: action.payload.data.userId,
                address: action.payload.data.address,
                phone: action.payload.data.phone,
                email: action.payload.data.email
            }
        case PLACEMENT_PRODUCTS: {
            return {
                ...state,
                products: action.payload.products
            }
        }
        case PLACEMENT_METHOD: 
            return {
                ...state,
                paymentMethod: action.payload.method
            }

        case TOTAL_PRICE:{
            return{
                ...state,
                totalPrice: action.payload.totalPrice
            }
        }
        
        default:
            return state;
    }
}

export default orderReducer;