import { useEffect, useState } from "react";
import "./Countries.css";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  return (
    <div>
      <div className="mt-24 mb-12">
        <Slide direction="top">
          <h1 className="get text-green-800 text-center ">Get Ready To</h1>
        </Slide>
        <Slide>
        <h1 className="text-6xl font-bold text-center">Explore Top Country</h1>
        </Slide>
        <Slide>
        <p className="w-3/4 mx-auto my-5 font-light">
          Embark on a journey through the vibrant landscapes and rich cultures
          of our top countries. From the bustling streets of Bangkok to the
          tranquil shores of Bali, each destination offers a unique tapestry of
          experiences waiting to be discovered.
        </p>
        </Slide>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-5 md:px-2 gap-12 ">
        {countries?.map((country) => (
          <Link
            to={`/touristSpotByCountry/${country?.countryName}` } state={country?.countryName}
            key={country._id}
            className=""
          >
            <div
              className="relative bg-cover bg-center bg-no-repeat  h-[450px] p-12 rounded-lg hover:scale-110"
              style={{
                backgroundImage: `url(${country?.imageUrl})`,
                backgroundSize: "cover",
                opacity: "500px",
              }}
            >
              <div data-aos="fade-down ">
                <div className="text-white text-center p-4  md:p-0">
                  <Slide direction="up">
                  <h1 className="text-4xl md:text-5xl  font-extrabold md:mb-8 text-green-600 ">
                    {country?.countryName}{" "}
                  </h1>
                  </Slide>

                 <Slide direction="up">
                 <p className="mb-6 md:mb-12 font-extrabold lg:text-xl w-full   lg:mx-auto">
                    {country?.shortDescription}
                  </p>
                 </Slide>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

Countries.propTypes = {};

export default Countries;
