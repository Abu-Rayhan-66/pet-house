

// eslint-disable-next-line react/prop-types
const DonationCampaignsCard = ({ item }) => {

    // eslint-disable-next-line react/prop-types
    const { photo, name, amount, addedTime  } = item

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="h-[300px]" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Maximum Amount: {amount}</p>
                <p>Time: {addedTime}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default DonationCampaignsCard;