import storeFront from "../images/RestaurantFront.png";

const Home = () => {
    return (
        <section className="hero-section">
            <div className="hero-section-image hero-content">
                <img
                    src={storeFront} alt="Little Lemon"
                    height="auto"
                    width={600}
                />
            </div>
            <div className="hero-section-intro hero-content">
                <h2 className="hero-section-title">Welcome to Little Lemon</h2>

                <p className="hero-intro-paragraph">
                    Welcome to Little Lemon, a charming, family-owned Mediterranean restaurant known for its
                    fresh ingredients, vibrant flavors, and warm hospitality. Nestled in the heart of Chicago,
                    Little Lemon offers a cozy and inviting atmosphere where guests can enjoy traditional dishes
                    with a modern twist. Whether you're craving a refreshing Greek salad, savory falafel, or a zesty
                    lemon dessert, our menu delivers a delightful culinary journey inspired by the sun-soaked coasts
                    of the Mediterranean.
                </p>

                <p className="hero-intro-paragraph second-paragraph">
                    Come for the food, stay for the experience!
                </p>
            </div>
        </section>
    );
};

export default Home;