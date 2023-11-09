import { useEffect, useState } from "react";
import FoodCard from "../Food/FoodCard";
import { Link } from "react-router-dom";

const FeaturedFood = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data =>
                setFoods(data?.result)
            )
    }, [])
    const sortedFoods = [...foods].sort((a, b) => b.foodQuantity - a.foodQuantity);


    // Slice the sorted array to show only the first 6 items
    const displayedFoods = sortedFoods.slice(0, 6);
    return (
        <section className="mt-20 mb-10">
            <div className="mx-auto mb-[60px] max-w-[920px] text-center">
                <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-jost md:text-[40px]">
                    Delicious Surplus: Featured Foods
                </h2>
                <p className="text-base px-3 text-body-color mb-5">
                    Explore a delectable selection of surplus food items generously shared by our community.
                    From fresh produce to homemade goodies, these featured foods
                    not only tantalize your taste buds but also help
                    reduce food waste and support those in need.
                    Join us in savoring the flavors of sustainability and solidarity.

                </p>
            </div>
            <div className='container mx-auto mt-20'>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 mx-5 gap-4">
                    {
                        displayedFoods.map(item => <FoodCard
                            key={item._id}
                            food={item}
                        />)
                    }
                </div>
            </div>
            <Link to='/available-foods'><div
                className="btn w-96  mx-auto px-4 py-2 cursor-pointer flex place-content-center
                                 bg-[#1FAF4B]
                                 mt-8 mb-8 rounded-lg text-white
                                  hover:bg-green-800 hover:text-gray-100
                                   ">
                Show All
            </div></Link>
        </section>
    );
};

export default FeaturedFood;