import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import useAuth from "../useAuth";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();
    // loading
    if (loading) {
        return <span className="loading loading-dots text-center loading-lg"></span>
    }
    // user
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/sign-up'></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.object
}
export default PrivateRoutes;