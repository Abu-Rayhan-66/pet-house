import { useForm } from "react-hook-form";
import GoogleLogin from "../../Shared/SocialLogin/GoogleLogin/GoogleLogin";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

    const { userLogIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const email = data.email
        const password = data.password
        userLogIn(email, password)
            .then(res => {
                console.log(res.user)

            })
        navigate("/")
        Swal.fire("Successfully Logged In ");
    }

    return (
        <div >
            <div id="background">
                <div className='border-2  w-[350px] h-[450px] md:h-[500px] mb-6 mt-6 md:w-[500px] p-5
         md:p-10 bg-white bg-opacity-50  hover:shadow-2xl  rounded-md' >
                    <h2 className='text-5xl font-bold text-blue-600'>Login here</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className=' w-40 h-80 relative'>
                        <h3 className='text-white text-lg font-medium'>Email</h3>
                        <input className='pl-2  rounded-md py-2 w-[300px] bg-black md:w-[400px] text-lg'
                            {...register("email", { required: true })} type="email" placeholder='Email' id="" />
                        {errors.email && <span className="mt-2 text-red-600">Email is required </span>}


                        <h3 className='text-white text-lg  font-medium'>Password</h3>
                        <input className='pl-2 bg-black rounded-md py-2 w-[300px] md:w-[400px]  text-lg '
                            {...register("password", { required: true, minLength: 8 })} type="password" placeholder='Password' id="" />
                        {errors.password && <span className="mt-2 text-red-600 ">password is required </span>
                        
                        }

                        {errors.password?.type === "minLength" && (
                            <p className="text-red-600">required 6 character</p>
                        )}

                        <p className='text-white mb-6 w-[300px] '>Do not have an account? <Link className='font-semibold text-purple-800' to="/register">Register</Link></p>
                        <button className="btn w-[300px] md:w-[400px] bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Login</button>
                        <GoogleLogin></GoogleLogin>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;