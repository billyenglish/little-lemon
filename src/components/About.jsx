import "../styles/about.css"

const About = () => {

    return (
        <section id="about_experience">
            <article id="about_intro">
                <h2 className="section_title about_title">
                    About Little Lemon
                </h2>

                <div className="about_container">
                    <p className="article_paragraph">
                        Little Lemon is a family-owned Mediterranean restaurant focused on traditional
                        recipes served with a modern twist. Located in the heart of Chicago, we bring
                        together fresh ingredients, bold flavors, and warm hospitality to create a memorable
                        dining experience.
                    </p>

                    <p className="article_paragraph">
                        Our menu is inspired by Mediterranean cuisine and crafted daily using locally sourced
                        produce and time-honored cooking techniques. Whether you’re joining us for a casual meal
                        or a special occasion, Little Lemon is dedicated to serving food that brings people together.
                    </p>
                </div>
            </article>
            <article id="about_images">
                <div id="about_image_one"></div>

                <div id="about_image_two"></div>
            </article>
        </section>

    )
}

export default About;