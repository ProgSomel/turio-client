import { useEffect, useState } from "react";
import { BsPeople } from "react-icons/bs";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";

const TouristSpotsByCountry = () => {
  const countryName = useParams();
  console.log(countryName.countryName);

  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/spots?countryName=${countryName?.countryName}`)
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
      });
  }, [countryName.countryName]);

  return (
    <div className="mb-12">
        <div>
            <h1 className="text-center mt-8 text-5xl font-extrabold px-2">Tourist Spots By Country</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-5 md:px-2 gap-12 h-screen my-12">
      {spots?.map((spot) => (
        <div key={spot._id} className="card h-[800px]  bg-base-100 shadow-xl">
          <div className="relative">
            <figure>
              <img
                className="hover:scale-125  rounded-tr-md rounded-tl-md"
                src={spot?.imageUrl}
                alt="Shoes"
              />
            </figure>
            <div className="absolute top-4 left-2">
              <button className=" bg-green-500 px-12 rounded-md text-white font-bold py-1 flex items-center gap-2">
                <CiClock2 />
                {spot?.travelTime}
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="flex items-center gap-4 mb-5">
              <h2 className="card-title text-2xl">{spot?.touristsSpotName}</h2>
              <div className="flex items-center gap-1">
                <p className="text-blue-400">
                  <TiWeatherCloudy />
                </p>
                <p className="text-blue-500">{spot?.seasonality}</p>
              </div>
            </div>
            <div className="mb-3">
              <p className="flex items-center gap-2">
                <span className=" font-bold ">
                  <BsPeople />
                </span>
                <span className="font-extralight text-green-800">
                  {spot?.totalVisitorsPerYear} Visitors Per Year
                </span>
              </p>
            </div>
            <div className="flex  items-center w-1/2 gap-2">
              <p className="text-green-500">
                <CiLocationOn />
              </p>
              <p className="font-bold text-orange-400">{spot?.location}</p>
              <p className="text-orange-400">,</p>
              <p className="font-bold text-orange-400">{spot?.countryName}</p>
            </div>
            <div>
                <p>{spot?.shortDescription}</p>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Link to={`/spotDetails/${spot?._id}`}>
                <button className="border border-green-300 px-5 text-green-500 font-bold rounded-md flex items-center gap-2 hover:bg-green-900">
                  VIEW DETAILS{" "}
                  <span className="text-green-300">
                    <FaArrowRightLong />
                  </span>
                </button>
              </Link>
              <div>
                <p className="">Average Cost</p>
                <p className="text-green-600 font-bold">{spot?.averageCost}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

TouristSpotsByCountry.propTypes = {};

export default TouristSpotsByCountry;
