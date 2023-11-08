import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";
import { useContext, useEffect } from "react";


const instance = axios.create({
    baseURL: 'http://localhost:5000', 
    withCredentials:true,
});

const useAxios = () => {
    return instance;

    // const {logOut}=useAuth()
    // console.log(logOut);
    // const navigate = useNavigate();

// useEffect(()=>{
//     instance.interceptors.response.use(response => {
//         console.log(response);
//         return response;
//     }, error => {
//         console.log('Error tracked by interceptor', error.response);
//         if (error.response.status === 401 || error.response.status === 403) {
//             console.log('logout the user');
//             logOut()
//                 .then(() => {
//                     navigate('/register')
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })
//         }
//     })
// }, [])
//     return instance;
   
};

export default useAxios;