import React from "react";
import '../styles/style-componds/fotter-home.css';
function FotterHome() {

  return (
    <div className="fotter-home">
      <div className="content">
        <div className="flex-cards">

          <div className="section-1">
            <p className="title-section"> NEED HELP? </p>
            <div className="list-tile">
              <p className="sub-tile">Call Us </p>
              <p className="title">+2000050505</p>
            </div>
            <div className="list-tile">
              <p className="sub-tile"> Email for Us  </p>
              <p className="title"> hello@yoursite.com </p>
            </div>

            <div className="list-tile">
              <p className="sub-tile"> Follow Us  </p>
              <span><i className="fa-brands fa-facebook"></i></span>
              <span><i className="fa-brands fa-twitter"></i></span>
              <span><i className="fa-brands fa-youtube"></i></span>
            </div>

          </div>

          <div className="section-const">
            <p className="title-section">COMPANY </p>
            <div className="list-tile">
              <a className="title" href="">About Us</a>
            </div>
            <div className="list-tile">
              <a className="title" href="">Community Blog</a>
            </div>
            <div className="list-tile">
              <a className="title" href="">Rewards</a>
            </div>
            <div className="list-tile">
              <a className="title" href="">Work with Us</a>
            </div>
            <div className="list-tile">
              <a className="title" href="">Meet the Team</a>
            </div>
          </div>


          <div className="section-const">
            <p className="title-section">SUPPORT</p>
            <div className="list-tile">
              <a className="title" href="">Account</a>
            </div>
            <div className="list-tile">
              <a className="title" href="">Legal</a>
            </div>
            <div className="list-tile">
              <a className="title" href="">Contact</a>
            </div>
            <div className="list-tile">
              <a className="title" href="">Affiliate Program</a>
            </div>
            <div className="list-tile">
              <a className="title" href="">Privacy Policy</a>
            </div>
          </div>
          <div className="section-const">
            <p className="title-section">SETTINGS</p>
            <div className="list-tile">
              <a className="title" href="">Setting 1</a>
            </div>
            <div className="list-tile">
              <a className="title" href="">Setting 2</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
export default FotterHome;