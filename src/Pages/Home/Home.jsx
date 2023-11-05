import AboutUs from "./AboutUs";
import Contact from "./Contact";
import FAQ from "./FAQ/FAQ";
import HowWork from "./HowWork";
import Newsletter from "./Newsletter";

const Home = () => {
    return (
        <div>
            <AboutUs></AboutUs>
            <HowWork></HowWork>
            <FAQ></FAQ>
            <Contact></Contact>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;