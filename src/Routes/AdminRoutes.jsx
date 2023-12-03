import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    
    if(loading || isAdminLoading){
        return <span className="loading loading-ring loading-md"></span>
    }
    if(user && isAdmin){
        return children
    }

    return <Navigate to="/dashboard/addPet" state={{from: location}} replace ></Navigate>

};

export default AdminRoute;