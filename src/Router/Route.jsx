import {
    createBrowserRouter

} from "react-router-dom";
import Error from "../Components/Error/Error";
import Home from "../Pages/Home/Home";
import Root from "../LayOut/Root";
import AddFood from "../Pages/Food/AddFood";


const Route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/add-food',
                element:<AddFood></AddFood>
            }
        ]

    },
]);

export default Route;