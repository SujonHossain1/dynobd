import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import categoryReducer from './categoryReducer';
import compareReducer from './compareReducer';
import orderReducer from './orderReducer';
import productReducer from './productReducer';
import siteNav from './siteNav';
import subCategoryReducer from './subCategoryReducer';
import wishReducer from './wishReducer';

const rootReducer = combineReducers({
    siteNav: siteNav,
    cart: cartReducer,
    products: productReducer,
    wish: wishReducer,
    compare: compareReducer,
    categories: categoryReducer,
    auth: authReducer,
    order: orderReducer,
    subCategories: subCategoryReducer,
});

export default rootReducer;