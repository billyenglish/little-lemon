import React from "react";
import { useState } from "react";
import navLogo from "../logo/Logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const navMenuItems = [
    {navMenuListItem: "Home", navLink: "/" , id: 0},
    {navMenuListItem: "About", navLink: "/", id: 1},
    {navMenuListItem: "Menu", navLink: "/", id: 2},
    {navMenuListItem: "Reservations", navLink: "/", id: 3},
    {navMenuListItem: "Online Order", navLink: "/", id: 4},
    {navMenuListItem: "Login", navLink: "/", id: 5}
];

const Nav = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const handleToggleMenu = () => {

        if (openMenu) {
            console.log("Menu is closed!");
        } else {
            console.log("Menu is open!");
        }

        setOpenMenu(!openMenu);

    }

    return (
        <nav className="nav-menu">
            <div className="logo-container">
                <img src={navLogo} alt="Little Lemon Logo" />
            </div>

            <ul className="nav-desktop-list">
                {
                    navMenuItems.map((navMenu) => {
                        return (
                            <li className="nav-menu-desktop" key={navMenu.id}>
                                {navMenu.navMenuListItem}
                            </li>
                        )
                    })
                }
            </ul>

            <ul className={`nav-mobile-list ${openMenu ? "active" : ""}`}>
                <li className="nav-mobile-item">Home</li>
            </ul>

            <div className="hamburger-menu-container" onClick={handleToggleMenu}>
                {openMenu ? <FaBars className="hamburger-menu" /> : <FaTimes className="close-menu" />}
            </div>
        </nav>
    );
};

export default Nav;