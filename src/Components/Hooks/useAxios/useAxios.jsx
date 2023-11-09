import axios from "axios";
// import useAuth from "../useAuth";
// import { useContext, useEffect } from "react";


const instance = axios.create({
    baseURL: 'https://share-plate-server.vercel.app',
    withCredentials: true,
});

const useAxios = () => {

    return instance;
    // const { logOut } = useAuth();

    // instance.interceptors.response.use(function (response) {
    //     return response;

    // }, function (error) {
    //     if (error.response.status === 401 || error.response.status === 403) {
    //         return error
    //     }
    //     console.log('Form Axios', error);
    // });



};

export default useAxios;