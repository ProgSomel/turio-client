import { useContext} from "react";
import { AuthContext } from './../../providers/AuthProvider';
import Swal from "sweetalert2";


const AddTouristSpot = () => {

    const {user} = useContext(AuthContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const imageUrl = form.imageUrl.value;
  const touristsSpotName = form.touristsSpotName.value;
  const countryName = form.countryName.value;
  const location = form.location.value;
  const shortDescription = form.shortDescription.value;
  const averageCost = form.averageCost.value;
  const seasonality = form.seasonality.value;
  const travelTime = form.travelTime.value;
  const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
  const userEmail = form.userEmail.value;
  const userName = form.userName.value;
  
  const spotsData = {
    imageUrl,
    touristsSpotName,
    countryName,
    location,
    shortDescription,
    averageCost,
    seasonality,
    travelTime,
    totalVisitorsPerYear,
    userEmail,
    userName,
  };

  fetch("http://localhost:5000/spots", {
    method: "POST",
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(spotsData)
  })
  .then(res => res.json())
  .then(data => {
    if(data.insertedId) {
        Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Spot Added Successfully",
            confirmButtonText: "Cool",
          });
          form.reset();
    }
  })

    }

    return (
        <div>
             <form onSubmit={handleSubmit} className="max-w-lg mx-auto px-4 py-8 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">Add Tourist Spot</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
            Image URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="imageUrl"
           
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="touristsSpotName">
            Tourist Spot Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="touristsSpotName"
          
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="countryName">
          Country Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="countryName"
          
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
          Location
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="location"
         
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortDescription">
          Short Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="shortDescription"
         
          required
        ></textarea>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="averageCost">
            Average Cost
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="averageCost"
           
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seasonality">
            Seasonality
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="seasonality"
    
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="travelTime">
            Travel Time
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="travelTime"
            
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalVisitorsPerYear">
            Total Visitors Per Year
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="totalVisitorsPerYear"
            
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userEmail">
          User Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          name="userEmail"
          defaultValue={user?.email}
          readOnly
          
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">
          User Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="userName"
          defaultValue={user?.displayName}
          readOnly
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
        </div>
    );
};


AddTouristSpot.propTypes = {

};


export default AddTouristSpot;
