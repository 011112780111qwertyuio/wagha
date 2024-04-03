import React, { useRef } from "react";
import '../styles/style-componds/slider-images.css';
function SliderImages() {
  const sliderImages = useRef();
  const myToggle = (val) => {
    const diraction = val === "left" ? -1 : 1;
    const scrollAmount = sliderImages.current.clientWidth * diraction;
    sliderImages.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }



  return (
    <div className="slider-images">
      <div ref={sliderImages} className="flex-cards">

        <div className="mycard">
          <img alt="" src="assets/images/img1.jpg" />
        </div>
        <div className="mycard">
          <img alt="" src="assets/images/img2.jpg" />
        </div>
        <div className="mycard">
          <img alt="" src="assets/images/img1.jpg" />
        </div>
        <div className="mycard">
          <img alt="" src="assets/images/img1.jpg" />
        </div>
        <div className="mycard">
          <img alt="" src="assets/images/img1.jpg" />
        </div>
        <div className="mycard">
          <img alt="" src="assets/images/img1.jpg" />
        </div>
        <div className="mycard">
          <img alt="" src="assets/images/img1.jpg" />
        </div>
        <div className="mycard">
          <img alt="" src="assets/images/img1.jpg" />
        </div>
        <div className="mycard">
          <img alt="" src="assets/images/img1.jpg" />
        </div>
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
  )

}
export default React.memo(SliderImages);