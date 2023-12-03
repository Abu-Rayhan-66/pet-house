import { useEffect, useState } from "react";
import PetListingCard from "./PetListingCard/PetListingCard";


const PetListing = () => {

    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const adopted = false



    useEffect(()=>{
        fetch('https://y-five-ruddy.vercel.app/pets')
        .then(res => res.json())
        .then(data => {
            setData(data)
  

        })
        
    },[])

    useEffect(()=>{
        const filterDataNew = data.filter(item => item.adopted === adopted)
        setFilterData(filterDataNew)
    },[data, adopted])
    
   console.log(filterData)
    console.log(data)

    return (
        <div className="mx-20 mt-10 mb-10 grid grid-cols-1 md:grid-cols-3 gap-16">
            {
                filterData.map(item => <PetListingCard key={item._id} item={item}></PetListingCard>)
            }
        </div>
    );
};

export default PetListing;