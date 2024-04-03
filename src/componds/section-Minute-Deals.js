import React from "react";
import '../styles/style-componds/section-minute-deals.css';
function SectionMinuteDeals() {

  return (
    <div className="section-minute-deals">
    <p className="title-add">Last Minute Deals</p>
    <div className="flex-add">
      <div className="avtar">
        <img alt="" src="assets/images/img1.jpg" />
      </div>
      <div className="flex-cont">
        <div className="icons">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <p className="mytile">Walking the Amalfi Coast</p>
        <p className="sub-tile">
          From <label>$129.00</label>
        </p>
      </div>
    </div>

    <div className="flex-add">
      <div className="avtar">
        <img alt="" src="assets/images/img1.jpg" />
      </div>
      <div className="flex-cont">
        <div className="icons">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <p className="mytile">Walking the Amalfi Coast</p>
        <p className="sub-tile">
          From <label>$129.00</label>
        </p>
      </div>
    </div>
    <div className="flex-add">
      <div className="avtar">
        <img alt="" src="assets/images/img1.jpg" />
      </div>
      <div className="flex-cont">
        <div className="icons">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <p className="mytile">Walking the Amalfi Coast</p>
        <p className="sub-tile">
          From <label>$129.00</label>
        </p>
      </div>
    </div>


  </div>

  );

}
export default React.memo(SectionMinuteDeals);