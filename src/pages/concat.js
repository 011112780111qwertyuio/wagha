import React from "react";
import '../styles/style-componds/concat.css';
import NavparControl from '../componds/nav-bar-control';
import NavparHome from '../componds/Nav-Bar-Home';
import SectionFotter from '../componds/fotter-home';
import BosterExplore from "../componds/boster-explore";
import SectionAlboumMain from "../componds/section-alboum-main";
function ConCat() {

  return (
    <div className="concat head ">
      <NavparControl />
      <NavparHome typepage={"concat"} />
      {/* start sectio albom */}

      <SectionAlboumMain title={"Concat"} subitel={"Concat"} />
      {/* stop section albom */}
      {/* start section content */}
      <div className="section-cotnent content">
        <p className="btn">concat us</p>
        <p className="tile">Ready to Get our best Services! Feel free to contact with us</p>
        <div className="flex-cards">
          <div className="mycard">
            <span><i className="fa-solid fa-location-dot"></i></span>
            <p className="title"> Office Location </p>
            <p className="sub-title"> 55 Main Street</p>
            <p className="sub-title">2nd Floor New York </p>

          </div>

          <div className="mycard">
            <span><i className="fa-solid fa-envelope"></i></span>
            <p className="title"> Email Address </p>
            <p className="sub-title"> contact@example.com</p>
            <p className="sub-title"> info@example.com </p>

          </div>

          <div className="mycard">
            <span><i className="fa-solid fa-phone"></i></span>
            <p className="title">Hotline</p>
            <p className="sub-title"> +1 (307) 776-0608</p>
            <p className="sub-title"> 666 8888 000 </p>

          </div>


        </div>
      </div>
      {/* stop sectio content */}
      {/* section send comment */}
      <div className="content section-send">
        <div className="flex">
          <div className="left">
            <p className="btn">Contact with us</p>
            <p className="tile">Have questions? Feel free to write us</p>
            <p className="sub-tile">Man braid hell of edison bulb four brunch subway tile authentic, chillwave put a bird on church-key ramps heirloom. Set perspiciatis unde omnis estenatus voluptatem aperiae.</p>
            <div className="flex-icons">
              <span><i className="fa-brands fa-facebook-f"></i></span>
              <span><i className="fa-brands fa-twitter"></i></span>
              <span><i className="fa-brands fa-instagram"></i></span>
              <span><i className="fa-brands fa-linkedin-in"></i></span>
            </div>
          </div>
          <div className="right">
            <div className="inputs">
              <div>
                <input type="text" placeholder="Your Name" />

              </div>
              <div>
                <input type="text" placeholder="Email Address" />

              </div>
              <div>
                <input type="text" placeholder="Phone Number" />

              </div>
              <div>
                <input type="text" placeholder="Subject" />

              </div>
            </div>


            <div className="area">
              <textarea placeholder="Write message"></textarea>

            </div>
            <p className="btn-send">Send a Message</p>
          </div>
        </div>
      </div>
      {/* stop section send comment */}
      {/* start section location */}
      <div className="section-location head">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
        <div className="content">
          <BosterExplore />

        </div>
      </div>
      {/* stop sectio location */}
      <SectionFotter />
    </div>
  );
}
export default ConCat;