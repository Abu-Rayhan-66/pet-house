import { NavLink } from "react-router-dom";



const ErrorPage = () => {
    return (
        <div>
            <div className=" flex flex-col items-center  justify-center h-[100vh]">
        <h2 className="text-4xl md:text-6xl">Oops!!!</h2>
        <h2 className="text-4xl md:text-6xl">This page is not Found</h2>
        <NavLink to="/"><button className="rounded-md btn  bg-blue-500 border-[#eae9dc] text-white hover:text-black hover:bg-blue-200 font-semibold text-lg">Go To Home</button></NavLink>
    </div>
        </div>
    );
};

export default ErrorPage;