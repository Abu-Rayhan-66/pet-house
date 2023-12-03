import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import {useQuery,} from '@tanstack/react-query'
import { AuthContext } from "../Provider/AuthProvider";

const useDeleteMyPet = () => {
   const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {data: myPet =[], refetch} = useQuery({
        queryKey:['myPet', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/pets?email=${user?.email}`)
            return res.data

        }
    })


    return [myPet, refetch]
};

export default useDeleteMyPet;