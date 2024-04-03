import React from "react";
import '../styles/style-componds/section-send-comment.css';
function SectionSendComment() {


  return (
    <div className="section-send-comment">
      <p className="title">
        <span>add a</span>
        Comment
      </p>
      <p className="sub-tile">Your email address will not be published.
      </p>
      <div className="flex-cards">

        <div className="le">
          <div>
            <p>Quality</p>
            <span>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </span>
          </div>
          <div>
            <p>Location</p>
            <span>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </span>
          </div>

          <div>
            <p>Amenities</p>
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
        <div className="ri">
          <div>
            <p>3.60</p>
            <span>Average Rating</span>
          </div>
        </div>


      </div>
      <div className="from-input">
        <div className="flex-input">
          <input type="text" placeholder="Your Name *" />
          <input type="text" placeholder="Email *" />

        </div>
        <div className="area">
          <textarea placeholder="Write Your Comment"></textarea>
        </div>
        <div className="flex-checked">
          <input type="checkbox" id="1" />
          <label htmlFor="1">Save my name, email, and website in this browser for the next time I comment.</label>
        </div>
        <p className="btn">Post Comment</p>


      </div>





    </div>
  )

}
export default React.memo(SectionSendComment);