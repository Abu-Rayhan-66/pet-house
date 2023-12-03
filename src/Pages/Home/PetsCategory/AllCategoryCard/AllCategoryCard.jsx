import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const AllCategoryCard = ({book}) => {

    const {id, image, category}  = book || {}

    return (
        <div>
           <div>
                  
               <div className=" shadow-lg mb-10 mt-10 rounded-md">
                    <figure><img className="h-[300px] mx-auto" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-center  text-lg">Category: {category}</h2>
                        <Link to={`/pet/${id}`}>
                        <button className="rounded-md btn bg-blue-500 border-[#eae9dc] text-white hover:text-black hover:bg-blue-300 font-semibold text-lg">ALL Pets</button>
                        </Link>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default AllCategoryCard;