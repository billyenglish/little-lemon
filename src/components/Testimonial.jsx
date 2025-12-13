import MikeImage from "../assets/Mike.png";
import NikaImage from "../assets/Nika.png";
import DanielImage from "../assets/Daniel.png"
import LillyImage from "../assets/Lilly.png"
import TestimonialsCard from "../subcomponents/TestimonialsCard";
import "../media_queries/testimonial_query.css"

const TestimonialCard = [
    {
        image: MikeImage,
        title: 'Julian Brooks',
        social: 'JulianJoyBites',
        reviews: `
            - Loved Little Lemon! Fresh flavors, friendly staff, and the lemon desserts
            are amazing—will be back!`,
        id: 0
    },
    {
        image: NikaImage,
        title: 'Monique Harris',
        social: 'sarah.eatsatl',
        reviews: `
            - Obsessed with Little Lemon! Cozy vibe, super friendly staff, and the Mediterranean
            Rolls are a must-try.`,
        id: 1
    },
    {
        image: DanielImage,
        title: 'Daniel Brooks',
        social: 'daniel_dines',
        reviews: `
            - Little Lemon never misses. Fresh flavors, quick service, and the Beef Pasta is
            my favorite comfort meal.
        `,
        id: 2
    },
    {
        image: LillyImage,
        title: 'Lauren King',
        social: 'laurenloves',
        reviews: `
            - Little Lemon is my favorite spot for relaxed dinners. The food is always fresh,
            and the desserts are amazing.
            `,
        id: 3
    }
];

const Testimonial = () => {

    return (
        <section id="testimonial_section">
            <h2 className="section_title testimonial_title">
                Customer Testimonials
            </h2>

            <div className="testimonial_cards_container">
                {
                    TestimonialCard.map((cards) => (
                        <TestimonialsCard
                            key={cards.id}
                            image={cards.image}
                            author={cards.title}
                            social={cards.social}
                            reviews={cards.reviews}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default Testimonial;