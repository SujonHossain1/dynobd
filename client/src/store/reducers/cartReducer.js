import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART, RESET_CART, SIDE_BARS } from "../actions/types";

const init = {
    cartNumbers: 0,
    cartProducts: [],
    orderedProduct: {},
    cartSideBar: false,

};

const cartReducer = (state = init, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            let selectedProduct = action.payload.product;
            let productQuantity = state.cartProducts.map(p => { return p.quantity });
            let totalQuantity = productQuantity.reduce((a, b) => a + b, 0);
            let hasProduct = state.cartProducts.find(p => p._id === selectedProduct._id);

            if (hasProduct) {
                hasProduct.quantity += selectedProduct.quantity;
                let productIndex = state.cartProducts.findIndex(p => p._id === selectedProduct._id);
                state.cartProducts[productIndex] = hasProduct;

                return {
                    ...state,
                    cartNumbers: totalQuantity + selectedProduct.quantity,
                    cartProducts: [...state.cartProducts]
                }
            } else {
                return {
                    ...state,
                    cartNumbers: totalQuantity + selectedProduct.quantity,
                    cartProducts: [selectedProduct, ...state.cartProducts],
                    orderedProduct: {
                        ...state.orderedProduct,
                        cartProducts: [selectedProduct, ...state.cartProducts]
                    }
                }

            }
        }
        case REMOVE_FROM_CART: {
            let product = state.cartProducts.find(p => p._id === action.payload.productId);

            return {
                ...state,
                cartNumbers: state.cartNumbers - product?.quantity,
                cartProducts: state.cartProducts.filter(p => p._id !== action.payload.productId)
            }
        }
        case INCREASE_QUANTITY: {
            let product = state.cartProducts.find(p => p._id === action.payload.productId)
            product.quantity += 1
            let productIndex = state.cartProducts.findIndex(p => p._id === action.payload.productId)
            state.cartProducts[productIndex] = product;
            return {
                ...state,
                cartNumbers: state.cartNumbers += 1
            }
        }
        case DECREASE_QUANTITY: {
            let product = state.cartProducts.find(p => p._id === action.payload.productId);
            if (product.quantity > 1) {
                product.quantity -= 1;
                const productIndex = state.cartProducts.findIndex(p => p._id === action.payload.productId);
                state.cartProducts[productIndex] = product;
                return {
                    ...state,
                    cartNumbers: state.cartNumbers -= 1
                }
            } else {
                return {
                    ...state
                }
            }
        }


        case SIDE_BARS: {
            return {
                ...state,
                cartSideBar: action.payload.cartOpen ? action.payload.cartOpen : false,
            }
        }

        case RESET_CART: {
            return {
                ...state = {
                    cartNumbers: 0,
                    cartProducts: []
                }
            }
        }
        default:
            return state;
    }
};

export default cartReducer;