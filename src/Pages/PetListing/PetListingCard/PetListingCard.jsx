import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PetListingCard = ({ item }) => {

    // eslint-disable-next-line react/prop-types
    const {_id, photo, name, age, location, addedTime } = item

    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-[350px]" src={photo} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Age: {age}yr</p>
                <p>Location: {location}</p>
                <p>Time: {addedTime}</p>
                <div className="card-actions justify-end">
                    <Link to={`/petDetails/${_id}`}><button className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PetListingCard;