
// import { AuthContext } from "../../../Provider/AuthProvider";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
// import { useState } from 'react';
// import { useContext } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";



const MyDonationCampaigns = () => {

  const {user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure()
    const { data: campaigns = [] } = useQuery({
        queryKey: ['campaigns',user?.email ],
        queryFn: async () => {
            const res = await axiosSecure.get(`/campaigns?email=${user?.email}`)
            return res.data
        }
    })

    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Serial</th>
        <th>Image</th>
        <th>Pet Name</th>
        <th>Maximum Amount</th>
        <th>Donation Progress</th>
        <th>Edit</th>
        <th>Pause</th>
        <th>Donators</th>
        
      </tr>
    </thead>
    <tbody>
      {
        campaigns.map((item, index )=><tr key={item._id}>
          <th>
            {index + 1}
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={item.photo} />
                </div>
              </div>
              
            </div>
          </td>
          <td>
            {item.name}
          </td>
          <td>{item.amount}$</td>
          <td>
          <progress className="progress progress-info w-56" value={item.amount} max="1000"></progress>
          </td>
          <td><Link to={`/dashboard/campaignUpdate/${item._id}`}><button className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Edit</button></Link></td>
          <td><Link ><button className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">{item.pause === false ? 'Pause':'Unpause'}</button></Link></td>
          <td><Link ><button className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Donators</button></Link></td>
          
        </tr>)
      }
      
    </tbody>
    
  </table>
</div>
    );
};

export default MyDonationCampaigns;