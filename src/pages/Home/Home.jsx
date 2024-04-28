/* eslint-disable react/no-unescaped-entities */
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import SpotCard from "./SpotCard/SpotCard";
import Countries from "./Countries/Countries";

const Home = () => {
    const spots = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            
            <div className="">
                <div className="flex flex-col md:flex-row items-center gap-0  max-w-6xl mx-auto px-4 md:px-2 ">
                    <div className="md:mt-12 flex-1">
                        <h1 className="get text-center md:text-left text-green-800  ">Perfect For You</h1>

                        <h1 className="text-6xl font-bold text-center md:text-left">Popular Tour Package</h1>
                <p className="w-1/2  my-5 font-light text-center md:text-left">Discover the allure of our most sought-after tour packages, meticulously crafted to cater to every traveler's dream. Whether you crave the excitement of urban escapades, the serenity of coastal retreats, or the adventure of off-the-beaten-path exploration, our curated selection has something for everyone.</p>
                    </div>

                    <div className="mb-4 md:mb-4 ">
                        <Link className="w-full" to="/allTouristsSpot">
                        <button className="text-white bg-green-600 px-2 py-2 font-bold">View All Tour</button>
                        </Link>
                    </div>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4 md:px-2 gap-12 mt-4">
               {
                spots?.slice(0, 6).map((spot)=> <SpotCard key={spot._id} spot={spot}></SpotCard>)
               }
            </div>
            </div>

            <div>
                <Countries></Countries>
            </div>
            
        </div>
    );
};


Home.propTypes = {

};


export default Home;
