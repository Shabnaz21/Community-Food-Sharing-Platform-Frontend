import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { BiStoreAlt } from "react-icons/bi";
import { AiOutlineProfile } from "react-icons/ai";
import useLogOut from "../../Components/Hooks/useLogOut";

const SideNavbar = () => {
    const logOut = useLogOut();

    return (
        <>
            <div className="relative lg:block navbar-menu">
                <nav
                    className="fixed top-0 transition-all lg:mt-0 
                    left-0  bottom-0 flex flex-col w-[280px] bg-gray-800 overflow-hidden z-50"
                    id="sidenav">
                    <div className="flex items-center w-full px-4 pt-4 pb-4 border-b border-gray-600
                     ">
                        <Link to='/'><div className="flex items-center">
                            <img src="https://images2.imgbox.com/de/03/xdiHcwLt_o.png" className="w-20 h-16" alt="Logo" />
                            <p className="text-xl font-jost ml-2 text-white lg:text-2xl">SHARE PLATE</p>
                        </div></Link>
                    </div>
                    <div className="pb-6 mt-4 overflow-x-hidden overflow-y-auto">
                        <ul className="mb-8 text-sm">
                            <li className="text-gray-300 text-xl m-2">
                                <NavLink to='/dashboard/user-profile'
                                    className={({ isActive }) =>
                                        isActive ? 'flex items-center px-6 text-[#5fd2e9] md:text-lg' : 'flex px-6 items-center md:text-lg'
                                    }
                                >
                                    <li className="mb-2 flex items-center gap-3">
                                        <ImProfile ></ImProfile>My Profile
                                    </li></NavLink>
                                <NavLink to='/dashboard/request-foods'
                                    className={({ isActive }) =>
                                        isActive ? 'flex items-center px-6 text-[#5fd2e9] md:text-lg' : 'flex px-6 items-center md:text-lg'
                                    }
                                >
                                    <li className="mb-2 flex items-center gap-3">
                                        <AiOutlineProfile />
                                        My Request Foods
                                    </li>
                                </NavLink>
                              
                            </li>


                            {/* shared nav */}
                            <hr className='mx-5' />
                            <li className='space-y-3 mt-5'>
                                <NavLink to='/'
                                    className="flex items-center px-6 text-gray-300
                                     group hover:text-white ">
                                    <span className="inline-block mr-3">
                                        <FaHome className='text-xl' />
                                    </span>
                                    <span className='text-lg'>Home</span>
                                </NavLink>
                                <NavLink to='/available-foods'
                                    className="flex items-center px-6 text-gray-300
                                     group hover:text-white ">
                                    <span className="inline-block mr-3">
                                        <BiStoreAlt className='text-xl' />
                                    </span>
                                    <span className='text-lg'>Available Foods</span>
                                </NavLink>
                               
                                <div onClick={logOut}
                                    className="flex items-center px-6 text-gray-300
                                     group hover:text-white ">
                                    <span className="inline-block mr-3">
                                        <RiLogoutBoxLine className='text-xl' />
                                    </span>
                                    <span className='text-lg'>Sign Out</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default SideNavbar;