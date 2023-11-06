import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import FoodCard from "./FoodCard";

const AvailableFood = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('./../../../public/FoodData.json')
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
                <div className="grid md:grid-cols-3 mx-5 gap-4">
                    {
                        foods.map(item => <FoodCard
                            key={item.id}
                            food={item}
                        />)
                    }
                </div>
            </div>
        
        </>
    );
};

export default AvailableFood;