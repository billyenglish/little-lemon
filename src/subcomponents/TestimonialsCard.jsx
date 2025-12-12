import { FaRegStar } from "react-icons/fa";

const TestimonialsCard = ({ 
    image,
    author,
    social,
    reviews,
    id
}) => {

    return (
        <div className="testimonial_cards" key={id}>
            <div className="testimonial_header">
                <div>
                    <img
                        src={image}
                        className="testimonial_image"
                    />
                </div>

                <div className="testimonial_person">
                    <h4 className="testimonials_title">{author}</h4>
                    <p className="testimonial_subtitle">&copy;{social}</p>
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
                    {reviews}
                </p>
            </div>
        </div>
    );
};

export default TestimonialsCard;