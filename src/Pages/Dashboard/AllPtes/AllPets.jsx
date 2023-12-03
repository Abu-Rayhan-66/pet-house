import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const AllPets = () => {

    
  const axiosSecure = useAxiosSecure()
    const { data: allPets = [] } = useQuery({
        queryKey: ['campaigns' ],
        queryFn: async () => {
            const res = await axiosSecure.get('/pets')
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
        <th> Pet Category</th>
        <th>Adoption Status</th>
        <th>Delete</th>
        <th>Update</th>
        <th>Change Status</th>
        
      </tr>
    </thead>
    <tbody>
      {
        allPets.map((item, index )=><tr key={item._id}>
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
          <td>{item.category}</td>
          <td>
          {item.adopted === false ? 'Not adopted' : 'Adopted'}
          </td>
          <td><Link to={`/dashboard/campaignUpdate/${item._id}`}><button className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Delete</button></Link></td>
          <td><Link ><button className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Update</button></Link></td>
          <td><Link ><button className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Change Status</button></Link></td>
          
        </tr>)
      }
      
    </tbody>
    
  </table>
</div>
    );
};

export default AllPets;