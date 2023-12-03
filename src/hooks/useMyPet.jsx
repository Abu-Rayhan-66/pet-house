
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';


const useMyPet = () => {
    const axiosPublic = useAxiosPublic()

    const {data: menu =[] , isPending: loading, refetch} = useQuery({
        queryKey:['pets'],
        queryFn:async () =>{
            const res = await axiosPublic.get('/pets')
            return res.data
        }
    })

    return [menu, loading, refetch]
};

export default useMyPet;