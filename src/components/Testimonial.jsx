import { FaRegStar } from "react-icons/fa";
import MikeImage from "../assets/Mike.png";

const Testimonial = () => {

    return (
        <section id="testimonial_section">
            <h2 className="section_title testimonial_title">
                Customer Testimonials
            </h2>

            <div className="testimonial_cards_container">
                <div className="testimonial_cards">
                    <div className="testimonial_header">
                        <div>
                            <img
                                src={MikeImage}
                                className="testimonial_image"
                            />
                        </div>

                        <div className="testimonial_person">
                            <h4 className="testimonials_title">Julian Brooks</h4>
                            <p className="testimonial_subtitle">&copy;JulianJoyBites</p>
                        </div>
                    </div>
                    <div className="testimonial_rating">
                        <p className="rating">
                            {[...Array(5)].map((__, current) => (
                                <p key={current.id}>
                                    <FaRegStar
                                        className="star_icons"
                                    />
                                </p>
                            ))}
                        </p>
                    </div>
                    <div>
                        <p className="reviews">
                            "Loved Little Lemon! Fresh flavors, friendly staff, and the
                             emon desserts are amazing—will be back!"
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonial;