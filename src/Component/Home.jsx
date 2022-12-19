import React from "react";
import Vidoes from "../images/gym-video.mp4";
const Home = () => {
  return (
    <>
      <div class="header-area header-sticky">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="main-nav">
                <a href="index.html" class="logo">
                  Training<em> Studio</em>
                </a>

                <ul class="nav">
                  <li class="scroll-to-section">
                    <a href="#top" class="active">
                      Home
                    </a>
                  </li>
                  <li class="scroll-to-section">
                    <a href="#features">About</a>
                  </li>
                  <li class="scroll-to-section">
                    <a href="#our-classes">Classes</a>
                  </li>
                  <li class="scroll-to-section">
                    <a href="#schedule">Schedules</a>
                  </li>
                  <li class="scroll-to-section">
                    <a href="#contact-us">Contact</a>
                  </li>
                  <li class="main-button">
                    <a href="#">Sign Up</a>
                  </li>
                </ul>
                <a class="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ***** Main Banner Area Start ***** --> */}
      <div class="main-banner" id="top">
        <video autoplay muted loop id="bg-video">
          <source src={Vidoes} type="video/mp4" />
        </video>

        <div class="video-overlay header-text">
          <div class="caption">
            <h6>work harder, get stronger</h6>
            <h2>
              easy with our <em>gym</em>
            </h2>
            <div class="main-button scroll-to-section">
              <a href="#features">Become a member</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ***** Main Banner Area End ***** --> */}
    </>
  );
};

export default Home;
