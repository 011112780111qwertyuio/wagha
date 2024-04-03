import React from "react";
import '../styles/style-componds/definition-of-journey.css';
import NavparControl from '../componds/nav-bar-control';
import NavparHome from '../componds/Nav-Bar-Home';
import CardTrip from "../componds/card-trip";
import BosterExplore from '../componds/boster-explore';
import Fotter from '../componds/fotter-home';
function DefinitionOfJourney() {
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

  return (
    <>
      <NavparControl />
      <NavparHome />
      <div className="definition-of-journey head">
        <div className="flex content">
          <div className="left">
            <div className="img">
              <img src="assets/images/img1.jpg" alt=""/>
            </div>
          </div>
          <div className="right">
            <p className="title">المملكة العربية السعودية</p>
            <p className="sub-prg">
              Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem Ipsum. Proin gravida nibh vel velit auctor aliqueenean sollicitudin, lorem quis bibendum auctor consequat.
            </p>
            <div className="table">
              <div className="flex-table">
                <div className="left-table">
                  <p>Country</p>
                </div>
                <div className="right-table">
                  <p>Italy</p>
                </div>
              </div>

              <div className="flex-table">
                <div className="left-table">
                  <p>Languages Spoken</p>
                </div>
                <div className="right-table">
                  <p>Italian, English</p>
                </div>
              </div>

              <div className="flex-table">
                <div className="left-table">
                  <p>Visa Requirements</p>
                </div>
                <div className="right-table">
                  <p>Personal Documents Requied</p>
                </div>
              </div>
              <div className="flex-table">
                <div className="left-table">
                  <p>Area (km2)</p>
                </div>
                <div className="right-table">
                  <p>88.000 km2</p>
                </div>
              </div>



            </div>
          </div>
        </div>
        <div className="content flex-cards">
          {
            alldatacard.map((item) => (
              <CardTrip item={item} />

            ))
          }
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <BosterExplore />
      <br></br>
      <br></br>
      <Fotter />
    </>

  )

}
export default DefinitionOfJourney;