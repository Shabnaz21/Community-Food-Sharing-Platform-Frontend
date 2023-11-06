import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Components/Hooks/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();

        // // Create User
        createUser(email, password,
            name, photo)
            .then(result => {
                console.log(result);
       // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                }).then()
                    .catch((error) => {
                        console.log(error.message);
                    });
                toast.success('Congratulations!');
            })
            .catch(error => {
                if (error.code === 'Error (auth/email-already-in-use') {
                    toast.error('Already, You\'r exist!');
                    return ('error.message');
                }

            })

            .catch(error => {
                console.log(error.message);

            })


        // // Password condition
        if (password.length < 6) {
            setError('Password should be at least 6 characters');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setError('Must be at least one character need capital letter');
            return;
        } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            setError('Password cannot contain special characters');
            return;
        } else {
            setError('Maybe you are exist');
        }
        setError('');
        setSuccess('');
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Share Plate | Register </title>
                <meta name='description' content='Join our community food sharing platform, reduce waste, 
        and end hunger. Experience the taste of sustainability. Get started today!' />
            </Helmet>

            <div className="relative flex flex-col justify-center h-screen overflow-hidden mx-7 mb-10">
                <div className="w-full p-6 m-auto bg-[#f5fff8] rounded-md shadow-md ring-2
                 ring-gray-800/50 lg:max-w-xl">
                    <p className=" font-jost text-center 
                    text-xl lg:text-4xl -ml-4">Create a Account</p>
                    <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Give Your Name" className="w-full input input-bordered" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Email Address" className="w-full input input-bordered" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter Photo URL" className="w-full input input-bordered" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="w-full input input-bordered" required />
                        </div>
                        <div>
                            <button className="btn btn-block bg-primary text-white hover:bg-secondary
                             hover:text-white">Sign Up</button>

                        </div>
                        <span>Already have an account?
                            <Link to='/sign-up' className="text-blue-600 ml-3 hover:text-blue-800 hover:underline">Login</Link></span>
                    </form>
                    {error && <p className="text-red-700">{error}</p>}
                    {success && <p className="text-green-700">{success}</p>}
                </div>
            </div>
            < ToastContainer />
        </>
    );
};

export default Register;