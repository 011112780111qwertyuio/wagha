import React from "react";
import '../styles/style-componds/section-serves.css';
function SectionServes() {



  return (
    <div className="section-serves content">

      <div className="flex-cards">

        <div className="card">
          <p className="butn">HOLIDAY SALE</p>
          <div className="content-card">
            <p className="title">special offers</p>
            <p className="content-text">
              Find Your Perfect Hotels
              Get the best
              prices on 20,000+ properties
              the best prices on              </p>
            <p className="btn-dealis">see dealis</p>
          </div>
        </div>


        <div className="card-2">
          <i className="fa-regular fa-envelope"></i>
          <div className="content-card">
            <p className="title">Newsletters</p>
            <p className="content-text">
              Join for free and get our
              tailored newsletters full of
              hot travel deals.
            </p>
            <p className="btn-dealis">sign up</p>
          </div>
        </div>



        <div className="card-3">
          <i className="fa-solid fa-cannabis"></i>   
            <div className="content-card">
            <p className="title">Travel Tips</p>
            <p className="content-text">
              Tips from our travel experts to
              make your next trip even
              better.

            </p>
            <p className="btn-dealis">see dealis</p>
          </div>
        </div>





      </div>
    </div>


  )

}
export default React.memo(SectionServes);