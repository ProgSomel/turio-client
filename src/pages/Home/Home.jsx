import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import SpotCard from "./SpotCard/SpotCard";

const Home = () => {
    const spots = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4 md:px-2 gap-12">
               {
                spots?.map((spot)=> <SpotCard key={spot._id} spot={spot}></SpotCard>)
               }
            </div>
        </div>
    );
};


Home.propTypes = {

};


export default Home;
