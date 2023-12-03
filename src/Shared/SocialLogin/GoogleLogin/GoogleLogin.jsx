import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";




const GoogleLogin = () => {

    const {googleLogIn} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const location = useLocation()
    const navigate = useNavigate()
   

    const handleGoogleLogIn = e => {
        e.preventDefault()
        googleLogIn()
        .then(result =>{
          console.log(result.user)
         const userInfo = {
              email:result.user?.email,
              name:result.user?.displayName
          }
          axiosPublic.post('/users', userInfo)
          .then(result =>{
              console.log(result.data)
              navigate(location?.state ? location.state : "/")
          })
      })
    
      }

    return (
        <div>
            <button onClick={handleGoogleLogIn} className="
            btn w-[300px] mt-4 md:w-[400px]
          bg-blue-500 text-white rounded-md
           hover:text-black hover:bg-blue-200
            text-lg font-semibold">
                Login With Google
            </button>
        </div>
    );
};

export default GoogleLogin;