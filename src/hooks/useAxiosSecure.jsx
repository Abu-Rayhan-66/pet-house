import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const axiosSecure =   axios.create({
    baseURL:('https://y-five-ruddy.vercel.app')
    
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useContext(AuthContext)
    axiosSecure.interceptors.request.use(function (config){
        return config
    })
    axiosSecure.interceptors.response.use(function (response){
        return response;
        
    },  async(error)=>{
        const status = error.response.status
        console.log('error interceptors', status)
        if(status === 401 || status === 403){
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error)
    })

    return axiosSecure;
   

};

export default useAxiosSecure;