import React from "react";
import '../styles/style-componds/section-review-scores.css';
function SectionReviewScores() {


  return (
    <div className="section-review-scores">
      <p className="title-rev">
        Review Scores
      </p>
      <div className="from-reviews">
        <div className="left">
          <div className="flex">
            <p className="title">4.27</p>
            <label>/5</label>
          </div>
          <p className="mytext"> Wonderful </p>
          <p className="sub-tile">3 verified reviews</p>
        </div>
        <div className="right">
          <div className="chiled">
            <div className="flex-chiled">
              <p>Quality</p>
              <span>4.33/5</span>
            </div>
            <div className="progres">
              <div style={{width:"80%"}} className="abso"></div>
            </div>
          </div>
          <div className="chiled">
            <div className="flex-chiled">
              <p>Location</p>
              <span>4/5</span>
            </div>
            <div className="progres">
              <div style={{width:"75%"}} className="abso"></div>

            </div>
          </div>
          <div className="chiled">
            <div className="flex-chiled">
              <p>Amenities</p>
              <span>4.33/5</span>
            </div>
            <div className="progres">
              <div style={{width:"86%"}} className="abso">

              </div>

            </div>
          </div>
          <div className="chiled">
            <div className="flex-chiled">
              <p>Services</p>
              <span>5/5</span>
            </div>
            <div className="progres">
              <div style={{width:"100%"}} className="abso">

              </div>
            </div>
          </div>
          <div className="chiled">
            <div className="flex-chiled">
              <p>Price</p>
              <span>3.67/5</span>
            </div>
            <div className="progres">
              <div style={{width:"50%"}} className="abso">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


}
export default SectionReviewScores;