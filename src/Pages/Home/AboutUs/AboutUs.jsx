

const AboutUs = () => {
    return (
        <div className="mx-20 mb-10">
            <h2 className="text-2xl text-center mt-10 mb-10">About Us</h2>
            <div className="flex  gap-16">
                <div className="w-1/2">
                  <img className="h-[500px] w-full" src="https://i.ibb.co/1TSzL0n/adopt-pet-concept-23-2148523582.jpg" alt="" />
                </div>
                <div className="w-1/2">
                  <h2 className="text-2xl">The purpose of our website</h2>
                  <h2 className="text-5xl mt-4">Our main goal is to protect animals and give them a better and healthy life.</h2>
                  <p className="mt-5 mb-5">Our website to is a platform where people can raise fund for pets.
                     and also if someone is looking for a adaptor for their pets they can do that and find a new home for their pets.   </p>
                  <button className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;