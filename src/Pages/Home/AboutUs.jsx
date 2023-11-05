import { BiDonateHeart } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { FaBowlFood, FaPeopleCarryBox } from "react-icons/fa6";
const AboutUs = () => {
    return (
        <>
            <section className="py-10 lg:py-20 bg-stone-100 font-poppins dark:bg-gray-800">
                <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <div className="lg:max-w-md">
                                <div className="px-4 pl-4 mb-6 border-l-4 border-primary">
                                    <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
                                    <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                                        About Us
                                    </h1>
                                </div>
                                <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                    At Share Plate, we're on a mission to unite communities by sharing surplus food,
                                    reducing waste, and nourishing those in need. Join us in making a difference today.
                                </p>
                                <div className="flex flex-wrap items-center">
                                    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                        <div className="p-6 bg-white dark:bg-gray-900">
                                            <span className="text-secondary dark:text-primary text-3xl">
                                                <BiDonateHeart></BiDonateHeart>
                                            </span>
                                            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">2097
                                            </p>
                                            <h2 className="text-md text-gray-700 dark:text-gray-400">Total Donors</h2>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                        <div className="p-6 bg-white dark:bg-gray-900">
                                            <span className="text-secondary dark:text-primary text-3xl">
                                                <FaPeopleCarryBox></FaPeopleCarryBox>
                                            </span>
                                            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">590
                                            </p>
                                            <h2 className="text-sm text-gray-700 dark:text-gray-400">Helped people</h2>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                        <div className="p-6 bg-white dark:bg-gray-900">
                                            <span className="text-secondary dark:text-primary text-3xl">
                                                <BsPeopleFill></BsPeopleFill>
                                            </span>
                                            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">74
                                            </p>
                                            <h2 className="text-sm text-gray-700 dark:text-gray-400">Volunteers</h2>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                        <div className="p-6 bg-white dark:bg-gray-900">
                                            <span className="text-secondary dark:text-primary text-3xl">
                                                <FaBowlFood></FaBowlFood>
                                            </span>
                                            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">4500
                                            </p>
                                            <h2 className="text-sm text-gray-700 dark:text-gray-400">Meals Shared</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <img src="https://images2.imgbox.com/76/71/qHOZIvbQ_o.jpg" alt=""
                                className="relative z-40 object-cover w-full h-full rounded" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;