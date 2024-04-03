import React from "react";
import '../styles/style-componds/card-trip.css';
function CardTrip({ item }) {

  return (
    <div key={item.id} className="card-trip">
      <div onClick={(eo) => { window.open('/opencard-tour-page') }} className="myimg">
        <div className="flex">
          <div>
            {item.off !== '' &&
              <p className="off">{item.off}</p>

            }
            <p>FEATURED</p>

          </div>
          <span>
            <i className="fa-regular fa-heart"></i>
          </span>
        </div>

        <img src={item.imgView} alt=""/>
      </div>
      <div className="content">
        <div className="flex-top">
          <div className="left">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="right">
            <span><i class="fa-solid fa-camera"></i></span>
            <span><i class="fa-solid fa-video"></i></span>
          </div>
        </div>
        <div className="secnd-title">
          <p>{item.title}</p>
          <div className="flex-location">
            <span><i className="fa-solid fa-location-dot"></i></span>
            <p>{item.location}</p>
          </div>
          <div className="flex-from">
            <span><i className="fa-solid fa-hand-holding-dollar"></i></span>
            <p>From</p>
            <label>{item.fromsalry}</label>
          </div>
          <div className="flex-fotter">
            <div className="left">
              <span><i className="fa-regular fa-clock"></i></span>
              <p>{item.countDay}</p>
              <span><i className="fa-solid fa-user-group"></i></span>
              <label>{item.viewFrind}</label>
            </div>
            <div className="right">
              <p>Explore</p>
              <span><i className="fa-solid fa-arrow-right"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  )

}
export default CardTrip;