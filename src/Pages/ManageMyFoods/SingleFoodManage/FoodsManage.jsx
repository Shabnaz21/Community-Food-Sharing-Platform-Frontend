import { useLoaderData } from "react-router-dom";

import { Helmet } from "react-helmet";
import useAxios from "../../../Components/Hooks/useAxios/useAxios";
import { useEffect, useState } from "react";


const FoodsManage = () => {
    const axios = useAxios();
    const foodData = useLoaderData();
    const donatedFood = foodData.foodName;
    const [foods, setFoods] = useState([]);
    const { foodName} = foodData;

    const url = `/food-request?foodName=${donatedFood}`
    useEffect(() => {
        axios.get(url)
            .then(data => {
                if (data?.data) {
                    setFoods(data.data[0]);
            }   
            })
                

    }, [url, axios])

    const handleRequestConfirm = id => {
        // 
        axios.patch(`/food-request/${id}`, { status: 'Delivered' })
            .then(data => {
                console.log(data.data);
                if (data?.data.modifiedCount > 0) {
                    // update state
                    const remaining = foods.filter(food => food._id !== id);
                    const updated = foods.find(food => food._id === id);
                    updated.status = 'Delivered'
                    const newRequests = [...remaining, updated];
                    setFoods(newRequests);
                }
            })
    }
    return (
        <section className='container mx-auto m-10'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Share Plate | Manage Single Foods </title>
                <meta name='description' content='Connect, share, and reduce food waste with our community-driven platform. 
                Request and donate food to make a positive impact today' />
            </Helmet>
            <div className='container mx-auto mt-20'>
                <div className="mx-auto mb-[60px] max-w-[920px] text-center">
                    <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-jost md:text-[40px]">
                        Foods Name {foodName}
                    </h2>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Food Info
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Requester Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Requester Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Expire Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Request Time and Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                               Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                {foods.foodName}
                            </th>
                            <th scope="col" className="px-6 py-3">
                                {foods.userEmail}
                            </th>
                            <th scope="col" className="px-6 py-3">
                                
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="rounded-xl w-20 h-20">
                                            <img src={foods.userImage} alt={foods.userName} />
                                        </div>
                                    </div>
                                    </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                {foods.expiredTime}
                            </th>
                            <th scope="col" className="px-6 py-3">
                                {foods.date}
                            </th>
                            <th scope="col" onClick={() => handleRequestConfirm(foods?._id)} className="px-6 py-3">
                                {
                                    foods.status === 'available' ? <span className="font-bold text-primary">Delivered</span> :
                                        <button className="btn btn-ghost btn-xs">Available</button>}
                            </th>
                       </tr>
                    </tbody>
                </table>
            </div>

        </section>
    );
};

export default FoodsManage;