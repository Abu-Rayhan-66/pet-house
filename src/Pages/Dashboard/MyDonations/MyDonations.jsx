import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";


const MyDonations = () => {

    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
      const { data: myDonation = [] } = useQuery({
          queryKey: ['myDonation',user?.email ],
          queryFn: async () => {
              const res = await axiosSecure.get(`/donations?email=${user?.email}`)
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
        <th>Donated amount</th>
        <th>Refund</th>
        
        
      </tr>
    </thead>
    <tbody>
      {
        myDonation.map((item, index )=><tr key={item._id}>
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
          <td>{item.amount}</td>
          <td>
          <td><Link ><button className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Change Status</button></Link></td>
          </td>
         
          
          
        </tr>)
      }
      
    </tbody>
    
  </table>
</div>
    );
};

export default MyDonations;