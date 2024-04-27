import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [myLists, setMyList] = useState([]);

  console.log(user?.email);
  useEffect(() => {
    fetch(`http://localhost:5000/spots/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyList(data);
      });
  }, [user?.email]);


  const handleSubmit = (e, id) => {
    console.log(id);
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

fetch(`http://localhost:5000/spots/${id}`, {
method: "PUT",
headers: {
    'content-type': 'application/json'
},
body: JSON.stringify(spotsData)
})
.then(res => res.json())
.then(data => {
console.log(data);
if(data.modifiedCount > 0) {
    toast.success('Spot Successfully Updated', {
        position: 'top-right',
    });
    fetch(`http://localhost:5000/spots/${user?.email}`)
          .then((res) => res.json())
          .then((updatedData) => {
            // Update the state with the updated list
            setMyList(updatedData);
          });
}
})

}

  return (
    <div className="flex justify-center my-12 max-w-6xl mx-auto px-4 md:px-2 shadow-xl min-h-screen">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-green-500 text-white font-bold">
              <th></th>
              <th>Tourist Spot Name</th>
              <th>Location</th>
              <th>Country Name</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myLists?.map((myList, idx) => (
              <tr key={myList._id}>
                <th>{++idx}</th>
                <td>{myList?.touristsSpotName}</td>
                <td>{myList?.location}</td>
                <td>{myList?.countryName}</td>
                <td>
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Update
                  </button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <div>
                        <form onSubmit={(e)=>handleSubmit(e, myList?._id)}
                         
                          className="max-w-lg mx-auto px-4 py-8 bg-white shadow-lg rounded-lg mt-8"
                        >
                          <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">
                            Update Tourist Spot
                          </h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="imageUrl"
                              >
                                Image URL
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                name="imageUrl"
                                defaultValue={myList?.imageUrl}
                                required
                              />
                            </div>
                            <div>
                              <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="touristsSpotName"
                              >
                                Tourist Spot Name
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                name="touristsSpotName"
                                defaultValue={myList?.touristsSpotName}
                                required
                              />
                            </div>
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="countryName"
                            >
                              Country Name
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              type="text"
                              name="countryName"
                              defaultValue={myList?.countryName}
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="location"
                            >
                              Location
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              type="text"
                              name="location"
                              defaultValue={myList?.location}
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="shortDescription"
                            >
                              Short Description
                            </label>
                            <textarea
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              name="shortDescription"
                              defaultValue={myList?.shortDescription}
                              required
                            ></textarea>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="averageCost"
                              >
                                Average Cost
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                name="averageCost"
                                defaultValue={myList?.averageCost}
                                required
                              />
                            </div>
                            <div>
                              <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="seasonality"
                              >
                                Seasonality
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                name="seasonality"
                                defaultValue={myList?.seasonality}
                                required
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="travelTime"
                              >
                                Travel Time
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                name="travelTime"
                                defaultValue={myList?.travelTime}
                                required
                              />
                            </div>
                            <div>
                              <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="totalVisitorsPerYear"
                              >
                                Total Visitors Per Year
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                name="totalVisitorsPerYear"
                                defaultValue={myList?.totalVisitorsPerYear}
                                required
                              />
                            </div>
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="userEmail"
                            >
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
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="userName"
                            >
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
                              Update
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
                <td>
                  <button className="btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster/>
    </div>
  );
};

MyList.propTypes = {};

export default MyList;
