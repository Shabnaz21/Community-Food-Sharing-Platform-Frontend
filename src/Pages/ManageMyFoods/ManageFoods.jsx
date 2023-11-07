import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import FoodData from './../../../public/FoodData.json'
import { useState } from 'react';
import { Helmet } from 'react-helmet';

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
    console.log(FoodData);

const [data, setData]=useState(FoodData)
    const table = useReactTable({
        data, columns,
        getCoreRowModel: getCoreRowModel()
    });
    console.log(table.getHeaderGroups);
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
                                        <label  className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Accesories
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Available
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Weight
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=" bg-white border-b
                          hover:bg-gray-50
                        ">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100
                                     border-gray-300 rounded" />
                                        <label  className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                Yes
                            </td>
                            <td className="px-6 py-4">
                                Yes
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4">
                                3.0 lb.
                            </td>
                            <td className="flex items-center px-6 py-4 space-x-3">
                                <btn className="font-medium btn btn-sm text-blue-600 hover:underline">Edit</btn>
                                <btn className="btn btn-sm text-[#28B04B] font-semibold hover:underline">Manage</btn>
                            </td>
                        </tr>
                        <tr className="bg-white border-b
                          hover:bg-gray-50">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 
                                    bg-gray-100 border-gray-300 rounded"/>
                                        <label className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                AirTag
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Accessories
                            </td>
                            <td className="px-6 py-4">
                                Yes
                            </td>
                            <td className="px-6 py-4">
                                No
                            </td>
                            <td className="px-6 py-4">
                                $29
                            </td>
                            <td className="px-6 py-4">
                                53 g
                            </td>
                            <td className="flex items-center px-6 py-4 space-x-3">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </section>
    );
};

export default ManageFoods;