import React, { useState, useRef } from "react";
import Loading from '../componds/loading';
import '../styles/style-componds/slider-cards-tour.css';
function SliderCardsTour() {



  const [isloading, setisloading] = useState(false);
  const alldatacard = [
    {
      id: "1",
      title: "Cottages In The Middle Of Beach",
      location: "egypt",
      fromsalry: "$100.00",
      countDay: "3 days",
      viewFrind: 5,
      off: "10% OFF",
      imgView: "assets/images/img1.jpg"
    },
    {
      id: "2",
      title: "cairo",
      location: "egypt",
      fromsalry: "$10.00",
      countDay: "3 days",
      viewFrind: 5,
      off: "10% OFF",
      imgView: "assets/images/img2.jpg"
    },
    {
      id: "3",
      title: "Giza",
      location: "cairo",
      fromsalry: "$100.00",
      countDay: "3 days",
      viewFrind: 5,
      off: "10% OFF",
      imgView: "assets/images/sea1.jpg"
    },
    {
      id: "4",
      title: "Cottages In The Middle Of Beach",
      location: "egypt",
      fromsalry: "$100.00",
      countDay: "3 days",
      viewFrind: 5,
      off: "10% OFF",
      imgView: "assets/images/sea2.jpg"
    },
    {
      id: "5",
      title: "Cottages In ",
      location: "egypt",
      fromsalry: "$100.00",
      countDay: "10 days",
      viewFrind: 5,
      off: "",
      imgView: "assets/images/sea3.jpg"
    },
    {
      id: "6",
      title: "Cottages In The Middle Of Beach",
      location: "egypt",
      fromsalry: "$1000.00",
      countDay: "3 days",
      viewFrind: 5,
      off: "",
      imgView: "assets/images/sea4.jpg"
    },

  ];

  const sliderImages = useRef();
  const myToggle = (val) => {
    const diraction = val === "left" ? -1 : 1;
    const scrollAmount = sliderImages.current.clientWidth * diraction;
    sliderImages.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }

  if(isloading===true){
    <Loading />
  }
  if (isloading === false) {
    return (
      <div className="slider-cards-tour">
        <div className="slider-cards">
          <div ref={sliderImages} className="flex-cards">

            {
              alldatacard.map((item) => (

                <div key={item.id} className="mycard">
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
                        <span><i className="fa-solid fa-camera"></i></span>
                        <span><i className="fa-solid fa-video"></i></span>
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
              ))
            }



          </div>
          <div className="flex-btn">
            <div onClick={() => { myToggle('left') }} className="btn-left">
              <span><i className="fa-solid fa-chevron-left"></i></span>
            </div>
            <div onClick={() => { myToggle('right') }} className="btn-right">
              <span><i className="fa-solid fa-chevron-right"></i></span>
            </div>
          </div>
        </div>


      </div>
    )
  }
}
export default React.memo(SliderCardsTour)