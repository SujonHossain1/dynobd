import React from 'react';
import MobileNavbarBottom from './Mobile/MobileNavbarBottom';
import MobileNavbarTop from './Mobile/MobileNavbarTop';
import CartSideNav from './Mobile/utils/CartSideNav';
import WishSideNav from './Mobile/utils/WishSideNav';
import SiteNavbar from './Mobile/utils/SiteNavbar';
import NavbarBottom from './NavbarBottom';
import NavbarMiddle from './NavbarMiddle';
import NavbarTop from './NavbarTop';

const Navbar = () => {


  return (
    <>
      <NavbarTop />
      <div className="sticky-top d-none d-md-block" style={{ zIndex: '20', background: '#fff' }}>
        <NavbarMiddle />
        <NavbarBottom />
      </div>

      <MobileNavbarTop />
      <MobileNavbarBottom />
      <SiteNavbar />
      <CartSideNav />
      <WishSideNav />
    </>
  );
};

export default Navbar;