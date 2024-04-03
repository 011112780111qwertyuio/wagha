import React, { useState } from "react";
import '../styles/style-pages/magazines.css';
import NavprHome from '../componds/Nav-Bar-Home';
import NavparControl from '../componds/nav-bar-control';
import SectionAlboumMain from '../componds/section-alboum-main';
import CardMagazines from "../componds/card-magazines";
import SectionBoster from '../componds/boster-explore';
import Fotter from '../componds/fotter-home';
function Magazines() {

  const [alldata, setalldata] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <>
      <NavparControl />
      <NavprHome typepage={"Magazines"} />
      <SectionAlboumMain title={"Magazines"} subitel={"Magazines"} />
      <div className="magazines head">
        <div className="flex-cards content">
          {
            alldata.map((item) => (
              <div key={item} className="mycard">
                <CardMagazines />
              </div>

            ))
          }

        </div>

      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <SectionBoster />
<Fotter />
    </>
  )
}
export default Magazines;