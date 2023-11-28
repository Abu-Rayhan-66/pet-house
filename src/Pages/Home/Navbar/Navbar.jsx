import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
  

    const handleSignOut = () =>{
      logOut()
      .then()
      .catch()
  
    }
  
      const links = <>
       <li className="mr-2"><NavLink to="/" className="rounded-md btn bg-blue-500 border-[#eae9dc] text-white hover:bg-blue-300  hover:text-black font-semibold text-lg">Home</NavLink></li>
       <li className="mr-2"><NavLink to="/petListing" className="rounded-md btn bg-blue-500 border-[#eae9dc] text-white hover:bg-blue-300  hover:text-black font-semibold text-lg">Pet Listing</NavLink></li>
       <li className="mr-2"><NavLink to="/donationCampaigns" className="rounded-md btn bg-blue-500 border-[#eae9dc] text-white hover:bg-blue-300  hover:text-black font-semibold text-lg">Donation Campaigns</NavLink></li>
       <li><NavLink to="/register" className="rounded-md btn bg-blue-500 border-[#eae9dc] text-white hover:bg-blue-300  hover:text-black font-semibold text-lg">Register</NavLink></li>
       {/* <p className="text-blue-500"><DarkMode></DarkMode></p> */}
      </>

    return (
        <div>
            <div className="navbar bg-blue-200">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
   <Link to="/"> <img className="h-24  xm:w-20 sm:w-32 md:w-36 border-4 border-blue-400 rounded-md hover:border-blue-600" 
   src="https://i.ibb.co/hWjKQty/Screenshot-4.png" alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
 {links}
    </ul>
  </div>
  <div className="navbar-end">
    
   <div>
     {
       user && 
       <div  className="">
         <img onClick={() =>setIsOpen(!isOpen)} className="w-20 h-16 rounded-sm mr-2"  src={user.photoURL} />
         
       </div>
     }
     {
      isOpen && <div className="absolute z-10 top-32">
        {
          user && <Link to="/dashboard" className="btn bg-blue-500 w-[120px] text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">
          Dashboard
          </Link>
        }
        {
          user ? <button onClick={handleSignOut} className="btn bg-blue-500 w-[120px] text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Sign Out</button>:
          ''
        }

      </div>
     }
     
   

   </div>

          
            <Link to="/login">
            <button className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Login</button>
            </Link>
          


  </div>
</div>
        </div>
    );
};

export default Navbar;