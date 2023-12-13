import useAuth from "./useAuth";



const useLogOut = () => {
    const { logOut } = useAuth();

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    return handleSignOut
};

export default useLogOut;