import React, { useState } from 'react';
import { BiChevronRight, BiChevronsRight } from 'react-icons/bi';
import { TiChevronRight } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';

const FilterArea = ({ categories }) => {
    const subCategory = true;
    const [open, setOpen] = useState(true)

    const subMenuHandler = (event) => {
        if (subCategory) {
            event.preventDefault();
        }

    }
    console.log("open", open);

    return (
        <div className="filter">
            <div className="filter-header">
                <h4>Filter Results By</h4>
            </div>
            <div className="filter-body">
                <ul className="filter-body-list">
                    {categories ?
                        categories.length === 0 ?
                            <h2>Don't Have any Category</h2>
                            :
                            categories.map(category => (
                                <li className="filter-body-list-item" key={category._id}>
                                    <NavLink activeClassName="active__link" exact to={`/category/${category.categorySlug}`}>
                                        <span className="filter-icon"> <BiChevronsRight /> </span> {category.category}
                                        {
                                            category.subCategories.length === 0 ?
                                                ""
                                                :
                                                <span className={`filter-icon-right ${open && 'filter-icon-rotate'}`}><TiChevronRight /></span>
                                        }
                                    </NavLink>
                                    <ul className={`filter-submenu filter-submenu-show`}>
                                        {category?.subCategories.map(subCat => (
                                            <li className="filter-submenu-item" key={subCat.key}>
                                                <NavLink activeClassName="active__link" exact to={`/category/${category.categorySlug}/${subCat.subCategorySlug}`}> <span className="filter-icon"> <BiChevronRight /> </span> {subCat.subCategory} </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))
                        :
                        <h3>Loading...</h3>
                    }
                </ul>

            </div>
        </div>
    );
};

export default FilterArea;