import React from "react";
import Video from "../images/gym-video.mp4";
import Header from "./Common/Header/Header";
const Home = () => {
  return (
    <>
      {/* <!-- ***** Main Banner Area Start ***** --> */}
      <Header />
      <div className="relative -mt-20">
        <video autoplay muted loop id="bg-video">
          <source src={Video} type="video/mp4" />
        </video>

        <div className=" h-full w-full flex justify-center absolute top-0 bg-gray-600 bg-opacity-60">
          <div className=" text-center absolute top-1/3">
            <h6 className=" text-lg text-white uppercase  font-sans font-extrabold ">
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
    </>
  );
};

export default Home;
