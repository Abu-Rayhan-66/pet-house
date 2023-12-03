import { useEffect, useState } from "react";
import CategoryPets from "../CategoryPets/CategoryPets";


// eslint-disable-next-line react/prop-types
const SpecificPetCategory = ({card}) => {

    const { category,} = card ||{}
    console.log(category)

    
    const [data,setData] = useState([])
    const [filterData,setFilterData] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        fetch('http://localhost:5002/petCategory')
        .then(res => res.json())
        .then(data => {
            setData(data)
            setLoading(false)

        })
        // const filterData = data.filter(brand => brand.brand == brand_name)
        // setFilter(filterData)
    },[])

    useEffect(()=>{
        const filterDataNew = data.filter(item => item.category === category)
        setFilterData(filterDataNew)
    },[data, category])
    
   console.log(filterData)
    console.log(data)

    return (
        <div>
           {
            loading ? <div className="h-[50vh] flex justify-center"><span className="loading loading-spinner loading-lg"></span></div>:
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 mb-10 mx-6 md:mx-20'>
                {
                    filterData.map(data => <CategoryPets key={data._id} data={data}></CategoryPets>)
                }
            </div>

           }
            
        </div>
    );
};

export default SpecificPetCategory;