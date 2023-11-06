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