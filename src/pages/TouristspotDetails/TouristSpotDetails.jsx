import { useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
const TouristSpotDetails = () => {
  const spot = useLoaderData();



  const {
    imageUrl,
    touristsSpotName,
    averageCost,
    seasonality,
    travelTime,
    totalVisitorsPerYear,

    countryName,
    location,

    shortDescription,
  } = spot;

  return (
    <div>
      <div>
        <div
          className="relative h-[500px] bg-cover bg-center bg-no-repeat w-full "
          style={{
            backgroundImage: `url(${"https://i.postimg.cc/PxKf4f3d/Spot-Details.jpg"})`,
            backgroundSize: "cover",
          }}
        >
          <div data-aos="fade-down ">
            <div className="text-white text-center p-4  md:p-0">
              <h1 className="text-5xl md:text-9xl font-extrabold md:mb-8 text-green-600 ">
                KEEP TRAVEL ON
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left Sidebar */}
            <div className="md:col-span-3 bg-gray-100 p-6">
              {/* Additional Information */}
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                <i className="feather icon-map-pin mr-2"></i>
                Additional Information
              </h3>
              <div className="mb-4">
                <p className="text-gray-700 flex items-center">
                  <i className="feather icon-compass mr-2"></i>
                  <span className="font-bold">
                    Spot:
                    <span className="font-semibold">{touristsSpotName}</span>
                  </span>
                </p>
                <p className="text-gray-700 flex items-center">
                  <i className="feather icon-sun mr-2"></i>
                  <span className="font-semibold">Seasonality: </span>
                  {seasonality}
                </p>
                <p className="text-gray-700 flex items-center">
                  <i className="feather icon-clock mr-2"></i>
                  <span className="font-semibold">Travel Time:</span>
                  {travelTime}
                </p>
                <p className="text-gray-700 flex items-center">
                  <i className="feather icon-users mr-2"></i>
                  <span className="font-semibold">
                    Total Visitors Per Year:
                  </span>
                  {totalVisitorsPerYear}
                </p>
              </div>
              {/* Sidebar Image */}
              <img
                src={imageUrl}
                alt="Tourist Spot"
                className="w-full rounded-md"
              />
            </div>
            {/* Main Content */}
            <div className="md:col-span-6 p-6">
              {/* Image */}
              <img
                src={imageUrl}
                alt="Tourist Spot"
                className="w-full h-64 object-cover mb-6 rounded-md shadow-md"
              />
              {/* Title */}
              <h2 className="text-3xl font-semibold mb-2 text-gray-800">
                {touristsSpotName}
              </h2>
              {/* Description */}
              <p className="text-gray-700 mb-6">{shortDescription}</p>
              <div className="flex items-center">
                <p className="text-green-500">
                  <CiLocationOn />
                </p>
                <p className="font-bold text-orange-400">{location}</p>
                <p>,</p>
                <p className="font-bold text-orange-400">{countryName}</p>
              </div>
              {/* Book Now Button */}
              <div className="flex justify-center mt-4">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400">
                  Book Now
                </button>
              </div>
            </div>
            {/* Right Sidebar */}
            <div className="md:col-span-3 bg-gray-100 p-6">
              {/* Additional Details */}
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                <i className="feather icon-info mr-2"></i>
                Additional Details
              </h3>
              <p className="text-gray-700 flex items-center mb-2">
                <i className="feather icon-dollar-sign mr-2"></i>
                <span className="font-semibold">Average Cost:</span>
                {averageCost}
              </p>
              <p className="text-gray-700 flex items-center mb-2">
                <i className="feather icon-sunrise mr-2"></i>
                <span className="font-semibold">Best Time to Visit:</span>
                {seasonality}
              </p>
              <p className="text-gray-700 flex items-center mb-2">
                <i className="feather icon-calendar mr-2"></i>
                <span className="font-semibold">Recommended Duration:</span> 
                {travelTime}
              </p>
              <p className="text-gray-700 flex items-center mb-2">
                <i className="feather icon-activity lg:mr-2"></i>
                <span className="font-semibold">Popular Activities:</span> Beach
                activities, sightseeing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TouristSpotDetails.propTypes = {};

export default TouristSpotDetails;
