
import { AuthContext } from "../../../Provider/AuthProvider";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useContext } from "react";


const MyDonationCampaigns = () => {

    const {user} = useContext(AuthContext)
    const currentUser = user.email

    const [data,setData] = useState([])
    const [userData,setUserData] = useState([])
    

    useEffect(()=>{
        fetch('http://localhost:5002/campaigns')
        .then(res => res.json())
        .then(data => {
            setData(data)
           
           
        })
        // const filterData = data.filter(brand => brand.brand == brand_name)
        // setFilter(filterData)
    },[])

    useEffect(()=>{
        const filterDataNew = data.filter(item => item.email === currentUser)
        setUserData(filterDataNew)
    },[data, currentUser])
    
   console.log(userData)
    console.log(data)

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
        userData.map((item, index )=><tr key={item._id}>
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
          <td>{item.maximum}$</td>
          <td>
          <progress className="progress progress-info w-56" value={item.amount} max="1000"></progress>
          </td>
          <td><Link to="/update"><button className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Edit</button></Link></td>
          <td><Link to="/update"><button className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Pause</button></Link></td>
          <td><Link to="/update"><button className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Donators</button></Link></td>
          
        </tr>)
      }
      
    </tbody>
    
  </table>
</div>
    );
};

export default MyDonationCampaigns;