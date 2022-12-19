import React from "react";
import Img1 from "../images/line-dec.png";
import Img2 from "../images/first-trainer.jpg";
import Img3 from "../images/second-trainer.jpg";
import Img4 from "../images/third-trainer.jpg";

const Schedule = () => {
  return (
    <>
      <div class="section" id="schedule">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="section-heading dark-bg">
                <h2>
                  Classes <em>Schedule</em>
                </h2>
                <img src={Img1} alt="" />
                <p>
                  Nunc urna sem, laoreet ut metus id, aliquet consequat magna.
                  Sed viverra ipsum dolor, ultricies fermentum massa consequat
                  eu.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="filters">
                <ul class="schedule-filter">
                  <li class="active" data-tsfilter="monday">
                    Monday
                  </li>
                  <li data-tsfilter="tuesday">Tuesday</li>
                  <li data-tsfilter="wednesday">Wednesday</li>
                  <li data-tsfilter="thursday">Thursday</li>
                  <li data-tsfilter="friday">Friday</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-10 offset-lg-1">
              <div class="schedule-table filtering">
                <table>
                  <tbody>
                    <tr>
                      <td class="day-time">Fitness Class</td>
                      <td class="monday ts-item show" data-tsmeta="monday">
                        10:00AM - 11:30AM
                      </td>
                      <td class="tuesday ts-item" data-tsmeta="tuesday">
                        2:00PM - 3:30PM
                      </td>
                      <td>William G. Stewart</td>
                    </tr>
                    <tr>
                      <td class="day-time">Muscle Training</td>
                      <td class="friday ts-item" data-tsmeta="friday">
                        10:00AM - 11:30AM
                      </td>
                      <td
                        class="thursday friday ts-item"
                        data-tsmeta="thursday"
                        data-tsmeta="friday"
                      >
                        2:00PM - 3:30PM
                      </td>
                      <td>Paul D. Newman</td>
                    </tr>
                    <tr>
                      <td class="day-time">Body Building</td>
                      <td class="tuesday ts-item" data-tsmeta="tuesday">
                        10:00AM - 11:30AM
                      </td>
                      <td class="monday ts-item show" data-tsmeta="monday">
                        2:00PM - 3:30PM
                      </td>
                      <td>Boyd C. Harris</td>
                    </tr>
                    <tr>
                      <td class="day-time">Yoga Training Class</td>
                      <td class="wednesday ts-item" data-tsmeta="wednesday">
                        10:00AM - 11:30AM
                      </td>
                      <td class="friday ts-item" data-tsmeta="friday">
                        2:00PM - 3:30PM
                      </td>
                      <td>Hector T. Daigle</td>
                    </tr>
                    <tr>
                      <td class="day-time">Advanced Training</td>
                      <td class="thursday ts-item" data-tsmeta="thursday">
                        10:00AM - 11:30AM
                      </td>
                      <td class="wednesday ts-item" data-tsmeta="wednesday">
                        2:00PM - 3:30PM
                      </td>
                      <td>Bret D. Bowers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ***** Testimonials Starts ***** --> */}
      <section class="section" id="trainers">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="section-heading">
                <h2>
                  Expert <em>Trainers</em>
                </h2>
                <img src={Img1} alt="" />
                <p>
                  Nunc urna sem, laoreet ut metus id, aliquet consequat magna.
                  Sed viverra ipsum dolor, ultricies fermentum massa consequat
                  eu.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="trainer-item">
                <div class="image-thumb">
                  <img src={Img2} alt="" />
                </div>
                <div class="down-content">
                  <span>Strength Trainer</span>
                  <h4>Bret D. Bowers</h4>
                  <p>
                    Bitters cliche tattooed 8-bit distillery mustache. Keytar
                    succulents gluten-free vegan church-key pour-over seitan
                    flannel.
                  </p>
                  <ul class="social-icons">
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="trainer-item">
                <div class="image-thumb">
                  <img src={Img3} alt="" />
                </div>
                <div class="down-content">
                  <span>Muscle Trainer</span>
                  <h4>Hector T. Daigl</h4>
                  <p>
                    Bitters cliche tattooed 8-bit distillery mustache. Keytar
                    succulents gluten-free vegan church-key pour-over seitan
                    flannel.
                  </p>
                  <ul class="social-icons">
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="trainer-item">
                <div class="image-thumb">
                  <img src={Img4} alt="" />
                </div>
                <div class="down-content">
                  <span>Power Trainer</span>
                  <h4>Paul D. Newman</h4>
                  <p>
                    Bitters cliche tattooed 8-bit distillery mustache. Keytar
                    succulents gluten-free vegan church-key pour-over seitan
                    flannel.
                  </p>
                  <ul class="social-icons">
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Testimonials Ends ***** --> */}
    </>
  );
};

export default Schedule;
