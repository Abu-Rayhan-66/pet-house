import { useEffect, useState } from "react";
import AllCategoryCard from "../AllCategoryCard/AllCategoryCard";


const AllCategory = () => {

    const [books, setBooks] = useState([])

    

    useEffect(() =>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div>
        <h2 className="mt-10 text-center text-2xl">Pet Categories</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-6 md:mx-20">
            
            {
                books.map(book => <AllCategoryCard key={book.id} book={book}></AllCategoryCard>)
            }
        </div>
       </div>
    );
};

export default AllCategory;