import React from "react";
import Video from "../images/gym-video.mp4";
import Header from "./Common/Header/Header";
const Home = () => {
  return (
    <>
      <Header />
      {/* <!-- ***** Main Banner Area Start ***** --> */}
      <div className="relative" id="top">
        <video autoplay muted loop id="bg-video">
          <source src={Video} type="video/mp4" />
        </video>

        <div className=" w-full flex justify-center absolute top-0">
          <div className=" text-center absolute top-48 border-solid border-1 border-red-600">
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
