import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import CallToAction from "./CallToAction/CallToAction";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import AllCategory from "./PetsCategory/AllCategory/AllCategory";
import RescuedPet from "./RescuedPet/RescuedPet";



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AllCategory></AllCategory>
            <CallToAction></CallToAction>
            <AboutUs></AboutUs>
            <RescuedPet></RescuedPet>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;