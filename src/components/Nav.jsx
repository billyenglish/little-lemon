import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import navLogo from "../assets/Logo1.png"
import "../media_queries/nav_media_query.css"

const navMenu = [
    { navTitle: 'Home', id: 0 },
    { navTitle: 'Menu', id: 1 },
    { navTitle: 'Specials', id: 2 },
    { navTitle: 'Order Online', id: 3 },
    { navTitle: 'Reservations', id: 4 },
    { navTitle: 'About', id: 5 },
    { navTitle: 'Contact', id: 6 },
];

const Nav = () => {

    const [currentNavMenu, setCurrentNavMenu] = useState(true);

    const handleToggleMenu = () => {
        setCurrentNavMenu(prevMenu => !prevMenu);
    }

    return (
        <nav>
            <div>
                <img
                    src={navLogo}
                    className="nav_logo"
                />
            </div>

            <div className="desktop_nav_menu_container">
                <ul className="desktop_nav_list">
                    {navMenu.map((navItems) => (
                        <li
                            className="desktop_nav_items"
                            key={navItems.id}>
                            {navItems.navTitle}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mobile_menu_container">
                <ul id={ currentNavMenu ? "mobile_menu_list_close" : "mobile_menu_list" }>
                    {navMenu.map((navItems) => (
                        <li
                            className="nav_mobile_menu_items"
                            key={navItems.id}
                        >
                            {navItems.navTitle}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="nav_menu_container">
                <button className="nav_menu_button" onClick={handleToggleMenu}>
                    { currentNavMenu ? <GiHamburgerMenu /> : <CgClose />}
                </button>
            </div>
        </nav>
    );
};

export default Nav;