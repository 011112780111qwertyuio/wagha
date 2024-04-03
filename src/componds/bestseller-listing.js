import React, { useState } from "react";
import '../styles/style-componds/bestseller-listing.css';
function BestsellerListing() {
  const [alldata, setalldata] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div className="bestseller-listing content">
      <p className="title"> Bestseller Listing </p>
      <p className="title-sub"> Hotel highly  rated for thoughtful design </p>
      <div className="flex-cards">
        {
          alldata.map((item) => (

            <div className="mycard">
              <div className="view">
                <img src="assets/images/img1.jpg" alt="" />
                <span><i className="fa-solid fa-heart"></i></span>
                <div className="flex-icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div className="flex-content">
                <p className="tile-content">Castello Casole Hotel</p>
                <div className="row">
                  <span>3.2/5 Average </span>

                  <label>-</label>
                  <p className="number">100000000</p>
                  <p>Reviews</p>
                </div>
                <div className="flex-salre">
                  <span>from</span>
                  <p>$3650999949</p>
                  <span>/night</span>
                </div>
              </div>
            </div>

          ))
        }

      </div>
    </div>
  );

}
export default React.memo(BestsellerListing);