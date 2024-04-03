import React, { useState } from "react";
import '../styles/style-componds/section-tile-reviows.css';
function SectionTileReviwos() {
  const [togglereviow, settogglereviow] = useState('hidden');
  const funtogglereviow = () => {
    settogglereviow(togglereviow === "hidden" ? "" : "hidden");
  }
  return (
    <div className="head tile-reviwos">
      <div className="flex-tile-revi content">
        <div className="left">
          <div className="stars">
            <span><i className="fa-solid fa-star"></i></span>
            <span><i className="fa-solid fa-star"></i></span>
            <span><i className="fa-solid fa-star"></i></span>
            <span><i className="fa-solid fa-star"></i></span>
            <span><i className="fa-solid fa-star"></i></span>

          </div>
          <p>4.13 by reviews</p>
        </div>
        <div className="right">
          <div className="mycard">
            <div onClick={funtogglereviow} className="flex">
              <span><i className="fa-solid fa-share"></i></span>
              <label>SHARE</label>
            </div>
            <div className={`pop-menue ${togglereviow}`}>
              <div>
                <span><i className="fa-brands fa-facebook-f"></i></span>
              </div>
              <div>
                <span><i className="fa-brands fa-twitter"></i></span>
              </div>
              <div>
                <p>in</p>
              </div>
              <div>
                <p>t</p>
              </div>
            </div>
          </div>
          <div className="mycard">
            <div className="flex">
              <span><i className="fa-solid fa-share"></i></span>
              <label>REVIEWS</label>
            </div>
          </div>
          <div className="mycard">
            <div className="flex">
              <span><i className="fa-regular fa-heart"></i></span>
              <p>WISHLIST</p>
            </div>

          </div>
        </div>
      </div>



    </div>
  );

}
export default React.memo(SectionTileReviwos);