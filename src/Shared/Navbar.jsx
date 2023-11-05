import { BsTelephone } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
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
        <li><NavLink to='/register'
            className={({ isActive }) =>
                isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
            }
        >Register</NavLink></li>
    </>

    return (
        <div >
            {/* Donate part */}
            <div className="hidden bg-[#11444E] lg:block">
                <div className="navbar container mx-auto">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 text-white font-bold">
                            {/* <IoLocationSharp className="text-lg"></IoLocationSharp> */}
                            {/* <p className="md:text-md">123 Main Street Chicago, IL 60601 USA</p> */}
                            <BsTelephone></BsTelephone>
                            <p >+1 (312) 555-1234</p>
                        </div>
                    </div>
                    <div className="gap-5">
                        <div className="flex-none ml-3">
                            <button className="btn btn-primary bg-[#1FAF4B] text-white btn-md rounded-full">Donate Now</button>
                        </div>

                    </div>
                </div>
            </div>
            <hr />
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
                <div className="justify-end divide-y-4">
                    <Link to='/sign-up' className="btn bg-[#1FAF4B] text-white hover:bg-secondary normal-case">Login</Link>
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
                        <ul className="menu menu-horizontal px-1 text-lg">
                            {menus}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;