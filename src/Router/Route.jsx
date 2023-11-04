import {
    createBrowserRouter

} from "react-router-dom";
import Error from "../Components/Error/Error";
import Home from "../Pages/Home/Home";
import Root from "../LayOut/Root";


const Route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]

    },
]);

export default Route;