import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Components/Hooks/AuthProvider/AuthProvider";
import { useState } from "react";
import useAxios from "../../Components/Hooks/useAxios/useAxios";
import RequestRow from "./RequestRow";
import Swal from "sweetalert2";


const FoodRequest = () => {
    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);
    const axios = useAxios();

    const url = `/food-request?email=${user?.email}`
    useEffect(() => {
        axios.get(url)
            .then(data =>
                setFoods(data?.data))
        
    }, [url, axios])

    const handleDelete = id => {
        const proceed = Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })

        if (proceed) {
            const url = `/food-request/${id}`
            axios.delete(url)
                .then(data => {
                    if (data?.data?.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Are you sure that you want to delete it?',
                            'success'
                        )
                        const remaining = foods.filter(food => food._id !== id)
                        setFoods(remaining)
                    }
                } )
        }
    }
    const handleRequestConfirm = id => {
        // 
        axios.patch(`/food-request/${id}`, { status: 'available' })
            .then(data => {
                console.log(data.data);
                if (data?.data.modifiedCount > 0) {
                    // update state
                    const remaining = foods.filter(food => food._id !== id);
                    const updated = foods.find(food => food._id === id);
                    updated.status = 'available'
                    const newRequests = [...remaining, updated];
                    setFoods(newRequests);
                }
        })
    }
    return (
        <section className='container mx-auto m-10'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Share Plate | My Food Request </title>
                <meta name='description' content='Connect, share, and reduce food waste with our community-driven platform. 
                Request and donate food to make a positive impact today' />
            </Helmet>
            <div className='container mx-auto mt-20'>
                <div className="mx-auto mb-[60px] max-w-[920px] text-center">
                    <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-jost md:text-[40px]">
                        Request Food Assistance
                    </h2>
                    <p className="text-base px-10 text-body-color mb-5">
                        Request fresh, nutritious food to meet your needs, and we will connect you with a
                        community of caring individuals ready to lend a hand.
                        No one should go to bed hungry – let us assist you in your time of need.
                    </p>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox"
                                        className="w-4 h-4 text-blue-600
                                         bg-gray-100 border-gray-300 rounded" />
                                    <label className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Food Info
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Donar Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Pickup Location
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Expire Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Request Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Your Donation Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foods.map(item => <RequestRow
                                key={item._id}
                                foodRequest={item}
                                handleDelete={handleDelete}
                                handleRequestConfirm={handleRequestConfirm}
                            ></RequestRow>)
                        }
                    </tbody>
                </table>
            </div>

        </section>
    );
};

export default FoodRequest;