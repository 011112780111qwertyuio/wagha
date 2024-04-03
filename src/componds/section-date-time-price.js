import React from "react";
import '../styles/style-componds/section-date-time-price.css';
function SectionDateTimePrice() {


  return (
    <div className="section-date-time-price">
      <p className="title-price">Calendar & Price</p>
      <div className="form-date">
        <div className="nav">
          <div>
            <p>man</p>
          </div>
          <div>
            <p>tue</p>
          </div>
          <div>
            <p>wed</p>
          </div>
          <div>
            <p>thu</p>
          </div>
          <div>
            <p>fri</p>
          </div>
          <div>
            <p>sat</p>
          </div>
          <div>
            <p>sun</p>
          </div>
        </div>
        <div className="flex-between">
          <span><i className="fa-solid fa-angle-left"></i></span>
          <p>welcome</p>
          <span><i className="fa-solid fa-angle-right"></i></span>
        </div>
<div className="flex-btns">
  
</div>


      </div>
    </div>
  )

}
export default React.memo(SectionDateTimePrice);