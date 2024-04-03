import React from "react";
import '../styles/style-componds/section-comment.css';
function SectionComments() {

  return (
    <div className="section-comments">
      <div className="flex-tile">
        <p><span>3 tho</span> ughts on “Discovery Island Kayak Tour”</p>
      </div>
      <div className="flex-cards">
        <div className="leftt">
          <div className="img">
            <img src="assets/images/img1.jpg" alt=""/>
          </div>
        </div>
        <div className="right">
          <p className="name">ahmed elpahr</p>
          <p className="date">- February 8, 2023</p>
          <div className="flex">
            <div>
              <p>
                Quality
              </p>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div>
              <p>
                Location
              </p>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div>
              <p>
                Amenities
              </p>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div>
              <p>
                Services
              </p>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div>
              <p>
                Price
              </p>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
          </div>
          <div className="comment-user">
            <p>
              We always stay at here when in town. The location is great, staff is wonderful and we love the overall feel. Beautiful view from the here.

            </p>

          </div>
        </div>
      </div>

      <div className="flex-cards">
        <div className="leftt">
          <div className="img">
            <img src="assets/images/img1.jpg" alt=""/>
          </div>
        </div>
        <div className="right">
          <p className="name">yassen ahmed</p>
          <p className="date">- February 8, 2023</p>
          <div className="flex">
            <div>
              <p>
                Quality
              </p>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div>
              <p>
                Location
              </p>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div>
              <p>
                Amenities
              </p>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div>
              <p>
                Services
              </p>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div>
              <p>
                Price
              </p>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
          </div>
          <div className="comment-user">
            <p>
              We always stay at here when in town. The location is great, staff is wonderful and we love the overall feel. Beautiful view from the here.

            </p>

          </div>
        </div>
      </div>

    </div>
  );

}
export default React.memo(SectionComments);