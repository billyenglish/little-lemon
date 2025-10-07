import "../styles/nav.css";

const navMenu = [
    {
        navTitle: 'Home',
        id: 0,
    },
    {
        navTitle: 'About Us',
        id: 1,
    },
    {
        navTitle: 'Reservations',
        id: 2,
    },
    {
        navTitle: 'Order Online',
        id: 3,
    },
    {
        navTitle: 'Events',
        id: 4,
    },
    {
        navTitle: 'Gallery',
        id: 5,
    },
    {
        navTitle: 'Contact Us',
        id: 6,
    },
]

const Nav = () => {

    return (
        <nav>
            <h1 id="logo">
                Logo
            </h1>

            <ul id="nav_menu_list">
                {
                    navMenu.map((navItems) => {
                        return (
                            <li
                                className="nav_items"
                                key={navItems.id}
                            >
                                {navItems.navTitle}
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}

export default Nav;