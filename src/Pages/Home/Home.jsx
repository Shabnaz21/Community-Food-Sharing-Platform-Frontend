import AboutUs from "./AboutUs";
import Contact from "./Contact";
import FAQ from "./FAQ/FAQ";
import Hero from "./Hero/Hero";
import HowWork from "./HowWork";
import Newsletter from "./Newsletter";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutUs></AboutUs>
            <HowWork></HowWork>
            <FAQ></FAQ>
            <Contact></Contact>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;