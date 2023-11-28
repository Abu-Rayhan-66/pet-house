import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className="h-[500px] px-10 mt-10" >
              <Carousel>
                <div >
                    <img className="" src="https://i.ibb.co/BfsYgGB/isolated-shot-ginger-cat-looking-retriever-dog-looking-camera-white-surface-181624-43633.jpg" />
                     <p className="text-xl font-semibold">we need a home to stay</p>
                </div>
                <div>
                    <img   src="https://i.ibb.co/YPLw1d1/view-adorable-kitten-with-simple-background-23-2150758082.jpg"/>
                      <p>I am cute kitty please adopt me</p>
                </div>
                <div>
                    <img  src="https://i.ibb.co/LQFrYfS/beautiful-pet-portrait-cat-23-2149218505.jpg"/>
                     <p>I may look scary but i am very friendly </p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;