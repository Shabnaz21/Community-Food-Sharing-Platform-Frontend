import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section>
            <footer>
                <div className="footer p-10 lg:pl-20 bg-[#11444E] text-white">
                    <aside className="space-y-3">
                        <Link to='/'><div className="flex items-center">
                            <img src="https://images2.imgbox.com/de/03/xdiHcwLt_o.png" className="w-20 h-16" alt="Logo" />
                            <p className=" text-xl font-jost ml-2 lg:text-4xl">SHARE PLATE</p>
                        </div></Link>
                        <p className="text-left block lg:block md:hidden">Join our mission to fight food waste and hunger with our Community <br /> Food Sharing Platform. Connect surplus food donors with those in need, <br />fostering sustainability and community support.</p>
                        <div className="flex gap-3 text-xl ">
                            <p><BsFacebook></BsFacebook></p>
                            <p><BsTwitter></BsTwitter></p>
                            <p><BsInstagram></BsInstagram></p>
                        </div>
                    </aside>
                    <div className="footer grid grid-cols-2 md:grid-cols-4 mx-auto w-auto  gap-6">
                        <nav>
                            <header className="footer-title font-jost">Explore</header>
                            <a className="link link-hover">About Us</a>
                            <a className="link link-hover">Blog</a>
                            <a className="link link-hover">FAQs</a>
                            <a className="link link-hover">Contact Us</a>
                        </nav>
                        <nav>
                            <header className="footer-title font-jost">Get Involved</header>
                            <a className="link link-hover">Donate Food</a>
                            <a className="link link-hover">Volunteer</a>
                            <a className="link link-hover">Partner with Us</a>
                            <a className="link link-hover">Events</a>
                        </nav>
                        <nav>
                            <header className="footer-title font-jost">Resources</header>
                            <a className="link link-hover">Food Safety Guidelines</a>
                            <a className="link link-hover">Sustainability Tips</a>
                            <a className="link link-hover">Community Stories</a>
                            <a className="link link-hover">Support Center</a>
                        </nav>
                        <nav>
                            <header className="footer-title font-jost">Contact</header>
                            <a className="link link-hover">123 Main Street Chicago, IL 60601 USA </a>
                            <a className="link link-hover">Help-Line : +1 234-567-89</a>
                        </nav>
                    </div>
                </div>
                <hr />
                <div className="flex items-center p-4 lg:pl-20 lg:pr-10 bg-[#11444E] text-white gap-x-20  justify-between">
                    <p>Copyright © 2023 - All right reserved</p>
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        Developed by: <Link to='https://github.com/Shabnaz21'>Shabnaz</Link>
                    </nav>
                </div>
            </footer>
        </section>
    );
};

export default Footer;