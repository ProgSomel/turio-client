import { PropTypes } from "prop-types";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";
import { Link } from "react-router-dom";
import 'animate.css';
<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />

const SpotCard = ({ spot }) => {
  const {
    _id,
    imageUrl,
    touristsSpotName,
    averageCost,
    seasonality,
    travelTime,
    totalVisitorsPerYear,
    countryName,
    location
    
  } = spot;

  return (
    <div className="animate__animated animate__bounce">
      <div data-aos="fade-up"  className="card h-[570px]  bg-base-100 shadow-xl">
        <div className="relative">
        <figure>

          <img className="hover:scale-125  rounded-tr-md rounded-tl-md"
            src={imageUrl}
            alt="Shoes"
          />
        </figure>
        <div className="absolute top-4 left-2">

            <button className=" bg-green-500 px-12 rounded-md text-white font-bold py-1 flex items-center gap-2"><CiClock2 />{travelTime}</button>
        </div>
        </div>
        <div className="card-body">
          <div className="flex items-center gap-4 mb-5">
          <h2 className="card-title text-2xl">{touristsSpotName}</h2>
          <div className="flex items-center gap-1">
            <p className="text-blue-400"><TiWeatherCloudy /></p>
            <p className="text-blue-500">{seasonality}</p>
          </div>
          </div>
          <div className="mb-3">
            <p className="flex items-center gap-2"><span className=" font-bold "><BsPeople /></span><span className="font-extralight text-green-800">{totalVisitorsPerYear} Visitors Per Year</span></p>
          </div>
          <div className="flex  items-center w-1/2 gap-2">
                <p className="text-green-500">
                  <CiLocationOn />
                </p>
                <p className="font-bold text-orange-400">{location}</p>
                <p className="text-orange-400">,</p>
                <p className="font-bold text-orange-400">{countryName}</p>
              </div>
          <div className="flex items-center gap-4 mt-4">
            <Link to={`/spotDetails/${_id}`} state={touristsSpotName}>
            <button className="border border-green-300 px-5 text-green-500 font-bold rounded-md flex items-center gap-2 hover:bg-green-900">VIEW DETAILS <span className="text-green-300"><FaArrowRightLong /></span></button>
            </Link>
            <div>
                <p className="">Average Cost</p>
            <p className="text-green-600 font-bold">{averageCost}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SpotCard.propTypes = {
  spot: PropTypes.object,
};

export default SpotCard;
