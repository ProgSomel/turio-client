/* eslint-disable react/no-unescaped-entities */
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import banner1 from "../../../assets/images/banner/banner1.jpg";
import banner2 from "../../../assets/images/banner/banner2.jpg";
import banner3 from "../../../assets/images/banner/banner3.jpg";
import { Fade, Slide } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className="mb-20 relative ">
      <AwesomeSlider className="h-full   ">
        <div className="relative bg-cover bg-center bg-no-repeat w-full " style={{ backgroundImage: `url(${banner1})`, backgroundSize: 'cover'}}>
          <div data-aos="fade-down ">
          <div className="text-white text-center p-4  md:p-0">
            <p className="text-xl md:text-2xl lg:text-3xl">COME TO EXPERIENCE IN TURIO</p>
            <h1 className="text-2xl md:text-5xl lg:text-9xl font-extrabold md:mb-8 text-green-600 ">KEEP TRAVEL ON </h1>
            <h2 className="text-2xl md:text-3xl lg:text-7xl font-extrabold md:mb-8 text-orange-600 ">CALM & TRAVEL</h2>
            <p className="mb-6 md:mb-12 font-bold lg:text-xl w-full  lg:w-1/2 lg:mx-auto">Embark on unforgettable adventures with our premier tourist management services.
            </p>
            <div className="pb-12 md:pb-0">
            <button className="btn bg-green-600 hover:bg-green-800 border-none text-white font-bold ">Explore Now</button>
            </div>
            
          </div>
          </div>
        </div>
        <div className="relative bg-cover bg-center bg-no-repeat w-full" style={{ backgroundImage: `url(${banner2})`, backgroundSize: 'cover' }}>
        <div data-aos="fade-down">
        <div className="text-white text-center p-4  md:p-0">
            <Slide>
            <p className="text-xl md:text-2xl lg:text-3xl">COME TO EXPERIENCE IN TURIO</p>
            </Slide>
           <Slide>
           <h1 className="text-2xl md:text-5xl lg:text-9xl font-extrabold md:mb-8 text-green-600 ">KEEP TRAVEL ON </h1>
           </Slide>
            <h2 className="text-2xl md:text-3xl lg:text-7xl font-extrabold md:mb-8 text-orange-600 ">CALM & TRAVEL</h2>
            <p className="mb-6 md:mb-12 font-bold lg:text-xl w-full  lg:w-1/2 lg:mx-auto">Embark on unforgettable adventures with our premier tourist management services.
            </p>
            <div className="pb-12 md:pb-0">
            <button className="btn bg-green-600 hover:bg-green-800  border-none text-white font-bold ">Explore Now</button>
            </div>
            
          </div>
          </div>
        </div>


        <div className="relative bg-cover bg-center bg-no-repeat w-full" style={{ backgroundImage: `url(${banner3})`, backgroundSize: 'cover' }}>
        <div data-aos="fade-down">
        <div className="text-white text-center p-4  md:p-0">
            <p className="text-xl md:text-2xl lg:text-3xl">COME TO EXPERIENCE IN TURIO</p>
            <h1 className="text-2xl md:text-5xl lg:text-9xl font-extrabold md:mb-8 text-green-600 ">KEEP TRAVEL ON </h1>
            <h2 className="text-2xl md:text-3xl lg:text-7xl font-extrabold md:mb-8 text-orange-600 ">CALM & TRAVEL</h2>
            <Fade delay={1e3} cascade damping={1e-1} className="mb-6 md:mb-12 font-bold lg:text-xl w-full  lg:w-1/2 lg:mx-auto">Embark on unforgettable adventures with our premier tourist management services.
            </Fade>
            <div className="pb-12 md:pb-0">
            <button className="btn bg-green-600 hover:bg-green-800  border-none text-white font-bold ">Explore Now</button>
            </div>
            
          </div>
          </div>
        </div>
       
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
