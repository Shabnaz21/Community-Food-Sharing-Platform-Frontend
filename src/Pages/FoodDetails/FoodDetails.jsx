import { FaBowlFood, FaLocationArrow } from "react-icons/fa6";
import { FcExpired } from "react-icons/fc";
import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
    const foodData = useLoaderData();
    console.log(foodData);
    const {foodImage, foodName, foodQuantity, additionalNotes, expiredTime, pickupLocation, donatorName, donatorImage } = foodData;
    return (
        <section className="container mx-auto mt-10">
            <div>
                <div className="hero min-h-[300px] rounded-2xl" style={{
                    backgroundImage:
                        `url(https://images2.imgbox.com/ce/b6/NUQw5Z7i_o.jpg)`
                }}>
                    <div className="hero-overlay rounded-2xl bg-opacity-40"></div>
                    <div className="hero-content text-center text-white flex-col">
                        <h2 className="mb-3 text-5xl font-jost font-bold"><span>Donated Foods Details </span></h2>
                        <div className=" text-white p-5 pl-20 pr-20 md:mt-12 -mb-28 
                        bg-[#11444E]" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)' }}>
                            <p className="font-semibold">Food Name / {foodName}</p>
                        </div>
                    </div>
                </div>
                <div className="hero min-h-screen rounded-2xl mb-20">
                    {/* product box */}
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                            <div className="lg:col-span-3">
                                {/* donator */}
                                <div className="grid grid-cols-2
                                gap-8 md:gap-12 justify-between items-center">
                                    <div className="text-center ">
                                        <div className="avatar placeholder">
                                            <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                                                <img className="rounded-full mx-auto"
                                                    src={donatorImage} alt="Image Description" />
                                            </div>
                                        </div> 
                                        <div className="">
                                            <h3 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                                                {donatorName}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaLocationArrow className="text-xl"></FaLocationArrow>
                                        <p className="font-medium text-lg text-gray-800 dark:text-gray-200">{pickupLocation}</p>
                                    </div>
                                </div>
                                <hr className="mt-5" />
                                {/* Food info */}
                                <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                                    <div className="card-body">
                                        <h1 className="block text-3xl font-jost font-bold text-gray-800 
                                  dark:text-white"><span className="font-bold">Food Name:</span> {foodName}</h1>
                                        <p className=" text-lg text-gray-800 dark:text-gray-400">
                                            <span className="text-lg font-bold">Note : </span> {additionalNotes}
                                        </p>
                                        <div className="pt-7 mt-5 flex gap-x-8">
                                            <div className="flex items-center gap-2">
                                                <FaBowlFood className="text-lg"></FaBowlFood>
                                                <p className=" text-lg text-gray-800 dark:text-gray-400">
                                                    <span className="text-lg font-bold">Food Quantity: </span> {foodQuantity}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FcExpired className="text-2xl"></FcExpired>
                                                <p className=" text-lg text-gray-800 dark:text-gray-400">
                                                    <span className="text-lg font-bold">Expired Date/Time:  </span> {expiredTime}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex place-content-center">
                                    <button className="btn btn-primary font-bold text-white w-96">
                                        Request for Food</button>
                                </div>
                            </div>


                            <div className="lg:col-span-4 mt-10 lg:mt-0">
                                <img className="w-full h-full rounded-xl" src={foodImage} alt={foodName} />
                            </div>

                        </div>

                    </div>
                    
                  
                </div>
            </div>
        </section>
    );
};

export default FoodDetails;