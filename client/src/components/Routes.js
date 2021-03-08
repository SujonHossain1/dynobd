import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About/About';
import Auth from './Auth/Auth';
import Profile from './Auth/Profile';
import Cart from './Cart/Cart';
import Category from './Category/Category';
import Checkout from './Checkout/Checkout';
import Compare from './Compare/Compare';
import Contact from './Contact/Contact';
import Faq from './FAQ/Faq';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import PrivateRoute from './PrivateRoute';
import ProductDetails from './ProductDetials/ProductDetails';
import SearchResult from './SearchResult/SearchResult';
import Breadcrumb from './Shared/Breadcrumb/Breadcrumb';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';
import Wishlist from './Wishlist/Wishlist';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Navbar />
                <Home />
                <Footer />
            </Route>
            <Route exact path="/product/details/:slug">
                <Navbar />
                <ProductDetails />
                <Footer />
            </Route>
            <Route exact path="/user/login">
                <Navbar />
                <Auth />
                <Footer />
            </Route>
            <Route exact path='/category/:catSlug'>
                <Navbar />
                <Breadcrumb />
                <Category />
                <Footer />
            </Route>
            <Route exact path='/category/:catSlug/:subCatSlug'>
                <Navbar />
                <Breadcrumb />
                <Category />
                <Footer />
            </Route>
            <PrivateRoute exact path="/user/dashboard">
                <Navbar />
                <Profile />
                <Footer />
            </PrivateRoute>

            <PrivateRoute exact path="/checkout">
                <Navbar />
                <section className="checkout__section">
                    <Checkout />
                </section>
                <Footer />
            </PrivateRoute>
            <Route exact path='/search-results'>
                <Navbar />
                <SearchResult />
                <Footer />
            </Route>
            <Route exact path="/faq">
                <Navbar />
                <Faq />
                <Footer />
            </Route>
            <Route exact path="/contact-us">
                <Navbar />
                <Contact />
                <Footer />
            </Route>
            <Route exact path="/about-us">
                <Navbar />
                <About />
                <Footer />
            </Route>
            <Route exact path="/products/cart">
                <Navbar />
                <Cart />
                <Footer />
            </Route>
            <Route exact path="/products/wishlist">
                <Navbar />
                <Wishlist />
                <Footer />
            </Route>
            <Route exact path="/products/compare">
                <Navbar />
                <Compare />
                <Footer />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    );
};

export default Routes;