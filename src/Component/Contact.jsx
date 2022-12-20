import React from "react";
import AddressMap from "./Common/Map/AddressMap";
import contactform from "../images/contact-bg.jpg";

const Contact = () => {
  return (
    <div className="lg:flex justify-center">
      <div className="lg:w-1/2 lg:mx-0 mx-3">
        <AddressMap />
      </div>
      <div
        className="lg:w-1/2 bg-cover sm:px-20 px-10 sm:py-20 py-10 lg:mx-0 mx-3 lg:my-0 my-3"
        style={{ backgroundImage: `url(${contactform})` }}
      >
        <div className="rounded-md bg-white  sm:px-10 px-3 py-10">
          <form id="contact" action="" method="post">
            <div className="lg:flex lg:justify-between mb-7">
              <input
                className="border-solid border border-inherit px-5 py-2 w-full lg:w-[48%] font-xs lg:mb-0 mb-7"
                name="name"
                type="text"
                id="name"
                placeholder="Your Name*"
                required=""
              />
              <input
                className="border-solid border border-inherit px-5 py-2 lg:w-[48%] font-xs w-full"
                name="email"
                type="text"
                id="email"
                pattern="[^ @]*@[^ @]*"
                placeholder="Your Email*"
                required=""
              />
            </div>
            <div className="mb-7">
              <input
                className="border-solid border border-inherit px-5 py-2 w-full font-xs "
                name="subject"
                type="text"
                id="subject"
                placeholder="Subject"
              />
            </div>
            <div className="mb-7">
              <textarea
                className="border-solid border border-inherit pl-5 pt-2 w-full font-xs"
                name="message"
                rows="6"
                id="message"
                placeholder="Message"
                required=""
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white bg-red-500 px-5 py-2.5 text-center"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
