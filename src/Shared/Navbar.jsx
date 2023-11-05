import { BsTelephone } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
   
    const menus = <>
        <li><NavLink to='/'>Home</NavLink> </li>
        <li><NavLink to='/available-foods '>Available Foods </NavLink> </li>
        <li><NavLink to='/add-food'>Add Food</NavLink> </li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>
    const cart = <>
        <NavLink to=''><p className="text-md">My cart</p></NavLink>
    </>

    return (
        <div >
            
            {/* 2nd part */}
            <div className="navbar container mx-auto">
                <div className="form-control hidden md:block">
                    <div className="input-group">
                        <input type="text" placeholder="Enter your keywords ..." className="input input-bordered" />
                        <button className="btn ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <div className="flex-1 justify-center">
                    <Link><div className="flex items-center">
                        <img src="https://images2.imgbox.com/f4/d4/FkoM7Iok_o.png" className="w-14 h-16" alt="Logo" />
                        <p className=" text-red-950 text-xl lg:text-4xl ">SHARE PLATE</p>
                    </div></Link>
                </div>
                <div className="justify-end divide-y-4">
                    <Link to='/sign-up' className="btn btn-primary text-white hover:bg-[#303030] hover:text-white normal-case">Login</Link>
                </div>
            </div>
            <hr />
            {/* menu part */}
            <div className="bg-[#e6ffef] text-lg">
                <div className="navbar container mx-auto justify-between">
                    <div className="lg:hidden">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                                {menus} {cart}
                            </ul>
                        </div>
                    </div>
                    <div className="hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1 text-lg">
                            {menus}
                        </ul>
                    </div>
                    <div className="gap-3 items-center" >
                        <div className="flex gap-3 items-center font-semibold ">
                            <BsTelephone></BsTelephone>
                            <p >+1 (312) 555-1234</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;