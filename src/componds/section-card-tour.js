import React, { useState } from "react";
import '../styles/style-componds/section-tour-card.css';
import CardTrip from "./card-trip";
import Loading from "./loading";
function SectionTour() {
  const [togelepop, settogelepop] = useState(false);
  const [isloading, setisloading] = useState(false);
  const opentoglepop = () => {
    settogelepop(togelepop === false ? true : false);
  }
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
    <div className="head section-tour-card">
      {isloading &&
        <Loading />
      }
      {isloading === false &&
        <div className="content">
          <div className="nav-title">
            <div className="left">
              <span>12</span>
              <p>Tours</p>
            </div>
            <div className="flex-right">
              <div className="flex">
                <p>Sort by</p>
                <span><i className="fa-solid fa-arrow-down-9-1"></i></span>
              </div>
              <div className="menue-pop">
                <div onClick={opentoglepop} className="flex-tile">
                  <p>Price</p>
                  {togelepop === true ?
                    <i className="fa-solid fa-angle-up"></i> :
                    <span><i className="fa-solid fa-angle-down"></i></span>

                  }
                </div>
                {togelepop &&
                  <div className="menue">
                    <p>Tile</p>
                    <p>Pric</p>
                    <p>Rating</p>
                    <p>Avaliability date</p>
                  </div>
                }




              </div>
            </div>


          </div>
          <div className="flex-cards">

            {
              alldatacard.map((item) => (
                <CardTrip item={item} />

              ))
            }
          </div>
          <div className="flex-btn">
            <p>1</p>
            <p>2</p>
            <div>
              <p>Next</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
export default React.memo(SectionTour);