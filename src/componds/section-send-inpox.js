import React from "react";
import Mylogo from '../componds/Logo';
import '../styles/style-componds/section-send-inpox.css';
function SectionSendInpox() {



  return (
    <div className="section-send-inpox">


      <div className="content">

        <div className="card">

          <div className="card-flex-left">
            <div className="left">
              <Mylogo />
            </div>
            <div className="right">
              <p className="title">Get Updates & More</p>
              <p className="sub-tile">Thoughtful thoughts to your inbox</p>
            </div>
          </div>

          <div className="flex-search">
            <input type="text" placeholder="Your Email" />
            <p>SUBSCRIBE</p>
          </div>


        </div>

      </div>




    </div>
  )


}
export default SectionSendInpox;