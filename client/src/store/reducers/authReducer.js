import { LOGIN } from "../actions/types";

const init = {
    isAuth: false,
    user: {},
    passwordRest: '',
    customerToken: '',
};

const authReducer = (state = init, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload.user,
                isAuth: action.payload.isAuth,
                customerToken: action.payload.customerToken
            }
        default:
            return state;
    }
};

export default authReducer;