import React from "react";
import '../styles/style-componds/destination.css';
import NavBarHome from "../componds/Nav-Bar-Home";
import NavBarControl from "../componds/nav-bar-control";
import SectionAlboumMain from "../componds/section-alboum-main";
import SectionExploreWrold from '../componds/section-explore-world';
import BosterExplore from "../componds/boster-explore";
import Fotter from '../componds/fotter-home';
function Destination() {


  return (
    <>
      <NavBarControl />
      <NavBarHome typepage={"destination"} />
      <div className="destination">
        <SectionAlboumMain title={"Explore The Worlds"} subitel={"destination"} />
        <SectionExploreWrold />
        <br></br>
        <br></br>
        <BosterExplore />
        <br></br>
        <Fotter />
      </div>
    </>
  );

}
export default Destination;
