import { useContext } from "react";
import PropTypes from 'prop-types';
import { FaBowlFood, FaLocationArrow } from "react-icons/fa6";
import { FcExpired } from "react-icons/fc";
import { AuthContext } from "../../Components/Hooks/AuthProvider/AuthProvider";

const FoodCard = ({ food }) => {
    const { foodImage, foodName, foodQuantity, additionalNotes, expiredTime, pickupLocation } = food;
    const { user } = useContext(AuthContext);
    console.log(user?.displayName );

    return (
        <>
            <div className="">
                <div className="container max-w-lg bg-white rounded dark:bg-gray-800 
                shadow-lg transform duration-200 easy-in-out">
                    <div className="h-2/4 sm:h-64 overflow-hidden">
                        <img className="w-full rounded-t"
                            src={foodImage}
                            alt="Food Image" />
                    </div>
                    <div className="flex justify-start px-5 -mt-12 mb-5">
                        <span>
                            <img alt={user?.displayName}
                                src={user?.photoURL}
                                className="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1" />
                        </span>
                    </div>
                    <div className="">
                        <div className="px-7 mb-8">
                            <h2 className="text-2xl font-bold text-green-800 dark:text-gray-300">{foodName}</h2>
                            <p className="text-gray-400 mt-2 dark:text-gray-400">{user?.displayName}</p>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{additionalNotes}</p>

                            <div className="p-3 space-y-2">
                                <div className="flex gap-2 items-center">
                                    <FaBowlFood className="text-lg"></FaBowlFood>
                                    <p><span className="font-bold">Food Quantity:</span> {foodQuantity} per person </p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <FaLocationArrow className="text-xl"></FaLocationArrow>
                                    <p><span className="font-bold"> Pickup Location: </span>{pickupLocation} </p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <FcExpired className="text-2xl"></FcExpired>
                                    <p><span className="font-bold">Expired Date/Time: </span>{expiredTime}</p>
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
FoodCard.propTypes = {
    food: PropTypes.object,
    
}
export default FoodCard;