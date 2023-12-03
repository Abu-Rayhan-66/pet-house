import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import PetListing from "../Pages/PetListing/PetListing";
import DonationCampaigns from "../Pages/DonationCampaigns/DonationCampaigns";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddPet from "../Pages/Dashboard/AddPet/AddPet";
import MyAddedPets from "../Pages/Dashboard/MyAddedPets/MyAddedPets";
import AdoptionRequest from "../Pages/Dashboard/AdoptionRequest/AdoptionRequest";
import CreateDonationCampaign from "../Pages/Dashboard/CreateDonationCampaign/CreateDonationCampaign";
import MyDonationCampaigns from "../Pages/Dashboard/MyDonationCampaigns/MyDonationCampaigns";
import MyDonations from "../Pages/Dashboard/MyDonations/MyDonations";
import PrivateRoute from "./PrivateRoute";
import PetUpdate from "../Pages/Dashboard/PetUpdate/PetUpdate";
import PetsCategory from "../Pages/Home/PetsCategory/PetsCategory";
import PetDetails from "../Pages/PetListing/PetDetails/PetDetails";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoutes";
import DonationDetails from "../Pages/DonationCampaigns/DonationDetails/DonationDetails";
import AllPets from "../Pages/Dashboard/AllPtes/AllPets";
import AllDonations from "../Pages/Dashboard/AllDonations/AllDonations";
import CampaignUpdate from "../Pages/Dashboard/CampaignUpdate/CampaignUpdate";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
         path:"/petListing",
         element:<PetListing></PetListing>
        },
        {
         path:"/donationCampaigns",
         element:<DonationCampaigns></DonationCampaigns>
        },
        {
         path:"/login",
         element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/pet/:_id",
          element:<PetsCategory></PetsCategory>,
          loader:() => fetch('/data.json')
        },
        {
          path:"/petDetails/:_id",
          element:<PetDetails></PetDetails>,
          loader: ({params}) => fetch(`https://y-five-ruddy.vercel.app/pets/${params._id}`)
        },
        {
          path:"/donationDetails/:_id",
          element:<DonationDetails></DonationDetails>,
          loader: ({params}) => fetch(`https://y-five-ruddy.vercel.app/campaigns/${params._id}`)
        }
      ]
    },

    {
      path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/addPet",
        element:<PrivateRoute><AddPet></AddPet></PrivateRoute>
      },
      {
        path:"/dashboard/myAddedPets",
        element:<PrivateRoute><MyAddedPets></MyAddedPets></PrivateRoute>
      },
      {
       path:"/dashboard/petUpdate/:id",
       element:<PrivateRoute><PetUpdate></PetUpdate></PrivateRoute>,
       loader: ({params}) => fetch(`https://y-five-ruddy.vercel.app/pets/${params.id}`)
       
      },
      {
       path:"/dashboard/campaignUpdate/:id",
       element:<PrivateRoute><CampaignUpdate></CampaignUpdate></PrivateRoute>,
       loader: ({params}) => fetch(`https://y-five-ruddy.vercel.app/campaigns/${params.id}`)
       
      },
      {
        path:"/dashboard/adoptionRequest",
        element:<PrivateRoute><AdoptionRequest></AdoptionRequest></PrivateRoute>
      },
      {
        path:"/dashboard/createDonationCampaign",
        element:<PrivateRoute><CreateDonationCampaign></CreateDonationCampaign></PrivateRoute>
      },
      {
        path:"/dashboard/myDonationCampaigns",
        element:<PrivateRoute><MyDonationCampaigns></MyDonationCampaigns></PrivateRoute>
      },
      {
        path:"/dashboard/myDonations",
        element:<PrivateRoute><MyDonations></MyDonations></PrivateRoute>
      },
      {
        path:"/dashboard/allUsers",
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path:"/dashboard/allPets",
        element:<AdminRoute><AllPets></AllPets></AdminRoute>
      },
      {
        path:"/dashboard/allDonations",
        element:<AdminRoute><AllDonations></AllDonations></AdminRoute>
      }
    ]
    }
  ]);


export default router;