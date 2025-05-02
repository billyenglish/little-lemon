import beefPasta from "../images/BeefPasta.png";
import pepperSeaBass from "../images/PepperSeaBass.png";
import mediterraneanRolls from "../images/mediterraneanRolls.png"

const specialMenuItems = [
    {
        menuPhoto: beefPasta,
        menuTitle: "Beef Pasta",
        menuPrice: "$ 20.99",
        menuDescription:
            `Tender strips of seasoned beef sautéed with garlic,
            cherry tomatoes, and baby spinach, tossed in a light
            lemon-butter sauce over a bed of al dente fettuccine.
            Finished with a sprinkle of Parmesan and fresh lemon
            zest for a bright, savory bite.`
        ,
        id: 0
    },
    {
        menuPhoto: pepperSeaBass,
        menuTitle: "Pepper Sea Bass",
        menuPrice: "$ 27.00",
        menuDescription:
            `Fresh sea bass fillet seared to a golden crisp, infused
            with cracked black pepper and finished in a savory garlic-ginger
            soy glaze. Accented with a splash of citrus and garnished with
            fresh herbs. Served with rice or seasonal
            vegetables.`
        ,
        id: 1
    },
    {
        menuPhoto: mediterraneanRolls,
        menuTitle: "Mediterranean Rolls",
        menuPrice: "$ 21.00",
        menuDescription:
            `Soft wraps rolled with a vibrant blend of herbed hummus, feta
            cheese, sun-dried tomatoes, olives, cucumbers, and crisp greens.
            Drizzled with a lemon dressing and served chilled for a
            refreshing bite. Vegetarian and packed with flavor.
            `
        ,
        id: 2
    }
];

const Specials = () => {
    return (
        <section className="specials-section">
            <h3>Lemon Specials</h3>

            <div className="specials-menu-container">
                {
                    specialMenuItems.map((menuSpecial) => {
                        return (
                            <div className="special-menu-item" key={menuSpecial.id}>
                                <div className="special-menu-image">
                                    <img src={menuSpecial.menuPhoto} className="beef-pasta-image" />
                                </div>
                                <div className="menu-item-price">
                                    <ul className="menu-title">
                                        <li className="menu-item-name">
                                            {menuSpecial.menuTitle}
                                        </li>
                                        <li className="menu-item-price">
                                            {menuSpecial.menuPrice}
                                        </li>
                                    </ul>
                                </div>
                                <div className="menu-description">
                                    <p>
                                        {menuSpecial.menuDescription}
                                    </p>
                                </div>
                                <div>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    )
}

export default Specials;