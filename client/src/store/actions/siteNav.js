import { CART_SIDE_NAV, SIDE_BARS, SITE_NAVBAR, WISH_SIDE_NAV } from "./types"

export const siteNavFun = (isOpen, display) => {
    return {
        type: SITE_NAVBAR,
        payload: {
            isOpen,
            display
        }
    }
};

export const cartSideNavFunc = (data) => {
    return {
        type: CART_SIDE_NAV,
        payload: data
    }
};

export const wishSideNavFunc = (data) => {
    return {
        type: WISH_SIDE_NAV,
        payload: data
    }
};

export const hideSearchBox = (action) => dispatch => {
    if (action === 'open') {
        dispatch({
            type: 'SEARCH_BOX',
            payload: {
                searchOpen: true,
            }
        })
    } else {
        dispatch({
            type: 'SEARCH_BOX',
            payload: {
                searchOpen: false,
            }
        })
    }
}

export const cartSideBarAction = (action) => dispatch => {
    if (action === 'open') {
        dispatch({
            type: SIDE_BARS,
            payload: {
                cartOpen: true,
            }
        })
    } else {
        dispatch({
            type: SIDE_BARS,
            payload: {
                cartOpen: false,
            }
        })
    }

}