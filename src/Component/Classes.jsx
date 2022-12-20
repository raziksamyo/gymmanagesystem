import React from "react";
import Img1 from "../images/line-dec.png";
import Img2 from "../images/tabs-first-icon.png";
import FirstTraining from "../images/training-image-01.jpg";
import SecondTraining from "../images/training-image-02.jpg";
import ThirdTraining from "../images/training-image-03.jpg";
import FourthTraining from "../images/training-image-04.jpg";

const Classes = () => {
  const dataTraining = [
    {
      title: "First Training Class",
    },
    {
      title: "Second Training Class",
    },
    {
      title: "Third Training Class",
    },
    {
      title: "Fourth Training Class",
    },
  ];
  return (
    <div className="sm:container w-full mx-auto">
      <div className="my-36">
        <div className="font-extrabold text-3xl tracking-wider text-center font-sans">
          Our <em className="text-red-500 not-italic font-sans	">Classes</em>
        </div>
        <div className="my-5 flex	justify-center">
          <img src={Img1} alt="waves" />
        </div>
        <div className="text-sm	leading-6	text-gray-500 sm:max-w-md text-center mx-auto font-sans">
          Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
          viverra ipsum dolor, ultricies fermentum massa consequat eu.
        </div>

        <div className="md:flex mt-20">
          <div className="md:w-1/3 justify-center px-5 mx-auto">
            {dataTraining.map((iteam) => (
              <div className="mb-8">
                <a className="p-7 bg-neutral-50	drop-shadow shadow-white rounded text-lg font-semibold cursor-pointer flex">
                  <div>
                    <img src={Img2} alt="" />
                  </div>
                  <div className="ml-5 tracking-wider">{iteam.title}</div>
                </a>
              </div>
            ))}
            <div className="px-5 py-7 text-center bg-red-500 font-semibold	text-xl text-white	rounded cursor-pointer">
              View All Schedules
            </div>
          </div>
          <div className="md:w-2/3 justify-center px-5 mx-auto md:mt-0 mt-5">
            <img src={FirstTraining} alt="" className="rounded w-full" />
            <div className="my-5 font-bold text-2xl	tracking-wider">
              First Training Class
            </div>
            <p className="w-fit text-gray-500 text-sm">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Aenean ultrices elementum odio
              ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum
              commodo et.
            </p>
            <button className="text-center bg-red-500 py-3 px-5 font-normal rounded cursor-pointer text-sm uppercase text-white mt-7">
              View Schedule
            </button>

            {/*  Second Training  */}
            {/* <img src={SecondTraining} alt="" className="rounded w-full" />
            <div className="my-5 font-bold text-2xl	tracking-wider">
              First Training Class
            </div>
            <p className="w-fit text-gray-500 text-sm">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Aenean ultrices elementum odio
              ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum
              commodo et.
            </p>
            <button className="text-center bg-red-500 py-3 px-5 font-normal rounded cursor-pointer text-sm uppercase text-white mt-7">
              View Schedule
            </button> */}

            {/* Third Training */}
            {/* <img src={ThirdTraining} alt="" className="rounded w-full" />
            <div className="my-5 font-bold text-2xl	tracking-wider">
              First Training Class
            </div>
            <p className="w-fit text-gray-500 text-sm">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Aenean ultrices elementum odio
              ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum
              commodo et.
            </p>
            <button className="text-center bg-red-500 py-3 px-5 font-normal rounded cursor-pointer text-sm uppercase text-white mt-7">
              View Schedule
            </button> */}

            {/* Fourth Training */}
            {/* <img src={FourthTraining} alt="" className="rounded w-full" />
            <div className="my-5 font-bold text-2xl	tracking-wider">
              First Training Class
            </div>
            <p className="w-fit text-gray-500 text-sm">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Aenean ultrices elementum odio
              ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum
              commodo et.
            </p>
            <button className="text-center bg-red-500 py-3 px-5 font-normal rounded cursor-pointer text-sm uppercase text-white mt-7">
              View Schedule
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
