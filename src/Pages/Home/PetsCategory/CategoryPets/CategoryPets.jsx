

// eslint-disable-next-line react/prop-types
const CategoryPets = ({data}) => {

    // eslint-disable-next-line react/prop-types
    const { name, category, photo } = data

    return (
        <div>
            <div className="card lg:w-[500px] h-[500px] bg-blue-200 shadow-xl">
  <figure><img className="w-full h-full" src={photo} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-blue-500">Pet Name: {name}</h2>
    <p className="font-medium text-blue-500">Category: {category}</p>
 
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
        </div>
    );
};

export default CategoryPets;