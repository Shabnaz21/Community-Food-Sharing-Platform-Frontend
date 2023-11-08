import { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Components/Hooks/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import useAxios from "../../Components/Hooks/useAxios/useAxios";



const Login = () => {
    const emailRef = useRef(null);
    const axios = useAxios();
    const { signIn, handleGoogleSignIn, handleGithubSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();

        // signIn User
        signIn(email, password)
            .then(result => {
                toast.success('Congratulations, you are successfully logged in!');
                const LoggedInUser = result.user;
                console.log(LoggedInUser);
                const user = {
                    email

                }
                axios.post('/jwt', user)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            // navigate
                            navigate(location?.state ? location?.state : '/')
                        }
                    })

            })
            .catch(error => {
                if (error.code === 'auth/invalid-login-credentials') {
                    toast.error('Invalid login');
                    return ('error.message');
                } else if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
                    toast.error("Invalid email or password. Please try again.");
                }
                else {
                    toast.warn('An error occurred. Please try again later.');
                    return;
                }
            });
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Share Plate | Log In </title>
                <meta name='description' content='Join our community food sharing platform, reduce waste, 
        and end hunger. Experience the taste of sustainability. Get started today!' />
            </Helmet>
            <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden mx-7">
                <div className="w-full p-6 bg-[#f5fff8] border-t-4 border-[#11444E] 
                rounded-md shadow-md border-top lg:max-w-lg">
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Email</span>
                            </label>
                            <input type="text" ref={emailRef}
                                name="email" placeholder="Email Address" className="w-full input input-bordered" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter Password"
                                className="w-full input input-bordered" />
                        </div>
                        {/* <p className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</p> */}
                        <div>
                            <button className="btn btn-block 
                            bg-primary text-white hover:bg-secondary
                             hover:text-white">Login</button>
                        </div>
                    </form>
                    <span>{`Haven't an account?`}
                        <Link to='/register' className="text-blue-600 ml-2 hover:text-blue-800 hover:underline">Register</Link></span>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full" />
                        <p className="px-3 ">OR</p>
                        <hr className="w-full" />
                    </div>
                    <div className="my-6 space-y-2">
                        <button onClick={handleGoogleSignIn}
                            aria-label="Login with Google" type="button"
                            className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path
                                    d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z">
                                </path>
                            </svg>
                            <p>Login with Google</p>
                        </button>
                        <button onClick={handleGithubSignIn}
                            aria-label="Login with GitHub" role="button"
                            className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path
                                    d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z">
                                </path>
                            </svg>
                            <p>Login with GitHub</p>
                        </button>
                    </div>
                </div>
            </div>
            < ToastContainer />
        </>
    );
};

export default Login;