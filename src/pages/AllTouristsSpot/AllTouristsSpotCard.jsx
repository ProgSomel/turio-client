
import { PropTypes } from 'prop-types';
import { BsPeople } from 'react-icons/bs';
import { CiClock2 } from 'react-icons/ci';
import { FaArrowRightLong } from 'react-icons/fa6';
import { TiWeatherCloudy } from 'react-icons/ti';
const AllTouristsSpotCard = ({spot}) => {
    const {
        imageUrl,
        touristsSpotName,
        averageCost,
        seasonality,
        travelTime,
        totalVisitorsPerYear,
        
      } = spot;
    return (
        <div className="">
      <div className="card h-[500px]  bg-base-100 shadow-xl">
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
            <p className="flex items-center gap-2"><span className="text-orange-400 font-bold "><BsPeople /></span><span className="font-extralight">{totalVisitorsPerYear}</span></p>
          </div>
          <div className="flex items-center gap-4">
            <button className="border border-green-300 px-5 text-green-500 font-bold rounded-md flex items-center gap-2 hover:bg-green-900">VIEW DETAILS <span className="text-green-300"><FaArrowRightLong /></span></button>
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


AllTouristsSpotCard.propTypes = {
    spot: PropTypes.object
};


export default AllTouristsSpotCard;
