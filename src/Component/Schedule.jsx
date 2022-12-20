import React from "react";
import Img1 from "../images/line-dec.png";
import Img2 from "../images/first-trainer.jpg";
import Img3 from "../images/second-trainer.jpg";
import Img4 from "../images/third-trainer.jpg";

const Schedule = () => {
  return (
    <>
      <div className=" flex items-center " id="schedule">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading dark-bg">
              <h2>
                classNamees <em>Schedule</em>
              </h2>
              <img src={Img1} alt="" />
              <p>
                Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
                viverra ipsum dolor, ultricies fermentum massa consequat eu.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="filters">
              <ul className="schedule-filter">
                <li className="active" data-tsfilter="monday">
                  Monday
                </li>
                <li data-tsfilter="tuesday">Tuesday</li>
                <li data-tsfilter="wednesday">Wednesday</li>
                <li data-tsfilter="thursday">Thursday</li>
                <li data-tsfilter="friday">Friday</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-10 offset-lg-1">
            <div className="schedule-table filtering">
              <table>
                <tbody>
                  <tr>
                    <td className="day-time">Fitness className</td>
                    <td className="monday ts-item show" data-tsmeta="monday">
                      10:00AM - 11:30AM
                    </td>
                    <td className="tuesday ts-item" data-tsmeta="tuesday">
                      2:00PM - 3:30PM
                    </td>
                    <td>William G. Stewart</td>
                  </tr>
                  <tr>
                    <td className="day-time">Muscle Training</td>
                    <td className="friday ts-item" data-tsmeta="friday">
                      10:00AM - 11:30AM
                    </td>
                    <td
                      className="thursday friday ts-item"
                      data-tsmeta="thursday"
                      data-tsmeta="friday"
                    >
                      2:00PM - 3:30PM
                    </td>
                    <td>Paul D. Newman</td>
                  </tr>
                  <tr>
                    <td className="day-time">Body Building</td>
                    <td className="tuesday ts-item" data-tsmeta="tuesday">
                      10:00AM - 11:30AM
                    </td>
                    <td className="monday ts-item show" data-tsmeta="monday">
                      2:00PM - 3:30PM
                    </td>
                    <td>Boyd C. Harris</td>
                  </tr>
                  <tr>
                    <td className="day-time">Yoga Training className</td>
                    <td className="wednesday ts-item" data-tsmeta="wednesday">
                      10:00AM - 11:30AM
                    </td>
                    <td className="friday ts-item" data-tsmeta="friday">
                      2:00PM - 3:30PM
                    </td>
                    <td>Hector T. Daigle</td>
                  </tr>
                  <tr>
                    <td className="day-time">Advanced Training</td>
                    <td className="thursday ts-item" data-tsmeta="thursday">
                      10:00AM - 11:30AM
                    </td>
                    <td className="wednesday ts-item" data-tsmeta="wednesday">
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
      {/* <!-- ***** Testimonials Starts ***** --> */}
      <section className="section" id="trainers">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
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
          <div className="row">
            <div className="col-lg-4">
              <div className="trainer-item">
                <div className="image-thumb">
                  <img src={Img2} alt="" />
                </div>
                <div className="down-content">
                  <span>Strength Trainer</span>
                  <h4>Bret D. Bowers</h4>
                  <p>
                    Bitters cliche tattooed 8-bit distillery mustache. Keytar
                    succulents gluten-free vegan church-key pour-over seitan
                    flannel.
                  </p>
                  <ul className="social-icons">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="trainer-item">
                <div className="image-thumb">
                  <img src={Img3} alt="" />
                </div>
                <div className="down-content">
                  <span>Muscle Trainer</span>
                  <h4>Hector T. Daigl</h4>
                  <p>
                    Bitters cliche tattooed 8-bit distillery mustache. Keytar
                    succulents gluten-free vegan church-key pour-over seitan
                    flannel.
                  </p>
                  <ul className="social-icons">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="trainer-item">
                <div className="image-thumb">
                  <img src={Img4} alt="" />
                </div>
                <div className="down-content">
                  <span>Power Trainer</span>
                  <h4>Paul D. Newman</h4>
                  <p>
                    Bitters cliche tattooed 8-bit distillery mustache. Keytar
                    succulents gluten-free vegan church-key pour-over seitan
                    flannel.
                  </p>
                  <ul className="social-icons">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-behance"></i>
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
