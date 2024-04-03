import React from "react";
import '../styles/style-componds/section-explore-world.css';
function SectionExploreWorld() {
  let count = [0, 1, 2, 3, 4, 5];
  return (
    <div className="section-explore-world">
      <div className="flex content">
        <div className="center">
          <p className="bt">Destination lists</p>
          <p className="title"> Explore Destinations </p>
        </div>
        <div className="flex-cards">
          {
            count.map((item) => (

              <div onClick={()=>{window.location.href="definition-of-journey"}} key={item} className="card">
                <div className="view">
                  <img src="assets/images/img1.jpg" alt=""/>
                  <p>3 tours</p>
                </div>
                <div className="flex-content">
                  <div className="left">
                    <p className="sub-tile">travel to</p>
                    <p className="title">المملكة العربية السعودية</p>
                  </div>
                  <div className="right">
                    <div className="btn">
                      <span><i className="fa-solid fa-angle-right"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )


}
export default SectionExploreWorld;