import React from "react";
import AddressMap from "./Common/Map/AddressMap";
import contactform from "../images/contact-bg.jpg";

const Contact = () => {
  return (
    <div className=" flex justify-center ">
      <div className="w-1/2">
        <AddressMap />
      </div>
      <div
        className=" w-1/2 bg-cover px-20 py-20"
        style={{ backgroundImage: `url(${contactform})` }}
      >
        <div className="rounded-md bg-white  px-10 py-10">
          <form id="contact" action="" method="post">
            <div className="w-full flex justify-between mb-7">
              <input
                className="border-solid border border-inherit px-5 py-2 w-[48%] font-xs"
                name="name"
                type="text"
                id="name"
                placeholder="Your Name*"
                required=""
              />
              <input
                className="border-solid border border-inherit px-5 py-2 w-[48%] font-xs"
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
            <div className="text-white bg-red-500 px-5 py-2.5 w-1/4 text-center">
              <button type="submit" id="form-submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
