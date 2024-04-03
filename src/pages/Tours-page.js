import React from "react";
import NavBarHome from "../componds/Nav-Bar-Home";
import NavBarControl from "../componds/nav-bar-control";
import FotterHome from "../componds/fotter-home";
import SectionTours from "../componds/section-tours";
import SectionCardTour from "../componds/section-card-tour";
import SectionTourPoster from "../componds/section-tour-poster";
function ToursPage() {



  return (
    <div className="head tours">
      <NavBarControl />
      <NavBarHome typepage={"tours"} />
      <SectionTours />
      <SectionCardTour />
      <SectionTourPoster />
      <FotterHome />
    </div>
  );

}
export default ToursPage;