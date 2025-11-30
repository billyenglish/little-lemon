import FinDining from "../assets/FineDining.png"

const Homepage = () => {

    return (
        <section id="homepage">
            <article id="welcome_article">
                <h1 id="title">
                    Welcome to Little Lemon
                </h1>

                <p id="article_paragraph">
                    A cozy neighborhood bistro serving fresh, Mediterranean-inspired dishes made from locally sourced ingredients.
                    Join us for vibrant flavors, warm hospitality, and a relaxed atmosphere—perfect for weeknight dinners, weekend
                    brunch, or a quick bite with friends.
                </p>

                <p id="article_paragraph">
                    Join us for vibrant flavors, warm hospitality, and a relaxed atmosphere—perfect for weeknight dinners, weekend
                    brunch, or a quick bite with friends.
                </p>

                <div>
                    <button className="reserve_a_table">
                        Reserve A Table
                    </button>
                </div>
            </article>
            <article id="welcome_images">
                <img
                    src={FinDining}
                    height={450}
                    width="auto"
                />
            </article>
        </section>
    );
};

export default Homepage;