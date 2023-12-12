import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import useAxios from "../../Components/Hooks/useAxios/useAxios";
import Swal from "sweetalert2";
import { useState } from "react";

const UpdateMyFood = () => {
    const foodData = useLoaderData();
    const {_id, foodImage, foodName, foodQuantity,
        additionalNotes, expiredTime, pickupLocation, donatorEmail } = foodData;
    const axios = useAxios();
    const [foods, setFoods] = useState([]);
    

    const handleEdit = id => {

        axios.patch(`/foods/${id}`, { status: 'Deliver' })
            .then(data => {
                console.log(data.data);
                if (data?.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success',
                        text: 'Your surplus food successfully Update for your neighbors',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                    // update state
                    const remaining = foods.filter(food => food._id !== id);
                    const updated = foods.find(food => food._id === id);
                    updated.status = 'Deliver'
                    const newRequests = [...remaining, updated];
                    setFoods(newRequests);
                }
            })
        
    }
    return (
        <section>
            <Helmet>
                <meta charSet="utf-8" />
                <title> Share Plate | Update My Foods </title>
                <meta name='description' content='Join our community food sharing platform, reduce waste, 
        and end hunger. Experience the taste of sustainability. Get started today!' />
            </Helmet>

            <div className="container mx-auto m-20">
                <div className="bg-[#f5fff8] rounded-xl mx-2 md:mx-5 p-2 pb-8 pt-8 ">
                    <div className="text-center ">
                        <h2 className="text-4xl m-4 font-semibold font-jost">Update Food Listing</h2>
                        <p className="lg:max-w-3xl lg:mx-auto">
                            Make a difference by sharing your surplus food with those in need. Adding a food listing on our platform is quick and easy. Together, we can nourish our community and work towards a more sustainable future.
                            Let&apos;s reduce food waste and address hunger, one meal at a time.
                        </p>
                    </div>
                    <div>
                        <form  className=" lg:mx-40 mt-10 space-y-3">
                            <div className="xl:mx-32">
                                <div className="md:flex gap-20 ">
                                    <div className="form-control w-96">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Food Name</span>
                                        </label>
                                        <label className="input-group ">
                                            <input type="text" name='FName'
                                                defaultValue={foodName}
                                                placeholder="Enter Food Name" className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                    <div className="form-control w-96 ">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Food Image</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name='FPhoto'
                                                defaultValue={foodImage}
                                                placeholder="Enter Food Image URL"
                                                className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                </div>
                                {/* 2 */}
                                <div className="md:flex gap-20">
                                    <div className="form-control w-96">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Food Quantity</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name='quantity'
                                                defaultValue={foodQuantity}
                                                placeholder="(No. of person to be served)" className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                    <div className="form-control w-96">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Pickup Location</span>
                                        </label>
                                        <label className="input-group ">
                                            <input type="text" name='pickup' defaultValue={pickupLocation}
                                                placeholder="Enter Pickup Location" className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="md:flex gap-20">
                                    <div className="form-control w-96">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Expired Time(seconds)</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name='expired' defaultValue={expiredTime}
                                                placeholder="Enter Expired Time in second" className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                    <div className="form-control w-96">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Donator Email</span>
                                        </label>
                                        <label className="input-group ">
                                            <input type="text" name='DName' defaultValue={donatorEmail}
                                                placeholder="Enter Donator Name" className="input p-3 w-full input-bordered" disabled />
                                        </label>
                                    </div>
                                </div>
                                {/* 4 */}
                                <div className="md:flex gap-20">
                                    <div className="form-control w-96">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Additional Notes</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name='notes' defaultValue={additionalNotes}
                                                placeholder="" className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                    <div className="form-control w-96">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Food Status</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name='status' 
                                                placeholder="Enter Food Status" className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                </div>
                                {/* Button */}
                                <div className="form-control flex place-content-center">
                                    <input type="submit"
                                        onClick={() => handleEdit(_id)}
                                        value="Updated Your Food"
                                        className="text-xl font-Rancho 
                                        
                            rounded-xl bg-primary text-white border-2
                             hover:text-white md:w-[100%] xl:w-[95%]
                             mt-5 p-4 w-96 font-semibold" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdateMyFood;