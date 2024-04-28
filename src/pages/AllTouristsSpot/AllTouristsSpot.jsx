import AllTouristsSpotCard from "./AllTouristsSpotCard";
import { useEffect, useState } from "react";

const AllTouristsSpot = () => {
  const [touristSpots, setTouristSpots] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch(`https://turio-server.vercel.app/spots?sort=${sort}`)
      .then((res) => res.json())
      .then((data) => {
        setTouristSpots(data);
      });
  }, [sort]);

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-center mt-16  px-4 md:px-0">
        <select
          className="select select-bordered w-full max-w-xs bg-green-500 text-white font-bold"
          value={sort}
          onChange={handleSortChange}
        >
          <option disabled value="">
            Sort By?
          </option>
          <option value="asc">Low to High Average Cost</option>
          <option value="desc">High to Low Average Cost</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-5 md:px-2 gap-12  py-8 ">
        {touristSpots?.map((spot) => (
          <AllTouristsSpotCard key={spot._id} spot={spot}></AllTouristsSpotCard>
        ))}
      </div>
    </div>
  );
};

AllTouristsSpot.propTypes = {};

export default AllTouristsSpot;
