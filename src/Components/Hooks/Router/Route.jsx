import {
    createBrowserRouter

} from "react-router-dom";
import Error from "../../Error/Error";
import Home from "../../../Pages/Home/Home";
import Root from "../../../LayOut/Root";
import AddFood from "../../../Pages/Food/AddFood";
import Register from "../../../Pages/User/Register";
import Login from "../../../Pages/User/Login";
import AvailableFood from "../../../Pages/Food/AvailableFood";
import FoodDetails from "../../../Pages/FoodDetails/FoodDetails";
import PrivateRoutes from "./PrivateRoutes";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error />,
        children: [
            {
                index:true,
                element: <Home />
            },
            {
                path: 'available-foods',
                element:<AvailableFood></AvailableFood>
            },

            {
                path: 'add-food',
                element: <AddFood></AddFood>
            },
            {
                path: 'foods/:id', 
                element: <PrivateRoutes><FoodDetails></FoodDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
            }
        ],
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/sign-up',
        element:<Login></Login>
    }
]);

export default Route;