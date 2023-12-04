import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const PetDetails = () => {
    const {user} = useContext(AuthContext)
    const data = useLoaderData()
    const axiosPublic = useAxiosPublic()
    const {name, photo, age, category, location, description, longDescription} = data || {}
    console.log(data)

    const {
        register,
        handleSubmit,
        // formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        console.log(data)
        const email = data.email
        const name = data.name
        const number = data.number
        const address = data.address

        const adoptInfo = {
            email:email,
            name:name,
            number:number,
            address:address,
            status:'pending'
        }

        axiosPublic.post('/adoptions', adoptInfo)
            .then(res => {
                console.log(res.user)
                if (res.data.insertedId) {
                    Swal.fire("adoption request sent Successfully");
                }

            })

      }

    

    return (
        <div className="mx-10 mb-10">
            <h2 className="text-2xl text-center mt-10 mb-10">Meet {name}</h2>
            <div className="md:flex  gap-16">
                <div className=" md:w-1/2">
                  <img className="h-[500px] w-full rounded-md" src={photo} alt="" />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-2xl">Name: {name}</h2>
                  <h2 className="text-2xl mt-4">Age: {age}Yr</h2>
                  <p className="mt-5 mb-5">Category: {category}</p>
                  <p className="mt-5 mb-5">Location: {location}</p>
                  <p className="mt-5 mb-5">Description: {description}</p>
                  <p className="mt-5 mb-5">Full description: {longDescription}</p>
                  {/* <button className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Contact Us</button> */}
                    
            <button className="rounded-md btn bg-blue-500 border-[#eae9dc] text-white hover:text-black hover:bg-blue-300 font-semibold text-lg" 
            onClick={() => document.getElementById('my_modal_5').showModal()}>Adopt</button>
        

        <dialog id="my_modal_5" className="modal z-[0] modal-bottom sm:modal-middle">
            <div className="modal-box">
                <form onSubmit={handleSubmit(onSubmit)}>        
                <p className="text-blue-500">Your Email</p>
                <input {...register("email")} className="pl-2 text-white rounded-md py-2 w-[300px] md:w-full bg-blue-400"  type="email"  defaultValue={user?.email}  />
                {/* {errors.email && <span className="mt-2 text-red-600">Email is required </span>} */}
                <br />
                <p className="text-blue-500">Your Name</p>
                <input {...register("name")} className="pl-2 text-white rounded-md py-2 w-[300px] md:w-full bg-blue-400"  type="text" defaultValue={user?.displayName} />
                <br />
                <p className="text-blue-500">Phone Number</p>
                <input {...register("number")} className="pl-2 text-white rounded-md py-2 w-[300px] md:w-full bg-blue-400"  type="text"  />
                <br />
                <p className="text-blue-500">Address</p>
                <input {...register("address")} className="pl-2 text-white rounded-md py-2 w-[300px] md:w-full bg-blue-400"  type="text"  />
                {/* {errors.name && <span className="mt-2 text-red-600">Email is required </span>} */}
                <br />
                <br />
                <div className="flex justify-between">
                <button className="rounded-md px-8 btn bg-blue-500 border-[#eae9dc] text-white hover:text-black hover:bg-blue-300 font-semibold text-lg">Submit</button>
                <form method="dialog">

                <button className="rounded-md px-8 btn bg-blue-500 border-[#eae9dc] text-white hover:text-black hover:bg-blue-300 font-semibold text-lg">Close</button>
                </form>
                </div>
                

                </form>

                
            </div>
        </dialog>
                </div>
            </div>
        </div>
    );
};

export default PetDetails;