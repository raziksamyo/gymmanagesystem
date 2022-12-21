import React from "react";
import Video from "../images/pexels-tima-miroshnichenko-5319099.mp4";
import Header from "./Common/Header/Header";
const Home = () => {
  return (
    <div id="home">
      {/* <!-- ***** Main Banner Area Start ***** --> */}
      <Header />
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute min-w-full min-h-screen max-w-full max-h-screen object-cover -z-10"
        >
          <source src={Video} type="video/mp4" />
        </video>

        <div className=" h-full w-full flex items-center justify-center top-0 bg-gray-600 bg-opacity-60">
          <div className="text-center mt-20 lg:mt-0">
            <h6 className=" text-lg text-white uppercase  font-sans font-extrabold">
              work harder, get stronger
            </h6>
            <h2 className=" text-7xl mt-7 mb-6 text-white uppercase  font-sans font-extrabold ">
              easy with our <em className="text-red-500 not-italic">gym</em>
            </h2>
            <div className="main-button scroll-to-section">
              <a
                href="#features"
                className="px-5 py-3 text-white bg-red-500 uppercase cursor-pointer text-sm font-sans font-normal"
              >
                Become a member
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ***** Main Banner Area End ***** --> */}
    </div>
  );
};

export default Home;
