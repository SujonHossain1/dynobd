import React, { useEffect } from 'react';
import { AiOutlineHome, CgChevronDown, FaBars, FaUserFriends, FaUsers, FiLogOut, HiOutlineCash, IoSettingsOutline, TiFolderOpen } from 'react-icons/all';
import { Route, Switch, withRouter } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import Categories from './Category/Categorires';
import Category from './Category/Category';
import CategoryProducts from './Category/CategoryProducts';
import SubCategories from './Category/SubCategories';
import SubCategory from './Category/SubCategory';
import Home from './Home';
import Order from './Order/Order';
import AddProduct from './Product/AddProduct';
import Products from './Product/Products';
import Stock from './Product/Stock';

const Dashboard = ({ match, history, location }) => {
    console.log(match)
    useEffect(() => {
        const linkColor = document.querySelectorAll('.nav__link')
        function colorLink() {
            linkColor.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
        }
        linkColor.forEach(l => l.addEventListener('click', colorLink))


        const linkCollapse = document.getElementsByClassName('collapse__link')
        var i

        for (i = 0; i < linkCollapse.length; i++) {
            linkCollapse[i].addEventListener('click', function () {
                const collapseMenu = this.nextElementSibling
                collapseMenu.classList.toggle('showCollapse')

                const rotate = collapseMenu.previousElementSibling
                rotate.classList.toggle('rotate')
            })
        }
    }, [])

    return (
        <>
            <div className="l-navbar" id="navbar">
                <nav className="sidenav">
                    <div className="nav__links">
                        <div className="nav__brand">
                            <FaBars className="nav__toggle" id="nav-toggle" />
                            <Link to={`${match.path}`} className="nav__logo">Techdyno BD</Link>
                        </div>
                        <div className="nav__list">
                            <NavLink exact to={`${match.path}`} className="nav__link" activeClassName="nav__link active">
                                <AiOutlineHome className="nav__icon" />
                                <span className="nav__name">Dashboard</span>
                            </NavLink>
                            <NavLink exact to={`${match.path}/orders`} className="nav__link" activeClassName="nav__link active">
                                <HiOutlineCash className="nav__icon" />
                                <span className="nav__name">Orders</span>
                            </NavLink>

                            <div className="nav__link collapse2">
                                <TiFolderOpen className="nav__icon" />
                                <span className="nav__name">Products</span>
                                <CgChevronDown className="collapse__link" />

                                <ul className="collapse__menu">
                                    <Link to={`${match.path}/add-product`} className="collapse__sublink">Add Product</Link>
                                    <Link to={`${match.path}/products`} className="collapse__sublink">Products</Link>
                                    <Link to={`${match.path}/products/stock`} className="collapse__sublink">Stock</Link>
                                </ul>
                            </div>

                            <div className="nav__link collapse2">
                                <TiFolderOpen className="nav__icon" />
                                <span className="nav__name">Category</span>
                                <CgChevronDown className="collapse__link" />

                                <ul className="collapse__menu">
                                    <Link to={`${match.path}/add-category`} className="collapse__sublink">Add Category</Link>
                                    <Link to={`${match.path}/add-sub-category`} className="collapse__sublink">Add Sub Category</Link>
                                    <Link to={`${match.path}/categories`} className="collapse__sublink">Categories</Link>
                                    <Link to={`${match.path}/sub-categories`} className="collapse__sublink"> Sub Categories</Link>
                                    <Link to={`${match.path}/categories-products`} className="collapse__sublink"> Categories Products</Link>
                                </ul>
                            </div>
                            <div className="nav__link collapse2">
                                <FaUserFriends className="nav__icon" />
                                <span className="nav__name">Customers</span>
                                <CgChevronDown className="collapse__link" />

                                <ul className="collapse__menu">
                                    <Link className="collapse__sublink">Data</Link>
                                    <Link className="collapse__sublink">Group</Link>
                                    <Link className="collapse__sublink">Members</Link>
                                </ul>
                            </div>
                            <NavLink exact to={`${match.path}/subscribe`} className="nav__link" activeClassName="nav__link active">
                                <FaUsers className="nav__icon" />
                                <span className="nav__name">Subscribers</span>
                            </NavLink>
                            <NavLink exact to={`${match.path}/setting`} className="nav__link" activeClassName="nav__link active">
                                <IoSettingsOutline className="nav__icon" />
                                <span className="nav__name">Settings</span>
                            </NavLink>
                        </div>
                    </div>

                    <Link to="#" className="nav__link" style={{ background: '#38558c' }}>
                        <FiLogOut className="nav__icon" />
                        <span className="nav__name">Log Out</span>
                    </Link>
                </nav>
            </div >
            <div className="dashboard__content">
                <Switch>
                    <Route exact path={`${match.path}`}>
                        <Home />
                    </Route>
                    <Route path={`${match.path}/orders`}>
                        <Order />
                    </Route>
                    <Route path={`${match.path}/add-product`} >
                        <AddProduct />
                    </Route>
                    <Route path={`${match.path}/add-category`}>
                        <Category />
                    </Route>
                    <Route exact path={`${match.path}/products`}>
                        <Products />
                    </Route>
                    <Route path={`${match.path}/products/stock`}>
                        <Stock />
                    </Route>
                    <Route path={`${match.path}/add-sub-category`}>
                        <SubCategory />
                    </Route>
                    <Route path={`${match.path}/sub-categories`}>
                        <SubCategories />
                    </Route>
                    <Route path={`${match.path}/categories-products`}>
                        <CategoryProducts />
                    </Route>
                    <Route path={`${match.path}/categories`}>
                        <Categories />
                    </Route>
                </Switch>
            </div>
        </>
    );
};

export default withRouter(Dashboard);