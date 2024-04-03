import React from "react";
import '../styles/style-componds/section-tour-poster.css';
function SectionTourPoster() {
  return (
    <div className="section-tour-poster head">
      <div className="content flex">
        <div className="img">
          <img src="assets/images/img1.jpg" alt=""/>
          <p>Gowilds is providing the best solution by our experts</p>
        </div>

        <div className="right">
          <p className="top-butn">Company introduction</p>
          <p className="larg-tile">Great opportunity for</p>
          <p className="larg-tile">adventure & travels</p>
          <p className="subitle">
            COMMITTED TO PROVIDING OUR CUSTOMERS WITH EXCEPTIONAL SERVICE.
          </p>
          <p className="sub-content">
            There are many variations of passages of lorem free market to available, but the majority have alteration in some form, by injected humour, or randomised words
          </p>

          <div className="progres">
            <div className="flex-title">
              <p className="tile">Saticfied Clients</p>
              <p className="num">82%</p>
            </div>
            <div className="myprog">
              <div></div>
            </div>
          </div>

          <div className="avatar-content">
            <div className="left">
              <img src="assets/images/img1.jpg" alt=""/>
            </div>
            <div className="right-content">
              <div className="cont">
                <p className="title">Aleesha brown</p>
                <p className="sub-tile">CEO & CO Founder</p>
              </div>
              <div className="btn">
                <p>Discover More</p>
              </div>
              
            </div>
            
          </div>


        </div>

      </div>

    </div>
  );
}

export default SectionTourPoster;