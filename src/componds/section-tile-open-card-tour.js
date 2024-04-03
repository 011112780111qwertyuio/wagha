import React from "react";
import '../styles/style-componds/section-tile-open-card-tour.css';
function SectionTileOpenCardTour() {




  return (
    <div className="section-tile-open-card-tour">
      <div className="content flex">

        <div className="left">
          <p className="title">
            Cottages In The Middle Of Beach
          </p>
          <div className="flex-text">
            <span><i className="fa-solid fa-location-dot"></i></span>
            <p>
              Main Street, Brooklyn, NY
            </p>
          </div>
        </div>


        <div className="right">
          <div className="mycard">
            <div>
              <i className="fa-solid fa-file-invoice-dollar"></i>
            </div>
            <div className="column">
              <p className="sub-tile">From</p>
              <p className="price">$109.00</p>
            </div>
          </div>
          <div className="mycard">
            <div>
              <i className="fa-regular fa-clock"></i>
            </div>
            <div className="column">
              <p className="sub-tile">Duration</p>
              <p className="price">3 days</p>
            </div>
          </div>
          <div className="mycard">
            <div>
              <i className="fa-solid fa-plane"></i>
            </div>
            <div className="column">
              <p className="sub-tile">Tour Type</p>
              <p className="price">Tent Camping</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );

}
export default SectionTileOpenCardTour;