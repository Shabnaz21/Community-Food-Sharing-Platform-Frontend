
import { Helmet } from "react-helmet";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import FAQ from "./FAQ/FAQ";
import FeaturedFood from "./FeaturedFood";
import Hero from "./Hero/Hero";
import HowWork from "./HowWork";
import Newsletter from "./Newsletter";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Share Plate | Connecting Communities Through Food </title>
                <meta name='description' content='Join our community food sharing platform, reduce waste, 
        and end hunger. Experience the taste of sustainability. Get started today!' />
            </Helmet>
            
            <Hero></Hero>
            <FeaturedFood></FeaturedFood>
            <AboutUs></AboutUs>
            <HowWork></HowWork>
            <FAQ></FAQ>
            <Contact></Contact>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;