import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import moment from "moment";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const CreateDonationCampaign = () => {

    const {user} = useContext(AuthContext)
    const email = user.email
    const axiosPublic = useAxiosPublic()
    const addMoment = <p>{moment().format("DD/MM/YYYY hh:mm A")}</p>
    const addedTime = addMoment.props.children
    


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
        const amount = data.amount
        const date = data.date
        const description = data.description
        const longDescription = data.longDescription
        




        const userInfo = {
            photo:photo,
            name:name,
            amount:amount,
            date:date,
            description:description,
            longDescription:longDescription,
            addedTime:addedTime,
            PostDate:new Date(),
            email:email,
           
        }
        axiosPublic.post('/campaigns', userInfo)
            .then(res => {
                console.log(res.user)
                if (res.data.insertedId) {
                    Swal.fire("Campaign Created Successfully");
                }

            })

    }


    return (
        <div >
            <div className="flex justify-center">
                <div className='border-2  w-[350px] h-[650px] md:h-[780px] mb-6 mt-6 md:w-[500px] p-5
         md:p-10 bg-white bg-opacity-50  hover:shadow-2xl  rounded-md' >
                    <h2 className='text-3xl font-bold text-blue-600'>Create Your Campaign</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className=' w-40 h-80 relative'>

                        <h3 className='text-white text-lg  font-medium'>Profile Picture</h3>
                        <input className='pl-2 bg-black rounded-md py-2 w-[300px] md:w-[400px]   text-lg '
                            {...register("photo", { required: true })} type="file" placeholder='Password' id="" />
                        {errors.photo && <span className="mt-2 text-red-600 ">picture is required </span>}

                        <h3 className='text-white text-lg  font-medium'>Pet Name</h3>
                        <input className='pl-2 rounded-md py-2 w-[300px] bg-black md:w-[400px] text-lg'
                            {...register("name", { required: true })} type="text" placeholder='Name' id="" />
                        {errors.name && <span className="mt-2 text-red-600 w-full">Name is required </span>}

                        <h3 className='text-white text-lg  font-medium'>Maximum Amount</h3>
                        <input className='pl-2 rounded-md py-2 w-[300px] bg-black md:w-[400px] text-lg'
                            {...register("amount", { required: true })} type="number" placeholder='Amount' id="" />
                        {errors.amount && <span className="mt-2 text-red-600 w-full">Amount is required </span>}

                        <h3 className='text-white text-lg  font-medium'>Date</h3>
                        <input className='pl-2 rounded-md py-2 w-[300px] bg-black md:w-[400px] text-lg'
                            {...register("date", { required: true })} type="date" placeholder='date' id="" />
                        {errors.date && <span className="mt-2 text-red-600 w-full">Date is required </span>}

  
                        <h3 className='text-white text-lg  font-medium'>Short Description</h3>
                        <input className='pl-2 rounded-md py-2 w-[300px] bg-black md:w-[400px] text-lg'
                            {...register("description", { required: true })} type="text" placeholder='Short description' id="" />
                        {errors.description && <span className="mt-2 text-red-600 w-full">description is required </span>}
                        
                        <h3 className='text-white text-lg  font-medium'>Long Description</h3>
                        <textarea {...register("longDescription", { required: true })} type="text" placeholder='Long Description' className='pl-2 rounded-md py-2 w-[300px] bg-black md:w-[400px] text-lg' cols="30" rows="2"></textarea>
                        {errors.longDescription && <span className="mt-2 text-red-600 w-full">description is required </span>}

                       
                        

                        <button className="btn w-[300px] md:w-[400px] bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Add Pet</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default CreateDonationCampaign;