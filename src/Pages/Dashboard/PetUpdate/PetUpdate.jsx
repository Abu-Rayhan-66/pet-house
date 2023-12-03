
import { useLoaderData, } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import { useContext } from "react";
// import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const PetUpdate = () => {
    const petData = useLoaderData()

    // const {user} = useContext(AuthContext)
    // const email = user.email
    const axiosPublic = useAxiosPublic()
    
    


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)

        const imageFile = { image: data.photo[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }

        })
        console.log(res.data.data.display_url)
        const photo = res.data.data.display_url
        const name = data.name
        const age = data.age
        const category = data.category
        const description = data.description
        const longDescription = data.longDescription
        const location = data.location

        if(res.data.success){
            const petInfo = {
                photo:photo,
                name:name,
                age:age,
                category:category,
                location:location,
                description:description,
                longDescription:longDescription,
                
            }
            const menuRes = await axiosPublic.patch(`/pets/${petData._id}`, petInfo)
            console.log(menuRes.data)
            if(menuRes.data.modifiedCount > 0){
                Swal.fire("Pet Updated successfully");
            }

        }

    }


    return (
        <div >
            <div className="flex justify-center">
                <div className='border-2  w-[350px] h-[650px] md:h-[780px] mb-6 mt-6 md:w-[500px] p-5
         md:p-10 bg-white bg-opacity-50  hover:shadow-2xl  rounded-md' >
                    <h2 className='text-3xl font-bold text-blue-600'>Update Your Pet</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className=' w-40 h-80 relative'>

                        <h3 className='text-white text-lg  font-medium'>Profile Picture</h3>
                        <input  className='pl-2 bg-black rounded-md py-2 w-[300px] md:w-[400px]   text-lg '
                            {...register("photo", { required: true })} type="file" placeholder='Password' id="" />
                        {errors.photo && <span className="mt-2 text-red-600 ">picture is required </span>}

                        <h3 className='text-white text-lg  font-medium'>Pet Name</h3>
                        <input defaultValue={petData.name} className='pl-2 rounded-md py-2 w-[300px] bg-black md:w-[400px] text-lg'
                            {...register("name", { required: true })} type="text" placeholder='Name' id="" />
                        {errors.name && <span className="mt-2 text-red-600 w-full">Name is required </span>}

                        <h3 className='text-white text-lg  font-medium'>Pet Age</h3>
                        <input defaultValue={petData.age} className='pl-2 rounded-md py-2 w-[300px] bg-black md:w-[400px] text-lg'
                            {...register("age", { required: true })} type="number" placeholder='Age' id="" />
                        {errors.age && <span className="mt-2 text-red-600 w-full">Age is required </span>}

                        <label className="text-lg font-semibold text-white">Category: </label>
                        <select defaultValue={petData.category} {...register("category", { required: true })} className="text-lg font-medium rounded-md" id="">

                            <option className="text-lg font-medium " value="cat">Cat</option>
                            <option className="text-lg font-medium" value="dog">Dog</option>
                            <option className="text-lg font-medium" value="rabbit">Rabbit</option>
                            <option className="text-lg font-medium" value="eagle">Eagle</option>
                        </select>
                        {errors.category && <span className="mt-2 text-red-600 ">Select A Category</span>}

                        <h3 className='text-white text-lg  font-medium'>Pet Location</h3>
                        <input defaultValue={petData.location} className='pl-2 rounded-md py-2 w-[300px] bg-black md:w-[400px] text-lg'
                            {...register("location", { required: true })} type="text" placeholder='Location' id="" />
                        {errors.location && <span className="mt-2 text-red-600 w-full">Location is required </span>}

                        <h3 className='text-white text-lg  font-medium'>Short Description</h3>
                        <input defaultValue={petData.description} className='pl-2 rounded-md py-2 w-[300px] bg-black md:w-[400px] text-lg'
                            {...register("description", { required: true })} type="text" placeholder='Short description' id="" />
                        {errors.description && <span className="mt-2 text-red-600 w-full">description is required </span>}
                        
                        <h3 className='text-white text-lg  font-medium'>Long Description</h3>
                        <textarea defaultValue={petData.longDescription} {...register("longDescription", { required: true })} type="text" placeholder='Long Description' className='pl-2 rounded-md py-2 w-[300px] bg-black md:w-[400px] text-lg' cols="30" rows="2"></textarea>
                        {errors.longDescription && <span className="mt-2 text-red-600 w-full">description is required </span>}

                       
                        

                        <button className="btn w-[300px] md:w-[400px] bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Update Pet</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default PetUpdate;