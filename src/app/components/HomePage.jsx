import '../styles/homepage.css'

const HomePage = () => {

    return (
        <section>
            <article className="homepage_section">
                <div className="homepage_headline_container">
                    <h2 className="homepage_title">
                        Little Lemon
                    </h2>

                    <h3 className="homepage_primary_sub_title">
                        Venice, Italy
                    </h3>

                    <h4 className="homepage_secondary_sub_title">
                        Welcome to Little Lemon — Where Fresh Flavors Meet Family Tradition
                    </h4>

                    <p className="homepage_introduction">
                        Nestled in the heart of Venice, Little Lemon is a cozy neighborhood restaurant serving up
                        vibrant Mediterranean-inspired cuisine with a modern twist. From zesty lemon-roasted chicken to
                        hand-crafted mezze platters, every dish is made with love, fresh ingredients, and a dash of sunshine.
                    </p>

                    <div>
                        <button
                            className="reservation_button"
                        >
                            Reserve Table
                        </button>
                    </div>
                </div>
            </article>
            <article className="homepage_section">
                Hompage Intro
            </article>
        </section>
    );
}

export default HomePage;