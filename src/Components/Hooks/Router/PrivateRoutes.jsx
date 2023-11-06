import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
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