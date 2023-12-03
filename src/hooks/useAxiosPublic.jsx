import axios from "axios";


const axiosPublic = axios.create({
    baseURL:'https://y-five-ruddy.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
       
};

export default useAxiosPublic;