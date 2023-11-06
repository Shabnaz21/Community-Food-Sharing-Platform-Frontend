const Hero = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="container px-4 mx-auto mt-12">
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4 lg:mx-auto lg:w-2/5">
                        <div className=" lg:max-w-xl">
                            <h1 className="mb-6 text-4xl font-bold dark:text-gray-300 lg:text-6xl">
                                <span>Building </span>
                                <span className="text-blue-600 dark:text-blue-400">Bridges Through</span>
                                <span>  Shared Meals</span>
                            </h1>
                            <p className="mb-6 leading-8 text-gray-500 dark:text-gray-400">
                                Share your surplus food and make a profound difference in the lives of your neighbors.
                                We believe in the power of community, where a simple act of generosity can bring about significant change.
                            </p>
                            <a className="inline-block w-full px-6 py-4 mb-2 text-lg font-medium leading-6 text-center text-white transition duration-200 bg-primary-focus rounded shadow 
                            dark:bg-blue-500 dark:hover:bg-blue-700 md:w-auto md:mb-0 md:mr-4"
                                href="#">
                                Donate Foods
                            </a>
                        </div>
                    </div>
                    <div className="w-full px-4 mt-20 lg:w-2/5 lg:mt-0 ">
                        <div className="flex justify-center lg:justify-end">
                            <div className="mr-4 lg:mr-8">
                                <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                    src="https://www.gulftoday.ae/-/media/gulf-today/images/articles/lifestyle/2021/5/30/india-poor-1.ashx" alt="" />
                                    <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                    src="https://images2.imgbox.com/73/27/JK8aSoYU_o.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                    src="https://b.zmtcdn.com/data/o2_assets/fb8ec579b8f48d197f042a8e229e8c661621256027.png" alt=""/>
                                            <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                    src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/10115217/Inside-Image-Horizontal-20.jpeg" alt=""/>
                                            </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                </section>
    );
};

export default Hero;