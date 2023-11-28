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

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
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
        }
      ]
    },

    {
      path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/addPet",
        element:<AddPet></AddPet>
      },
      {
        path:"/dashboard/myAddedPets",
        element:<MyAddedPets></MyAddedPets>
      },
      {
        path:"/dashboard/adoptionRequest",
        element:<AdoptionRequest></AdoptionRequest>
      },
      {
        path:"/dashboard/createDonationCampaign",
        element:<CreateDonationCampaign></CreateDonationCampaign>
      },
      {
        path:"/dashboard/myDonationCampaigns",
        element:<MyDonationCampaigns></MyDonationCampaigns>
      },
      {
        path:"/dashboard/myDonations",
        element:<MyDonations></MyDonations>
      }
    ]
    }
  ]);


export default router;