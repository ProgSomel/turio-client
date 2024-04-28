/* eslint-disable react/no-unescaped-entities */
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import SpotCard from "./SpotCard/SpotCard";
import Countries from "./Countries/Countries";
import { Fade, Slide } from "react-awesome-reveal";
import contactImg from "../../assets/images/contact/contact.jpg";
import reviewImg from "../../assets//images//reviews/review.jpg";
import { Pagination } from "swiper/modules";
import menLogo from "../../assets/icons/men.png"
import { CiStar } from "react-icons/ci";

import touristImg1 from "../../assets/images/tourists/tourist1.jpg";
import touristImg2 from "../../assets/images/tourists/tourist2.jpg";
import touristImg3 from "../../assets/images/tourists/tourist3.jpg";
import touristImg4 from "../../assets/images/tourists/tourist4.jpg";
import touristImg5 from "../../assets/images/tourists/tourist5.jpg";
import touristImg6 from "../../assets/images/tourists/tourist6.jpg";




// Import Swiper styles
import 'swiper/css/navigation';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/free-mode';
import { FreeMode} from 'swiper/modules';


//* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



const Home = () => {
  const spots = useLoaderData();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <Banner></Banner>

      <div>
        <div className="flex flex-col md:flex-row items-center gap-0  max-w-6xl mx-auto px-5 md:px-2 ">
          <div className="md:mt-8 flex-1">
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

      {/* Reviews By Clients  */}
      <div>
        <div
          className="relative bg-cover bg-center bg-no-repeat w-full "
          style={{
            backgroundImage: `url(${reviewImg})`,
            backgroundSize: "cover",
          }}
        >
          <div data-aos="fade-down ">
            <div className="text-white min-h-screen max-w-6xl mx-auto px-5 md:px-2 py-8   md:py-20">
             <Slide>
             <h1 className="text-3xl md:w-4/5 md:text-6xl  font-extrabold md:mb-8 text-white ">
                What Our Client Say About Us
              </h1>
             </Slide>

              <Slide>
              <p className="mb-6 w-3/4 md:mb-12 font-light lg:text-xl ">
                Discover what sets us apart from the rest through the words of
                our valued clients. At Turio, we prioritize customer
                satisfaction above all else.
              </p>
              </Slide>

              {/* review Card  */}
              <div data-aos="flip-left">
                <div className="">
                  
                  <div>
                    <Swiper
                      slidesPerView={2}
                      spaceBetween={30}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                      className="w-full max-w-6xl h-[800px] md:h-[400px] lg:h-[350px] mx-auto "
                    >
                      {reviews.map((review, idx) => (
                        <SwiperSlide className="" key={idx}>
                          <div className="">
                            <div className="bg-[#00224D] h-full  text-neutral-content flex justify-center hover:bg-white  hover:text-black hover:cursor-pointer">
                              <div className="card-body  text-gray-400  mt-5   text-center">
                                <p className="flex justify-center items-center text-red-400">
                                  {review.rating}{" "}
                                  <span className="text-orange-700 ">
                                    <CiStar />
                                  </span>{" "}
                                </p>

                                <Fade  cascade damping={1e-1}>
                                <p className=" md:text-2xl hover:text-black">{review.review}</p>
                                </Fade>
                                <Slide direction="up">
                                <div className="flex flex-col md:flex-row items-center gap-5 mt-5">
                                  <img
                                    className="w-[70px]"
                                    src={menLogo}
                                    alt=""
                                  />
                                  <div>
                                    <p className="text-2xl font-bold">
                                      {review.name}
                                    </p>
                                    <p>{review.occupation}</p>
                                  </div>
                                </div>
                                </Slide>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


        {/* image slider  */}
        <div className="mt-8 md:mt-16 mb-12">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className="h-[150px] md:h-[250px] rounded-md" src={touristImg1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[150px] md:h-[250px] rounded-md" src={touristImg2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[150px] md:h-[250px] rounded-md" src={touristImg3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[150px] md:h-[250px] rounded-md" src={touristImg4} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[150px] md:h-[250px] rounded-md" src={touristImg5} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[150px] md:h-[250px]" src={touristImg6} alt="" /></SwiperSlide>
        
      </Swiper>
        </div>

    </div>
  );
};

Home.propTypes = {};

export default Home;
