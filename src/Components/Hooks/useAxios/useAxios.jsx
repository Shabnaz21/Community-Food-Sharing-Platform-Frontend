import axios from "axios";
// import useAuth from "../useAuth";
// import { useContext, useEffect } from "react";


const instance = axios.create({
    baseURL: 'http://localhost:5000', 
    withCredentials:true,
});

const useAxios = () => {
    // const { logOut } = useAuth();
   
    instance.interceptors.response.use(function (response){
        return response;
        
    }, function (error) {
        if (error.response.status === 401 || error.response.status === 403) {
            return error
        }
        console.log('Form Axios', error);
    });

    return instance;
   
};

export default useAxios;