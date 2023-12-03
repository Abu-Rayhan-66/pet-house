import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from '@tanstack/react-query';
import { FaUsers } from 'react-icons/fa';


const AllUsers = () => {

    const axiosSecure = useAxiosSecure()
    const { data: user = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    console.log(user)
    const handleMakeAdmin = (user)=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res=>{
        console.log(res.data)
        
        if(res.data.modifiedCount > 0){
          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} you an admin now!`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
        
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
                            <th>Make Admin</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            user.map((item, index) => <tr key={item._id}>
                                <th>{index + 1 }</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    {
                                        item.role === 'admin' ? "Admin" : <button onClick={()=>handleMakeAdmin(item)} className="btn btn-ghost text-xl bg-sky-300 text-white"><FaUsers/></button>
                                    }
                                    </td>
                            </tr>)
                        }
                        
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;