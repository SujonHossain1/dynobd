import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { hideSearchBox } from "../../../../store/actions/siteNav";
import SearchSkeleton from "../../../Skeleton/SearchSkeleton";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [hide, setHide] = useState("");
  const dispatch = useDispatch();
  const [searchProducts, setSearchProducts] = useState("");

  const { searchShow } = useSelector((state) => state.siteNav);
  const history = useHistory();
  const location = useLocation();

  const handleSearch = (event) => {
    event.preventDefault();
    const hastQuery = slugify(query);
    history.push(`/search-results?query=${hastQuery}`);
  };

  useEffect(() => {
    if (query) {
      setHide(true);
      dispatch(hideSearchBox("open"))
    } else {
      setHide(false);
      dispatch(hideSearchBox())
    }
    setSearchProducts("");

    if (query.length >= 3) {
      fetch(`https://dynobd-ecommerce.herokuapp.com/api/products/search/${query}`)
        .then((res) => res.json())
        .then((data) => {
          setSearchProducts(data);
          console.log(data);
        })
        .catch((error) => console.log(error));
    }
  }, [query, dispatch]);

  const handleHide = () => {
    setHide(false);
    dispatch(hideSearchBox())
    console.log("Clicking");
  };
  function slugify(string) {
    return string
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }

  return (
    <div className="search__section">
      <div className="search-box-wrapper">
        <div className="search-box">
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              name="query"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search For Product"
            />
            <button type="submit">
              <BiSearchAlt2 />
            </button>
          </form>
        </div>
      </div>

      {location.pathname !== "/search-results" && (
        <div className={searchShow ? `search__result d-block` : "d-none"}>
          {searchProducts ? (
            searchProducts.length === 0 ? (
              <h1 className="search__not__found">No results found for query</h1>
            ) : (
              searchProducts.map((product) => (
                <Link
                  onClick={handleHide}
                  to={`/product/details/${product?.url}`}
                  key={product.key}
                >
                  <div className="search__item" key={product._id}>
                    <div className="search__item__image">
                      <img
                        className="img-fluid"
                        src={`/${product?.image1}`}
                        alt=""
                      />
                    </div>
                    <h6> {product?.title} </h6>
                    <h6>Tk {product?.price} </h6>
                  </div>
                </Link>
              ))
            )
          ) : (
            <div className="search__loading">
              <SearchSkeleton />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
