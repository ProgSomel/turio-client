import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [myLists, setMyList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/spots?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyList(data);
      });
  }, [user?.email]);


  const handleSubmit = (e, id) => {
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
if(data.modifiedCount > 0) {
    toast.success('Spot Successfully Updated', {
        position: 'top-left',
     
        
    });
    fetch(`http://localhost:5000/spots?email=${user?.email}`)
          .then((res) => res.json())
          .then((updatedData) => {
            // Update the state with the updated list
            setMyList(updatedData);
          });
}
})

}


const handleDelete = (id) => {


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {


        fetch(`http://localhost:5000/spots/${id}`, {
          method: 'DELETE',
      })
      .then(res => res.json())
      .then(data => {
        
          if(data.deletedCount > 0) {
              Swal.fire({
                  icon: "success",
                  title: "Success!",
                  text: "Tourist Spot Deleted Successfully",
                  confirmButtonText: "Cool",
                });
                const remaining = myLists?.filter((myList)=> myList._id !== id);
                setMyList(remaining);
          }
      })

        
      }
    });

   
}

  return (
    <div className="flex justify-center py-12 max-w-6xl mx-auto px-5 md:px-2 shadow-xl min-h-screen">
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
                      document.getElementById(`my_modal_${myList._id}`).showModal()
                    }
                  >
                    Update
                  </button>
                  <dialog id={`my_modal_${myList._id}`} className="modal">
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
                              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
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
                  <button onClick={()=>handleDelete(myList?._id)} className="btn">Delete</button>
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
