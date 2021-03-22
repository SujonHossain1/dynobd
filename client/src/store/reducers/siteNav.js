import { CART_SIDE_NAV, SITE_NAVBAR, WISH_SIDE_NAV } from '../actions/types'
const initialState = {
    isOpen: false,
    cartSideBar: false,
    display: 'none',
    cartSideNav: '0%',
    wishSideNav: '0%',
    searchShow: false,
};

const siteNav = (state = initialState, action) => {
    switch (action.type) {
        case SITE_NAVBAR:
            return {
                ...state,
                isOpen: action.payload.isOpen,
                display: action.payload.display
            }
        case CART_SIDE_NAV:
            return {
                ...state,
                cartSideNav: action.payload
            }
        case WISH_SIDE_NAV:
            return {
                ...state,
                wishSideNav: action.payload
            }
        case 'SEARCH_BOX': {
            return {
                ...state,
                searchShow: action.payload.searchOpen ? action.payload.searchOpen : false,
            }
        }

        default:
            return state;
    }
};

export default siteNav;