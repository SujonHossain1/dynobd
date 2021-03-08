import React, { useState } from 'react';
import { BiUser, FiSettings, IoMdLogOut } from 'react-icons/all';
import { Link } from 'react-router-dom';

function Mobile() {
    const [open, setOpen] = useState(false);
    return (
        <NavItem icon={<BiUser />} open={open} setOpen={setOpen}>
            <DropdownMenu open={open} setOpen={setOpen} />
        </NavItem>
    );
}

function NavItem(props) {
    const { open, setOpen } = props;
    return (
        <li className="mobile-nav-item">
            <span className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </span>
            {open && props.children}
        </li>
    );
}

function DropdownMenu({ setOpen, open }) {
    return (
        <div className="dropdown">
            <div className="menu">
                <DropdownItem leftIcon={<BiUser />} path='/profile'>My Profile</DropdownItem>
                <DropdownItem leftIcon={<FiSettings />} path='/setting' > Settings </DropdownItem>
            <DropdownItem leftIcon={<IoMdLogOut />} path='/logout'>Logout</DropdownItem>
        </div>
        </div >
    );

    function DropdownItem({leftIcon, path, children}) {
        return (
            <Link to={path} className="menu-item" onClick={() => setOpen(!open)}>
                <span className="icon-button">{leftIcon}</span>
                <span style={{ fontSize: '18px', fontWeight: '700' }}>{children}</span>
            </Link>
        );
    }

}

export default Mobile;