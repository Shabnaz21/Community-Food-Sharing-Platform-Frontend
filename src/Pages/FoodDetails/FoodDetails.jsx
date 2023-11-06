import { FaBowlFood, FaLocationArrow } from "react-icons/fa6";
import { FcExpired } from "react-icons/fc";
import { useLoaderData } from "react-router-dom";
import { Modal} from 'flowbite-react';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from "../../Components/Hooks/AuthProvider/AuthProvider";

const FoodDetails = () => {
    const { user } = useContext(AuthContext)
    const userEmail = user?.email;
    const currentDate = new Date().toLocaleString();
    const [openModal, setOpenModal] = useState(false);
    const emailInputRef = useRef < HTMLInputElement > (null);
    const foodData = useLoaderData();
    const { _id, foodImage, foodName, foodQuantity,
        additionalNotes, expiredTime, pickupLocation,
        donatorName, donatorImage, donationMoney, donatorEmail } = foodData;
    
    // Math for time
    const formatExpiredTime = (seconds) => {
        const days = Math.floor(seconds / 86400); 
        const hours = Math.floor((seconds % 86400) / 3600); 
        return `${days} Days, ${hours} Hours`;
    };

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
                                        <div className="pt-7 mt-5 flex gap-x-6">
                                            <div className="flex items-center gap-2">
                                                <FaBowlFood className="text-lg"></FaBowlFood>
                                                <p className=" text-lg text-gray-800 dark:text-gray-400">
                                                    <span className="text-lg font-bold">Quantity: </span> {foodQuantity} person
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FcExpired className="text-2xl"></FcExpired>
                                                <p className=" text-lg text-gray-800 dark:text-gray-400">
                                                    <span className="text-lg font-bold">Expired:  </span> {formatExpiredTime(expiredTime)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex place-content-center">
                                    <button onClick={() => setOpenModal(true)} className="btn btn-primary font-bold text-white w-96">
                                        Request for Food</button>
                                    <Modal show={openModal} size="2xl" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
                                        <Modal.Header />
                                        <Modal.Body>
                                            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10">
                                                <form>
                                                    <div className="mt-6 grid gap-4 lg:gap-6 max-w-7xl">
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                                            <div>
                                                                <label className="block text-sm text-gray-700 font-medium 
                                                                ">Food Name</label>
                                                                <input type="text"
                                                                    name="FName"
                                                                    defaultValue={foodName}
                                                                    className="py-3 px-4 block w-full
                                                                     mt-2 input input-bordered" disabled/>
                                                            </div>
                                                            <div>
                                                                <label className="block text-sm text-gray-700 font-medium ">Food Id </label>
                                                                <input type="text" name="id" defaultValue={_id}
                                                                    className="py-3 px-4 block w-full mt-2 input input-bordered" disabled/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm text-gray-700 font-medium dark:text-white">Food Image </label>
                                                            <input type="text"
                                                                name="FImage" defaultValue={foodImage}
                                                                className="py-3 px-4 block w-full mt-2 input input-bordered" disabled/>
                                                        </div>


                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                                            <div>
                                                                <label className="block text-sm text-gray-700 font-medium ">Donator Email </label>
                                                                <input type="text" name="DEmail" defaultValue={donatorEmail}
                                                                    className="py-3 mt-2 input input-bordered px-4 block w-full" disabled/>
                                                            </div>

                                                            <div>
                                                                <label className="block text-sm 
                                                                 text-gray-700 font-medium dark:text-white">Donator Name</label>
                                                                <input type="text"
                                                                    name="DName" defaultValue={donatorName}
                                                                    className="py-3 px-4 block mt-2 input input-bordered w-full" disabled/>
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                                            <div>
                                                                <label className="block text-sm text-gray-700 font-medium ">User Email </label>
                                                                <input type="text" name="UEmail" defaultValue={userEmail}
                                                                    className="py-3 mt-2 input input-bordered px-4 block w-full" disabled/>
                                                            </div>

                                                            <div>
                                                                <label className="block text-sm 
                                                                 text-gray-700 font-medium dark:text-white">Request Date</label>
                                                                <input type="text"
                                                                    name="time" defaultValue={currentDate}
                                                                    className="py-3 px-4 block mt-2 input input-bordered w-full" disabled/>
                                                            </div>

                                                        </div>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                                            <div>
                                                                <label className="block text-sm text-gray-700 font-medium ">Pickup Location</label>
                                                                <input type="text" name="location" defaultValue={pickupLocation}
                                                                    className="py-3 mt-2 input input-bordered px-4 block w-full" disabled/>
                                                            </div>

                                                            <div>
                                                                <label className="block text-sm 
                                                                 text-gray-700 font-medium dark:text-white">Expire Date</label>
                                                                <input type="text"
                                                                    name="expired" defaultValue={formatExpiredTime(expiredTime)}
                                                                    className="py-3 px-4 block mt-2 input input-bordered w-full" disabled/>
                                                            </div>

                                                        </div>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                                            <div>
                                                                <label className="block text-sm text-gray-700 font-medium ">Additional Notes</label>
                                                                <input type="text" name="notes" defaultValue={additionalNotes}
                                                                    className="py-3 mt-2 input input-bordered px-4 block w-full" />
                                                            </div>
                                                            <div>
                                                                <label className="block text-sm 
                                                                 text-gray-700 font-medium dark:text-white">Donation Money</label>
                                                                <input type="text"
                                                                    name="money" defaultValue={donationMoney}
                                                                    className="py-3 px-4 block mt-2 input input-bordered w-full" />
                                                            </div>

                                                        </div>
                                                        
                                                    </div>


                                                    <div className="mt-6 grid">
                                                        <button type="submit" className=" btn btn-secondary
                                                          text-white font-medium rounded-md
                                                          ">Request Food</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
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