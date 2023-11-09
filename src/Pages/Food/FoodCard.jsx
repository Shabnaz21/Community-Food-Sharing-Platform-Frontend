import PropTypes from 'prop-types';
import { FaBowlFood, FaLocationArrow } from "react-icons/fa6";
import { FcExpired } from "react-icons/fc";
import { Link } from "react-router-dom";
import { formatExpiredTime } from '../../Utilies/TimeFormate';

const FoodCard = ({ food }) => {
    const { _id, foodImage, foodName, foodQuantity,
        additionalNotes,
        expiredTime, pickupLocation, donatorName,
        donatorImage } = food;
 

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
                    <div className="flex justify-between">
                        <div className="flex justify-start px-5 md:-mt-12 -mt-8 mb-5">
                            <span>
                                <img alt={donatorName}
                                    src={donatorImage}
                                    className="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1" />
                            </span>
                        </div>
                        <div className="badge badge-primary bg-[#1FAF4B] 
                    text-white font-semibold mt-2 mr-4">available</div>
                    </div>
                    <div className="">
                        <div className="px-7 mb-8">
                            <h2 className="text-2xl md:text-xl font-bold text-green-800 dark:text-gray-300">{foodName}</h2>
                            <p className="text-gray-400 mt-2 dark:text-gray-400">{donatorName}</p>
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
                                    <p><span className="font-bold">Expired : </span>{formatExpiredTime(expiredTime)}</p>
                                </div>
                            </div>
                            <div className="mt-8 pb-8">
                                <Link to={`/foods/${_id}`}>
                                    <button
                                        className="btn mx-auto px-4 py-2 cursor-pointer flex place-content-center
                                 bg-secondary
                                  rounded-lg text-white
                                  hover:bg-green-800 hover:text-gray-100
                                   ">
                                        View Detail Button
                                    </button>
                                </Link>
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