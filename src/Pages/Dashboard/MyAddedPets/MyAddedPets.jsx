// import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { useState } from 'react';
// import { useContext } from "react";
// import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useDeleteMyPet from "../../../hooks/useDeleteMyPet";
// import useMyPet from "../../../hooks/useMyPet";


const MyAddedPets = () => {

  const [myPet, refetch] = useDeleteMyPet()
  console.log(myPet)
  // const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    
    // const [menu, , refetch] = useMyPet()
    
    // const [data,setData] = useState([])
    
  
    

    // useEffect(()=>{
    //     fetch(`https://y-five-ruddy.vercel.app/pets?email=${user?.email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
           

    //     })
    // },[user?.email])

    const handleDelete = pet =>{

      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
          if (result.isConfirmed) {
              const res = await axiosPublic.delete(`/pets/${pet}`)
              console.log(res.data)
              if(res.data.deletedCount > 0){
                refetch()
                  Swal.fire({
                      title: "Reject!",
                      text: `Pet has been deleted successfully`,
                      icon: "success"
                    });
              }
          
          }
        });

  }

  const handleAdopt = (user)=>{
    axiosPublic.patch(`/pets/status/${user._id}`)
  .then(res=>{
    console.log(res.data)
    
    if(res.data.modifiedCount > 0){
      refetch()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${user.name} is adopted now!`,
        showConfirmButton: false,
        timer: 1500
      });
    }
  })
    
}
    
    

    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Serial</th>
        <th>Image</th>
        <th>Pet Name</th>
        <th>Pet Category</th>
        <th>Adoption Status</th>
        <th>Update</th>
        <th>Delete</th>
        <th>Adopt</th>
        
      </tr>
    </thead>
    <tbody>
      {
        myPet.map((pet, index )=><tr key={pet._id}>
          <th>
            {index + 1}
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={pet.photo} />
                </div>
              </div>
              
            </div>
          </td>
          <td>
            {pet.name}
          </td>
          <td>{pet.category}</td>
          <td>
            <button className="btn btn-ghost btn-xs">{pet.adopted === false ? 'Not adopted' : 'Adopted'}</button>
          </td>
          <td><Link to={`/dashboard/petUpdate/${pet._id}`}><button className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Update</button></Link></td>
          <td><Link ><button onClick={() => handleDelete(pet._id)} className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Delete</button></Link></td>
          <td><Link >{pet.adopted === false ? <button onClick={() => handleAdopt(pet)} className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Adopt</button>:
          <button disabled className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Adopt</button>
          }</Link></td>
          
        </tr>)
      }
      
    </tbody>
    
  </table>
</div>
    );
};

export default MyAddedPets;