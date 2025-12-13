import "../media_queries/homepage_query.css"
import FinDining from "../assets/FineDining.png"

const Homepage = () => {

    return (
        <section id="homepage">
            <article id="welcome_article">
                <h1 id="title">
                    Welcome to Little Lemon
                </h1>

                <p className="article_paragraph">
                    A cozy neighborhood bistro serving fresh, Mediterranean-inspired dishes made from locally sourced ingredients.
                    Join us for vibrant flavors, warm hospitality, and a relaxed atmosphere—perfect for weeknight dinners, weekend
                    brunch, or a quick bite with friends.
                </p>

                <p className="article_paragraph">
                    Join us for vibrant flavors, warm hospitality, and a relaxed atmosphere—perfect for weeknight dinners, weekend
                    brunch, or a quick bite with friends.
                </p>

                <div className="reserve_table_container">
                    <button className="reserve_a_table">
                        Reserve A Table
                    </button>
                </div>
            </article>
            <article id="welcome_images">
                <img
                    className="welcome_image"
                    src={FinDining}
                    height={450}
                    width="auto"
                />
            </article>
        </section>
    );
};

export default Homepage;