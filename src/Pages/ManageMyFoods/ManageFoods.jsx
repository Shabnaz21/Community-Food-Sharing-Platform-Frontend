import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import useAxios from '../../Components/Hooks/useAxios/useAxios';
import ManageRow from './ManageRow';
import Swal from 'sweetalert2';
import useAuth from '../../Components/Hooks/useAuth';

const columns = [
    {
        accessorKey: "foodName",
        header: "Food Name",
        size: 225,
        cell: (props) => <p>{props.getValue}</p>
        
    },
    {
        accessorKey: "foodName",
        header: "Food Name",
        size: 225,
        cell: (props) => <p>{props.getValue}</p>
        
    },
    {
        accessorKey: "foodQuantity",
        header: "Food Quantity",
        size: 225,
        cell: (props) => <p>{props.getValue}</p>
        
    },
    {
        accessorKey: "pickupLocation",
        header: "Pickup Location",
        size: 225,
        cell: (props) => <p>{props.getValue}</p>
        
    },
    {
        accessorKey: "expiredTime",
        header: "Expired Time",
        size: 225,
        cell: (props) => <p>{props.getValue}</p>
        
    },
    {
        accessorKey: "donatorName",
        header: "Donator Name",
        size: 225,
        cell: (props) => <p>{props.getValue}</p>
        
    },
    {
        accessorKey: "donationMoney",
        header: "Donation Money",
        size: 225,
        cell: (props) => <p>{props.getValue}</p>
        
    },
    {
        accessorKey: "additionalNotes",
        header: "Notes",
        size: 225,
        cell: (props) => <p>{props.getValue}</p>

    }
   
];

const ManageFoods = () => {
    const axios = useAxios();
    const { user } = useAuth();
    const userEmail = user?.email
    const [foodData, setFoodData] = useState([])
    
    const url = `/foods?donatorEmail=${userEmail}`
    useEffect(() => {
        axios.get(url)
            .then(data =>
                setFoodData(data.data.result)
            )

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
            const url = `/foods/${id}`
            axios.delete(url)
                .then(data => {
                    if (data?.data?.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Are you sure that you want to delete it?',
                            'success'
                        )
                        const remaining = foodData.filter(food => food._id !== id)
                        setFoodData(remaining)
                    }
                })
        }
    }
    
//     const table = useReactTable({
//         data, columns,
//         getCoreRowModel: getCoreRowModel()
//     });
    //     console.log(table.getHeaderGroups);
    
    return (
        <section className='container mx-auto m-5'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Share Plate | Manage My Foods </title>
                <meta name='description' content='Join our community food sharing platform, reduce waste, 
        and end hunger. Experience the taste of sustainability. Get started today!' />
            </Helmet>
            <div className='container mx-auto mt-20'>
                <div className="mx-auto mb-[60px] max-w-[920px] text-center">
                    <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-jost md:text-[40px]">
                        Organize Your Surplus for Nourish
                    </h2>
                    <p className="text-base px-10 text-body-color mb-5">
                        Easily track your groceries, monitor expiry dates, and
                        receive personalized recommendations to use ingredients before
                        they go to waste.
                        Make the most of your food and join us in the fight against food waste!
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
                                Food name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Food image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Donator Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Donator Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Food Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Pickup Location
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Expire Date
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
                            foodData.map(item => <ManageRow
                                key={item._id}
                                foodRequest={item}
                                handleDelete={handleDelete}
                                // handleRequestConfirm={handleRequestConfirm}
                            ></ManageRow>)
                        }
                    </tbody>
                </table>
            </div>

        </section>
    );
};

export default ManageFoods;