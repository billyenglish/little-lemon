import Button from "../subcomponents/Button"
import SpecialsCard from "../subcomponents/SpecialsCard";
import Brochetta from "../assets/Brochetta.png"
import MediterraneanRolls from "../assets/mediterraneanRolls.png"
import LemonCake from "../assets/lemonDessert.jpg"

const SpecialsCards = [
    {
        image: Brochetta,
        title: 'Brochetta',
        price: '$20.99',
        description: `
            A rotating showcase of seasonal Mediterranean-inspired creations, crafted
            with locally sourced ingredients at their peak. Ask your server about today’s
            feature dish—available in limited quantities for a truly unique Little Lemon
            experience.
        `,
        id: 0
    },
    {
        image: MediterraneanRolls,
        title: 'Med Rolls',
        price: '$12.00',
        description: `
            Golden-baked rolls with a flaky crust, filled with marinated vegetables, fresh
            herbs, and creamy feta. Served warm with a zesty lemon-garlic dipping sauce,
            these rolls capturethe vibrant flavors of the Mediterranean in every bite.
        `,
        id: 1
    },
    {
        image: LemonCake,
        title: "Lemon Surpise",
        price: "$16.00",
        description: `
            A moist, multi-layered lemon cake made with fresh lemon zest, layered with smooth,
            tangy lemon cream frosting. Each slice is lightly drizzled with a sweet lemon glaze
            and finished with a hint of powdered sugar, delivering a perfect balance.
        `,
        id: 2
    }
];

const Specials = () => {

    return (
        <section id="special_section">
            <header id="section_header">
                <h2 className="section_title">
                    Chef's Lemon Specials
                </h2>

                <div>
                    <Button
                        text="Online Order"
                        className="online_order"
                    />
                </div>
            </header>

            <div className="special_menu_container">
                {SpecialsCards.map((cards) => (
                    <SpecialsCard
                        key={cards.id}
                        specialImage={cards.image}
                        specialTitle={cards.title}
                        specialPrice={cards.price}
                        specialDescription={cards.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Specials;