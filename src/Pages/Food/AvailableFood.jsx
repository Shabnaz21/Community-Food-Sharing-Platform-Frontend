import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import FoodCard from "./FoodCard";

const AvailableFood = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data =>
                setFoods(data)
            )
    },[])
    
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
                <div className="grid md:grid-cols-3 mx-5 gap-4">
                    {
                        foods.map(item => <FoodCard
                            key={item._id}
                            food={item}
                        />)
                    }
                </div>
            </div>
        
        </>
    );
};

export default AvailableFood;