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
import ManageFoods from "../../../Pages/ManageMyFoods/ManageFoods";
import FoodRequest from "../../../Pages/MyFoodRequest/FoodRequest";

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
                path: 'manage-foods',
                element: <PrivateRoutes>
                    <ManageFoods></ManageFoods>
                </PrivateRoutes>
            },
            {
                path: 'request-foods',
                element: <PrivateRoutes>
                    <FoodRequest></FoodRequest>
                </PrivateRoutes>
            },
            {
                path: 'add-food',
                element: <PrivateRoutes>
                    <AddFood></AddFood>
                </PrivateRoutes>
            },
            {
                path: 'foods/:id', 
                element: <PrivateRoutes>
                    <FoodDetails></FoodDetails>
                </PrivateRoutes>,
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