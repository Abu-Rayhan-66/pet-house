import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const DonationCampaignsCard = ({ item }) => {

    // eslint-disable-next-line react/prop-types
    const {_id, photo, name, amount, addedTime  } = item

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="h-[300px]" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Maximum Amount: {amount}</p>
                <p>Time: {addedTime}</p>
                <div className="card-actions justify-end">
                    <Link to={`/donationDetails/${_id}`}>
                    <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCampaignsCard;