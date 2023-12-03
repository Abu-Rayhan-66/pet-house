import { useEffect, useState } from "react";
import DonationCampaignsCard from "./DonationCampaignsCard/DonationCampaignsCard";


const DonationCampaigns = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5002/campaigns')
        .then(res => res.json())
        .then(data => {
            setData(data)
  

        })
        
    },[])

    return (
        <div className="mx-20 mt-10 mb-10 grid grid-cols-1 md:grid-cols-3 gap-16">
            {
                data.map(item => <DonationCampaignsCard key={item._id} item={item}></DonationCampaignsCard>)
            }
        </div>
    );
};

export default DonationCampaigns;