import React from "react";
import Img1 from "../images/line-dec.png";
import Img2 from "../images/schedule-bg.jpg";
import StrengthTrainer from "../images/first-trainer.jpg";
import MuscleTrainer from "../images/second-trainer.jpg";
import PowerTrainer from "../images/third-trainer.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";

const Schedule = () => {
  const expectTrainers = [
    {
      heading: "Strength Trainer",
      title: "Bret D. Bowers",
      description:
        "Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.",
      img: StrengthTrainer,
    },
    {
      heading: "Muscle Trainer",
      title: "Hector T. Daigl",
      description:
        "Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.",
      img: MuscleTrainer,
    },
    {
      heading: "Power Trainer",
      title: "Paul D. Newman",
      description:
        "Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.",
      img: PowerTrainer,
    },
  ];
  return (
    <>
      <div
        style={{ backgroundImage: `url(${Img2})` }}
        className="py-36 bg-center bg-no-repeat bg-cover"
      >
        <div className="sm:container w-full mx-auto">
          <div className="">
            <div className="font-extrabold text-3xl tracking-wider text-center font-sans text-white">
              Classes
              <em className="text-red-500 not-italic font-sans">Schedule</em>
            </div>
            <div className="my-5 flex	justify-center">
              <img src={Img1} alt="waves" />
            </div>
            <div className="text-sm	leading-6	text-gray-500 sm:max-w-md text-center mx-auto font-sans text-white">
              Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
              viverra ipsum dolor, ultricies fermentum massa consequat eu.
            </div>
            <div className="mt-20">
              <ul className="text-center">
                <li className="mr-3 text-white cursor-pointer inline">
                  Monday /
                </li>
                <li className="mr-3 text-white cursor-pointer inline">
                  Tuesday /
                </li>
                <li className="mr-3 text-white cursor-pointer inline">
                  Wednesday /
                </li>
                <li className="mr-3 text-white cursor-pointer inline">
                  Thursday /
                </li>
                <li className="mr-3 text-white cursor-pointer inline">
                  Friday{" "}
                </li>
              </ul>
            </div>
            <div className="mt-10 sm:mx-20 mx-5">
              <table className="border border-white w-full">
                <tr className="border-b">
                  <td className="h-24 border-r text-center text-white font-medium	text-sm tracking-wide">
                    Fitness Class
                  </td>
                  <td className="h-24 border-r text-center text-white font-medium	text-sm tracking-wide">
                    10:00AM - 11:30AM
                  </td>
                  <td className="h-24 border-r text-center text-white font-medium	text-sm tracking-wide">
                    2:00PM - 3:30PM
                  </td>
                  <td className="h-24 border-r text-center text-white font-medium	text-sm tracking-wide">
                    William G. Stewart
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="h-24 border-r text-center text-white font-medium	text-sm tracking-wide">
                    Muscle Training
                  </td>
                  <td className="h-24 border-r text-center text-white font-medium	text-sm tracking-wide">
                    10:00AM - 11:30AM
                  </td>
                  <td className="h-24 border-r text-center text-white font-medium	text-sm tracking-wide">
                    2:00PM - 3:30PM
                  </td>
                  <td className="h-24 border-r text-center text-white font-medium	text-sm tracking-wide">
                    Paul D. Newman
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="h-24 border-r text-center text-white font-medium	text-sm tracking-wide">
                    Body Building
                  </td>
                  <td className="h-24 border-r text-center text-white font-medium	text-sm tracking-wide">
                    10:00AM - 11:30AM
                  </td>
                  <td className="h-24 border-r text-center text-white font-medium	text-sm tracking-wide">
                    2:00PM - 3:30PM
                  </td>
                  <td className="h-24 border-r text-center text-white font-medium	text-sm tracking-wide">
                    Boyd C. Harris
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="h-24 border-r text-center text-white font-medium	text-sm tracking-wide">
                    Yoga Training Class
                  </td>
                  <td className="h-24 border-r text-center text-white font-medium	text-sm tracking-wide">
                    10:00AM - 11:30AM
                  </td>
                  <td className="h-24 border-r text-center text-white font-medium	text-sm tracking-wide">
                    2:00PM - 3:30PM
                  </td>
                  <td className="h-24 border-r text-center text-white font-medium	text-sm tracking-wide">
                    Hector T. Daigle
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="h-24 border-r text-center text-white font-medium	text-sm tracking-wide">
                    Advanced Training
                  </td>
                  <td className="h-24 border-r text-center text-white font-medium	text-sm tracking-wide">
                    10:00AM - 11:30AM
                  </td>
                  <td className="h-24 border-r text-center text-white font-medium	text-sm tracking-wide">
                    2:00PM - 3:30PM
                  </td>
                  <td className="h-24 border-r text-center text-white font-medium	text-sm tracking-wide">
                    Bret D. Bowers
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* < ------------------------- Expert Trainers ------------------- > */}
      <div className="sm:container mx-auto w-full">
        <div className="mt-36 mb-20">
          <div className="font-extrabold text-3xl tracking-wider text-center font-sans">
            Expert
            <em className="text-red-500 not-italic	font-sans	">TRAINERS</em>
          </div>
          <div className="my-5 flex	justify-center">
            <img src={Img1} alt="waves" />
          </div>
          <div className="text-sm	leading-6	text-gray-500 sm:max-w-md text-center mx-auto font-sans">
            Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
            viverra ipsum dolor, ultricies fermentum massa consequat eu.
          </div>
        </div>
        <div className="sm:flex justify-center mb-20">
          {expectTrainers.map((iteam) => (
            <div className="sm:max-w-xs p-9 drop-shadow shadow-neutral-200 rounded-md bg-white mx-3 sm:mt-0 mt-5">
              <div>
                <img src={iteam.img} alt="" />
              </div>
              <div className="font-medium mt-5 text-sm text-red-500">
                {iteam.heading}
              </div>
              <div className="text-xl	font-semibold mt-2.5">{iteam.title}</div>
              <div className="mt-5 text-sm leading-6 text-gray-500">
                {iteam.description}
              </div>
              <div className="mt-5">
                <ul className="flex">
                  <li className="mr-3 cursor-pointer hover:text-red-500">
                    <FaFacebookF />
                  </li>
                  <li className="mr-3 cursor-pointer hover:text-red-500">
                    <FaTwitter />
                  </li>
                  <li className="mr-3 cursor-pointer hover:text-red-500">
                    <FaLinkedinIn />
                  </li>
                  <li className="mr-3 cursor-pointer hover:text-red-500">
                    <FaBehance />
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Schedule;
