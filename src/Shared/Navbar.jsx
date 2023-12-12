import { Link, NavLink } from "react-router-dom";
import { Banner} from 'flowbite-react';
import { HiX } from 'react-icons/hi';
import { BsTelephone } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/Hooks/AuthProvider/AuthProvider";
const Navbar = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme("light");
        }
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme])

    const themeToggler = <>
        <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleToggle} />

            {/* sun icon */}
            <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

            {/* moon icon */}
            <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

        </label>
    </>

    const { user, logOut } = useContext(AuthContext);
    const userName= user?.displayName
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }


    const menus = <>
        <li><NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? 'btn btn-primary btn-sm' : 'btn btn-sm'
            }
        >Home
        </NavLink> </li>
        <li><NavLink to='/available-foods'
            className={({ isActive }) =>
                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
            }
        >Available Foods </NavLink> </li>
        <li><NavLink to='/add-food'
            className={({ isActive }) =>
                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
            }
        >Add Food</NavLink> </li>
        <li><NavLink to='/manage-foods'
            className={({ isActive }) =>
                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
            }
        >Manage My Foods </NavLink> </li>
        <li><NavLink to='/request-foods '
            className={({ isActive }) =>
                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
            }
        >My Food Request </NavLink> </li>
        <li><NavLink to='/register'
            className={({ isActive }) =>
                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
            }
        >Register</NavLink></li>
    </>
    
    return (
        <div>
            {/* Donate part */}
            <section className="container mx-auto">
                <Banner>
                    <div className="flex w-[calc(100%-2rem)] flex-col justify-between rounded-lg border m-5 lg:mx-5 xl:mx-32 border-gray-100 bg-[#1FAF4B] text-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row lg:max-w-7xl">
                        <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
                            <p className="flex items-center mb-2 border-gray-200 md:pr-4 md:mr-4 md:border-r md:mb-0 dark:border-gray-600">
                                <BsTelephone></BsTelephone>
                                <p >+1 (312) 555-1234</p>
                            </p>
                            <p className="flex items-center text-sm font-normal dark:text-gray-400">
                                Your generosity can make a world of difference in the lives of those struggling with hunger. 
                            </p>
                        </div>
                        <div className="flex flex-shrink-0 items-center">
                            <button className="btn btn-secondary btn-sm normal-case mr-10">Donation Now</button>
                            <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
                                <HiX className="h-4 w-4" />
                            </Banner.CollapseButton>
                        </div>
                    </div>
                </Banner>
            </section>
            {/* logo part */}
            <div className="navbar container mx-auto">
                {/* Desktop search button */}
                <div className="form-control hidden lg:block">
                    <div className="input-group">
                        <input type="text" placeholder="Enter your keywords ..." className="input input-bordered" />
                        <button className="btn ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
                <div className="md:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            {menus}
                        </ul>
                    </div>
                </div>
                {/* logo & Login */}
                <div className="flex-1 justify-center">
                    <Link to='/'><div className="flex items-center">
                        <img src="https://images2.imgbox.com/de/03/xdiHcwLt_o.png" className="w-20 h-16" alt="Logo" />
                        <p className="text-xl font-jost ml-2 lg:text-4xl">SHARE PLATE</p>
                    </div></Link>
                </div>
                <div className="justify-end gap-5">
                    <div>
                        {user ? (
                            <>
                                <div className="flex flex-col text-center">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img width={50} height={50} src={user.photoURL} alt={user.displayName} />
                                        </div>
                                    </label>
                                    <p className="text-gray-700 font-semibold">{userName}</p>
                                </div>
                                <button onClick={handleSignOut} className="btn ml-5 
                            bg-[#1FAF4B] text-white hover:bg-secondary normal-case">Sign Out</button>
                            </>
                        ) : (
                            <Link to='/sign-up' className="btn bg-[#1FAF4B]
                             text-white hover:bg-secondary normal-case">Login</Link>
                        )}
                   </div>
                    <div>
                        {themeToggler}
                  </div>
                </div>
               
            </div>
            <hr />
            {/* menu part */}
            <div className=" text-lg">
                <div className="navbar container mx-auto justify-center">
                    {/* Tablet part */}
                    <div className="hidden lg:hidden gap-96 md:flex">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                                {menus}
                            </ul>
                        </div>
                        {/* Tablet search button */}
                        <div className="form-control hidden md:block">
                            <div className="input-group">
                                <input type="text" placeholder="Enter your keywords ..." className="input input-bordered" />
                                <button className="btn ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Desktop */}
                    <div className="hidden lg:flex ">
                        <ul className="menu menu-horizontal px-2 gap-x-2 text-lg">
                            {menus}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;