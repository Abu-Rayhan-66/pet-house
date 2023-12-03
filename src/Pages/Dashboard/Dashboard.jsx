import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import useAdmin from "../../hooks/useAdmin";

// import { AuthContext } from "../../Provider/AuthProvider";
// import { useContext } from "react";


const Dashboard = () => {
     const [isAdmin] = useAdmin()
    // const {user} = useContext(AuthContext)
    

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex mx-4 md:mx-20">
            <div className="w-32 md:w-64 min-h-[80vh] mt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <ul className="menu">
              {
               isAdmin ? <>
               <div className="divider divider-primary text-white font-semibold text-base">Admin Panel</div>
               <li ><NavLink to="/dashboard/allUsers" className="bg-purple-600 py-2 text-white text-xs md:text-base md:font-semibold mb-2">All Users</NavLink></li>
               <li ><NavLink to="/dashboard/allPets" className="bg-purple-600 py-2 text-white text-xs md:text-base md:font-semibold mb-2">All Pets</NavLink></li>
               <li ><NavLink to="/dashboard/allDonations" className="bg-purple-600 py-2 text-white text-xs md:text-base md:font-semibold mb-2">All Donations</NavLink></li>
                
               <div className="divider divider-primary text-white font-semibold text-base">User Panel</div>
               <li ><NavLink to="/dashboard/addPet" className="bg-purple-600 py-2 text-white text-xs md:text-base md:font-semibold mb-2">Add a pet</NavLink></li>
              <li ><NavLink to="/dashboard/myAddedPets" className="bg-purple-600 text-white text-xs md:text-base md:font-semibold mb-2">My added pets</NavLink></li>
              <li ><NavLink to="/dashboard/adoptionRequest" className="bg-purple-600 text-white text-xs md:text-base md:font-semibold mb-2">Adoption Request</NavLink></li>
              <li ><NavLink to="/dashboard/createDonationCampaign" className="bg-purple-600 text-white text-xs md:text-base md:font-semibold mb-2">Create Donation Campaign</NavLink></li>
              <li ><NavLink to="/dashboard/myDonationCampaigns" className="bg-purple-600 text-white text-xs md:text-base md:font-semibold mb-2">My Donation Campaigns</NavLink></li>
              <li ><NavLink to="/dashboard/myDonations" className="bg-purple-600 text-white text-xs md:text-base md:font-semibold mb-2">My Donations</NavLink></li>
               </> :  <>
              <li ><NavLink to="/dashboard/addPet" className="bg-purple-600 py-2 text-white text-xs md:text-base md:font-semibold mb-2">Add a pet</NavLink></li>
              <li ><NavLink to="/dashboard/myAddedPets" className="bg-purple-600 text-white text-xs md:text-base md:font-semibold mb-2">My added pets</NavLink></li>
              <li ><NavLink to="/dashboard/adoptionRequest" className="bg-purple-600 text-white text-xs md:text-base md:font-semibold mb-2">Adoption Request</NavLink></li>
              <li ><NavLink to="/dashboard/createDonationCampaign" className="bg-purple-600 text-white text-xs md:text-base md:font-semibold mb-2">Create Donation Campaign</NavLink></li>
              <li ><NavLink to="/dashboard/myDonationCampaigns" className="bg-purple-600 text-white text-xs md:text-base md:font-semibold mb-2">My Donation Campaigns</NavLink></li>
              <li ><NavLink to="/dashboard/myDonations" className="bg-purple-600 text-white text-xs md:text-base md:font-semibold mb-2">My Donations</NavLink></li>

                </>
              }
              </ul>
            </div>
            <div className="flex-1 ">
               <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;