import React, { useEffect, useState } from 'react';
import * as Icons from 'react-icons/all';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { siteNavFun } from '../../../store/actions/siteNav';

const NavbarBottom = () => {
    const dispatch = useDispatch();

    const siteNav = () => {
        dispatch(siteNavFun(true, 'block'));
    }
    const [categories, setCategorires] = useState();

    useEffect(() => {
        fetch('/api/categories')
            .then(res => res.json())
            .then(data => setCategorires(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="navbar-bottom main-menu sticky-top d-none d-md-block"  >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6">
                        <div className="category-menu-container">
                            <div className="category-nav">
                                <h2 className="category-title">
                                    <span onClick={siteNav} className="bars"> <Icons.FaBars /> </span>
                                    Categories
                                    <span className="arrow-down"> <Icons.BiChevronDown /></span>
                                </h2>
                            </div>
                            <div className="category-nav-menu">
                                <ul className="category-list-wrapper">


                                    {categories && categories?.map((category) => (

                                        <li className="dropdown-list" key={category._id}>
                                            <Link style={{ color: '#333' }} to={`/category/${category.categorySlug}`}>
                                                <span className="category-icon"> <Icons.RiLightbulbLine /> </span>
                                                <div className="link-area">
                                                    <span> {category.category} </span>
                                                    <span> <Icons.TiChevronRight /> </span>
                                                </div>
                                            </Link>
                                            {category.subCategories.length > 0 &&
                                                <ul className="category-mega-menu">
                                                    {
                                                        category.subCategories.map(subCat => (
                                                            <li key={subCat._id}>
                                                                <Link to={`/category/${category.categorySlug}/${subCat.subCategorySlug}`}>{subCat.subCategory}</Link>
                                                                {/* <div className="categorie-sub-menu">
                                                                    <Link to="/"> LCD TV </Link>
                                                                    <Link to="/"> LED TV </Link>
                                                                    <Link to="/"> Moving TV </Link>
                                                                </div> */}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            }
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-6">
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <Link to="/faq" className="nav-link" >FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about-us" className="nav-link" >About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact-us" className="nav-link" >Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" >Help</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarBottom;