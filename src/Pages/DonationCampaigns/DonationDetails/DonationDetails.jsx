import { useLoaderData } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import { useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import { AuthContext } from "../../../Provider/AuthProvider";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
import CheckOut from "../../../Payment/CheckOut";




const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const DonationDetails = () => {
    // const { user } = useContext(AuthContext)
    // const axiosPublic = useAxiosPublic()
    const data = useLoaderData()
    const { photo, name, amount, date, description, longDescription } = data

    // const {
    //     // register,
    //     handleSubmit,
    //     // formState: { errors },
    // } = useForm()

    // const onSubmit = async (data) => {
    //     console.log(data)
    //     // const amount = data.amount
    //     // const email = user.email
    //     // const name = user.displayName
    //     // console.log(email, name)


    //     // const adoptInfo = {
    //     //     amount: amount,
    //     //     email: email,
    //     //     name: name,

    //     // }

    //     // axiosPublic.post('/donations', adoptInfo)
    //     //     .then(res => {
    //     //         console.log(res.user)
    //     //         if (res.data.insertedId) {
    //     //             Swal.fire("Donated  Successfully");
    //     //         }

    //     //     })

    // }

    return (
        <div className="mx-10 mb-10">
            <h2 className="text-2xl text-center mt-10 mb-10">Meet {name}</h2>
            <div className="md:flex  gap-16">
                <div className="md:w-1/2">
                    <img className="h-[500px] w-full rounded-md" src={photo} alt="" />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-2xl">Name: {name}</h2>
                    <h2 className="text-2xl mt-4">Maximum amount: {amount}$</h2>
                    <p className="mt-5 mb-5">Date: {date}</p>
                    <p className="mt-5 mb-5">Description: {description}</p>
                    <p className="mt-5 mb-5">Full description: {longDescription}</p>
                    {/* <p className="mt-5 mb-5">Location: {location}</p> */}
                    {/* <button className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Contact Us</button> */}

                    <button className="rounded-md btn bg-blue-500 border-[#eae9dc] text-white hover:text-black hover:bg-blue-300 font-semibold text-lg"
                        onClick={() => document.getElementById('my_modal_5').showModal()}>Donate</button>


                    <dialog id="my_modal_5" className="modal z-[0] modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            
                                {/* <br />
                <p className="text-blue-500">Amount</p>
                <input  placeholder="Enter your amount" {...register("amount")} className=" pl-2 text-white rounded-md py-2 w-[300px] md:w-full bg-blue-400"  type="text"  />
                <br />
                <br /> */}

                                <div>
                                    <Elements stripe={stripePromise}>
                                        <CheckOut></CheckOut>
                                    </Elements>
                                </div>
                                <div className="flex justify-between">
                                    
                                    <form method="dialog">

                                        <button className="rounded-md px-8 btn bg-blue-500 border-[#eae9dc] text-white hover:text-black hover:bg-blue-300 font-semibold text-lg">Close</button>
                                    </form>
                                </div>
                            


                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;