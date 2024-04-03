import React, { useState } from "react";
import '../styles/style-componds/table-section.css';
function TableSection() {
  const [istoggle, settoggle] = useState(false);
  const funopentoggle = (index) => {

    settoggle(istoggle === false ? index : false);

  }


  return (
    <div className="tabel-section">
      <div className="flex-cards">

        <div onClick={() => { funopentoggle('1') }} className='mycard'>
          <div className="flex-left">
            <div className="img">
              <span><i className="fa-solid fa-location-dot"></i></span>
            </div>
            <div className="content-card">
              <p className="tile-color-sub">Location</p>
              <p className="title">Locations</p>
            </div>

          </div>
          {istoggle === '1' ?
            <span><i className="fa-solid fa-angle-up"></i></span>

            :
            <span><i className="fa-solid fa-angle-down"></i></span>

          }



          <div className={`sub-menue ${istoggle === '1' ? "toggle-block" : "toggle-hidden"} `}>
            <p className="sub-tile">-Location-</p>
            <p>asia</p>
            <p className="sub-tile">japan</p>
            <p className="sub-tile">ddsds</p>
            <p>europe</p>
            <p className="sub-tile">france</p>
            <p className="sub-tile">italy</p>
          </div>



        </div>




        <div onClick={() => { funopentoggle('2') }} className="mycard">
          <div className="flex-left">
            <div className="img">
              <span><i className="fa-solid fa-location-dot"></i></span>
            </div>
            <div className="content-card">
              <p className="tile-color-sub">Type</p>
              <p className="title">Boking Type</p>
            </div>

          </div>
          {istoggle === '2' ?
            <span><i className="fa-solid fa-angle-up"></i></span>

            :
            <span><i className="fa-solid fa-angle-down"></i></span>

          }




          {istoggle === '2' &&
            <div className="sub-menue">
              <p className="sub-left">-Booking Type-</p>
              <p className="sub-left">Adventur</p>
              <p className="sub-left">Beache</p>
              <p className="sub-left">Discovery</p>
              <p className="sub-left">Mountain Biking</p>
              <p className="sub-left">Tent Comping</p>

            </div>

          }



        </div>



        <div onClick={() => { funopentoggle('3') }} className="mycard">
          <div className="flex-left">
            <div className="img">
              <span><i className="fa-solid fa-calendar-days"></i></span>
            </div>
            <div className="content-card">
              <p className="tile-color-sub">Date From</p>
              <p className="title">Date from</p>
            </div>

          </div>
          {istoggle === '3' ?
            <span><i className="fa-solid fa-angle-up"></i></span>

            :
            <span><i className="fa-solid fa-angle-down"></i></span>

          }



          {istoggle === "3" &&

            <div className="sub-menue-datetime">
              <div className="dt-card">

              </div>
              <div className="flex">
                <p>Cancel</p>
                <p>Apply</p>
              </div>

            </div>
          }


        </div>



        <div onClick={() => { funopentoggle('4') }} className="mycard">
          <div className="flex-left">
            <div className="img">
              <span><i className="fa-solid fa-user"></i></span>
            </div>
            <div className="content-card">
              <p className="tile-color-sub">Guests</p>
              <p className="title">0</p>
            </div>

          </div>
          {istoggle === '4' ?
            <span><i className="fa-solid fa-angle-up"></i></span>

            :
            <span><i className="fa-solid fa-angle-down"></i></span>

          }
          {
            istoggle === '4' &&

            <div className="sub-menue-guests">

              <div className="card-flex">
                <div className="left">
                  <p>2</p>
                  <span>Children</span>
                </div>
                <div className="flex-right">
                  <p>-</p>
                  <p>+</p>
                </div>
              </div>

              <div className="card-flex">
                <div className="left">
                  <p>2</p>
                  <span>Youth</span>
                </div>
                <div className="flex-right">
                  <p>-</p>
                  <p>+</p>
                </div>
              </div>

              <div className="card-flex">
                <div className="left">
                  <p>2</p>
                  <span>Adult</span>
                </div>
                <div className="flex-right">
                  <p>-</p>
                  <p>+</p>
                </div>
              </div>



              <div className="btn-center">
                <p>Apply</p>
              </div>




            </div>
          }




        </div>


        <div className="filter">
          <span><i className="fa-solid fa-filter"></i></span>
        </div>


        <div className="search-mobile">
          <div className="flex">
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
            <p>Search</p>
          </div>

        </div>




      </div>
      <div className="search">
        <span><i className="fa-solid fa-magnifying-glass"></i></span>
        <p>Search</p>
      </div>

    </div>

  );

}
export default TableSection;