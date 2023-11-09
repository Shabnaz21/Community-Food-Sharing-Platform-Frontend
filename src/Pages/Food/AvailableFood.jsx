import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import FoodCard from "./FoodCard";
import useAxios from "../../Components/Hooks/useAxios/useAxios";
import useAuth from "../../Components/Hooks/useAuth";

import { BsSearch} from "react-icons/bs";
// import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const AvailableFood = () => {
    const { loading } = useAuth();
    const [foods, setFoods] = useState([]);
    const [expiredTime, setExpiredTime] = useState('asc');
    const [foodName, setFoodName] = useState('');
    // const [page, setPage] = useState(1);

    // const limit = 9;

    const axios = useAxios();

    useEffect(() => {
        // axios.get(`/foods?sortField=expiredTime&sortOrder=${expiredTime}&foodName=${foodName}
        // &page=${page}&limit=${limit}`)
        axios.get(`/foods?sortField=expiredTime&sortOrder=${expiredTime}&foodName=${foodName}`)
            .then(data => {
                setFoods(data?.data);
            });
    }, [expiredTime, foodName]);

    // loading
    if (loading) {
        return (<div className="flex place-content-center">
            <span className="loading loading-dots  loading-lg"></span>
        </div>)
    }
    // const handlePervious = () => {
    //     if (page > 1) {
    //         setPage(page - 1);
    //     }
        
    // }

    // const handleNext = () => {
    //     setPage(page + 1);
    // }
        
    // const totalPage = Math.ceil((foods?.total)/limit);
    // console.log(totalPage);
    
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Share Plate | Available Food </title>
                <meta name='description' content='Join our community food sharing platform, reduce waste, 
        and end hunger. Experience the taste of sustainability. Get started today!' />
            </Helmet>
            <div className='container mx-auto mt-20'>
                <div className="mx-auto mb-[60px] max-w-[920px] text-center">
                    <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-jost md:text-[40px]">
                        Find, Share, and Make a Difference
                    </h2>
                    <p className="text-base px-3 text-body-color mb-5">
                        From fresh produce to homemade meals, our platform connects
                        those with extra food to those who can benefit from it.
                        Together, we can reduce food waste and nourish our neighbors in need.
                        Check out the available food listings and make a positive impact in your community!
                    </p>
                </div>
                <div className="mb-10 flex gap-5 justify-end mr-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Food Name</span>
                        </label>
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered"
                                onChange={(e) => setFoodName(e.target.value)}
                            />
                           
                            <button
                                className="btn btn-square btn-primary">
                                <BsSearch className="text-xl text-white"></BsSearch>
                            </button>
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Expired Time</span>
                        </label>
                        <select
                            className="input input-bordered bg-primary p-3 text-white"
                            onChange={(e) => setExpiredTime(e.target.value)}
                        >
                            <option disabled selected>
                                Choose one
                            </option>
                            <option value="asc">From low to high</option>
                            <option value="desc">From high to low</option>
                        </select>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 mx-5 gap-4">
                    {
                        foods?.result?.map(item => <FoodCard
                            key={item._id}
                            food={item}
                        />)
                        
                    }
                </div>
            </div>
            {/* <div className="flex overflow-x-auto place-content-end mr-72 mb-20">
                {loading ? (<p>Loading...</p>) : (<div className="join">
                    <button onClick={handlePervious}
                        className="join-item btn ">
                        <BiSolidLeftArrow ></BiSolidLeftArrow>
                    </button>
                    {
                        Array(totalPage).fill(0)
                            .map((item, index) => {
                                const pageNumber = index + 1;
                                return <button key={pageNumber}
                                    onClick={() => setPage(pageNumber)}
                                    className={`${pageNumber === page ? 'join-item btn btn-primary' :
                                        'join-item btn btn-ghost'}`

                                    }>

                                    {pageNumber}</button>
                            })}
                    <button onClick={handleNext}
                        className="join-item btn ">
                        <BiSolidRightArrow ></BiSolidRightArrow>
                    </button>
                </div>)}
            </div> */}
        </>
    );
};

export default AvailableFood;