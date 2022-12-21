import React from "react";
import Img1 from "../images/line-dec.png";
import Img2 from "../images/features-first-icon.png";
import Img3 from "../images/cta-bg.jpg";

const About = () => {
  const data = [
    {
      title: "Basic Fitness",
      description:
        "Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.",
    },
    {
      title: "Advanced Muscle Course",
      description:
        "You may want to browse through Digital Marketing Corporate HTML CSS templates on our website.",
    },

    {
      title: "Advanced Muscle Course",
      description:
        "You may want to browse through Digital Marketing Corporate HTML CSS templates on our website.",
    },
    {
      title: "Advanced Muscle Course",
      description:
        "You may want to browse through Digital Marketing Corporate HTML CSS templates on our website.",
    },
    {
      title: "Advanced Muscle Course",
      description:
        "You may want to browse through Digital Marketing Corporate HTML CSS templates on our website.",
    },
    {
      title: "Advanced Muscle Course",
      description:
        "You may want to browse through Digital Marketing Corporate HTML CSS templates on our website.",
    },
  ];
  return (
    <div id="features">
      <div className="sm:container mx-auto w-full">
        <div className="mt-36 mb-20">
          <div className="font-extrabold text-3xl tracking-wider text-center font-sans">
            CHOOSE <em className="text-red-500 not-italic	font-sans	">PROGRAM</em>
          </div>
          <div className="my-5 flex	justify-center">
            <img src={Img1} alt="waves" />
          </div>
          <div className="text-sm	leading-6	text-gray-500 sm:max-w-md text-center mx-auto font-sans">
            Training Studio is free CSS template for gyms and fitness centers.
            You are allowed to use this layout for your business website.
          </div>

          <div className="md:grid md:grid-cols-2 md:mx-0 mx-5">
            {data.map((iteam) => (
              <div className="mt-20">
                <div className="md:tw-col-span-1">
                  <div className="flex">
                    <div>
                      <img src={Img2} alt="" className="max-w-none mt-1.5" />
                    </div>
                    <div className="ml-7">
                      <div className="mb-2 tracking-wide text-lg font-semibold font-sans">
                        {iteam.title}
                      </div>
                      <div className="text-sm	leading-6	text-gray-500 font-sans sm:max-w-md">
                        {iteam.description}
                      </div>
                      <div className="mt-2 text-sm font-medium text-orange-500 cursor-pointer	">
                        <a href="#">Discover More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${Img3})` }} className="py-32">
        <div className="container mx-auto">
          <div className=" text-center text-white font-extrabold text-4xl	font-sans uppercase">
            Don’t <em className="text-red-500 not-italic">think</em>, begin
            <em className="text-red-500 not-italic">today</em>!
          </div>
          <div className="text-center font-sans text-white max-w-4xl	mx-auto my-6">
            Ut consectetur, metus sit amet aliquet placerat, enim est ultricies
            ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris
            a nisi luctus imperdiet.
          </div>
          <div className="text-center">
            <a
              href="#our-classes"
              className="text-sm	bg-red-500 p-4 font-normal text-white"
            >
              Become a member
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
