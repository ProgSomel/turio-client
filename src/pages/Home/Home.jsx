/* eslint-disable react/no-unescaped-entities */
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import SpotCard from "./SpotCard/SpotCard";
import Countries from "./Countries/Countries";
import { Slide } from "react-awesome-reveal";
import contactImg from "../../assets/images/contact/contact.jpg";

const Home = () => {
  const spots = useLoaderData();

  return (
    <div>
      <Banner></Banner>

      <div>
        <div className="flex flex-col md:flex-row items-center gap-0  max-w-6xl mx-auto px-5 md:px-2 ">
          <div className="md:mt-12 flex-1">
            <Slide>
              <h1 className="get text-center md:text-left text-green-800  ">
                Perfect For You
              </h1>
            </Slide>

            <Slide>
              <h1 className="text-6xl font-bold text-center md:text-left">
                Popular Tour Package
              </h1>
            </Slide>
            <Slide className="md:w-1/2  my-5 font-light text-center md:text-left">
              Discover the allure of our most sought-after tour packages,
              meticulously crafted to cater to every traveler's dream. Whether
              you crave the excitement of urban escapades, the serenity of
              coastal retreats, or the adventure of off-the-beaten-path
              exploration, our curated selection has something for everyone.
            </Slide>
          </div>

          <Slide direction="right" className="mb-4 md:mb-4 ">
            <Link className="w-full" to="/allTouristsSpot">
              <button className="text-white bg-green-600 px-2 py-2 font-bold">
                View All Tour
              </button>
            </Link>
          </Slide>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-5 md:px-2 gap-12 mt-4">
          {spots?.slice(0, 6).map((spot) => (
            <SpotCard key={spot._id} spot={spot}></SpotCard>
          ))}
        </div>
      </div>

      <div>
        <Countries></Countries>
      </div>

      {/* Sunscribe Section  */}
      <div className="my-12">
        <div
          className="relative bg-cover bg-center bg-no-repeat w-full py-12"
          style={{
            backgroundImage: `url(${contactImg})`,
            backgroundSize: "cover",
          }}
        >
          <div data-aos="fade-down ">
            <div className="text-white text-center p-4  md:p-0">
              <Slide>
                <h1 className="text-2xl md:text-5xl lg:text-7xl font-extrabold md:mb-8 text-green-600 ">
                  <span className="text-white ">
                    Get 20% OFF Your <br /> First
                  </span>
                  TRIP!{" "}
                </h1>
              </Slide>

              <Slide>
                <p className="mb-6 md:mb-12 font-bold lg:text-xl w-full  lg:w-1/2 lg:mx-auto">
                  Don’t Wanna Miss Somethings? Subscribe Right Now & Get The
                  Special Discount & Monthly Newsletter.
                </p>
              </Slide>

              <Slide>
              <div className="join md:w-2/4">
                <input
                  className="input input-bordered join-item w-full"
                  placeholder="Your email address"
                />
                <button className="btn join-item bg-green-500 text-white border-none font-bold">
                  Subscribe
                </button>
              </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
