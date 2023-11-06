import { useContext } from "react";
import { FaBowlFood, FaLocationArrow } from "react-icons/fa6";
import { FcExpired } from "react-icons/fc";
import { AuthContext } from "../../Components/Hooks/AuthProvider/AuthProvider";
const AvailableFood = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <div className="">
                <div className="container max-w-lg bg-white rounded dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out m-12">
                    <div className="h-2/4 sm:h-64 overflow-hidden">
                        <img className="w-full rounded-t"
                            src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            alt="Food Image" />
                    </div>
                    <div className="flex justify-start px-5 -mt-12 mb-5">
                        <span>
                            <img alt={user.displayName}
                                src={user.photoURL} 
                                className="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1" />
                        </span>
                    </div>
                    <div className="">
                        <div className="px-7 mb-8">
                            <h2 className="text-3xl font-bold text-green-800 dark:text-gray-300">Food Name</h2>
                            <p className="text-gray-400 mt-2 dark:text-gray-400">{user.displayName}</p>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">Additional Notes</p>

                            <div className="p-3 space-y-2">
                                <div className="flex gap-2 items-center">
                                    <FaBowlFood className="text-lg"></FaBowlFood>
                                    <p>Food Quantity (no. of person to be served.)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <FaLocationArrow className="text-xl"></FaLocationArrow>
                                    <p>Pickup Location</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <FcExpired className="text-2xl"></FcExpired>
                                    <p>Expired Date/Time</p>
                                </div>
                            </div>
                            <div
                                className="btn w-96  mx-auto px-4 py-2 cursor-pointer
                                 bg-[#1FAF4B]
                                 mt-8 mb-8 rounded-lg text-white
                                  hover:bg-green-800 hover:text-gray-100
                                   ">
                                View Detail Button
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AvailableFood;