import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";




const AdoptionRequest = () => {

    const axiosPublic = useAxiosPublic()

    const { data: adoption = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/adoptions')
            return res.data
        }
    })

    const handleAccept = (user)=>{
        axiosPublic.patch(`/adoptions/status/${user._id}`)
      .then(res=>{
        console.log(res.data)
        
        if(res.data.modifiedCount > 0){
          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Successfully accepted`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
        
    }

    const handleDelete = pet =>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject it!"
          }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/adoptions/${pet}`)
                console.log(res.data)
                if(res.data.deletedCount > 0){
                  refetch()
                    Swal.fire({
                        title: "Reject",
                        text: `Rejected successfully`,
                        icon: "success"
                      });
                }
            
            }
          });
  
    }

    return (
        <div>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Accept</th>
                        <th>reject</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        adoption.map((item, index) => <tr key={item._id}>
                            <th>{index + 1 }</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.number}</td>
                            <td>{item.address}</td>
                            {/* <td>
                                {
                                    item.role === 'admin' ? "Admin" : <button onClick={()=>handleMakeAdmin(item)} className="btn btn-ghost text-xl bg-sky-300 text-white"><FaUsers/></button>
                                }
                                </td> */}
                                <td>
                                    {item.status}
                                </td>
                                <td>
                                    <button onClick={() => handleAccept(item)} className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold"> Accept</button>
                                </td>
                                <td>
                                   {item.status === 'accepted' ? <button disabled  className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold"> reject</button>  :<button onClick={() => handleDelete(item._id)} className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold"> reject</button>}
                                </td>
                        </tr>)
                    }
                    
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AdoptionRequest;