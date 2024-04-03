import React from "react";
import '../styles/style-pages/style-open-card-tour-page.css';
import NavBarHome from '../componds/Nav-Bar-Home';
import NavBarControl from '../componds/nav-bar-control';
import SliderImages from "../componds/slider-images";
import SectionTileOpenCardTour from "../componds/section-tile-open-card-tour";
import SectionTileReviwos from "../componds/section-tile-reviwos";
import DitelsOpenCardTour from '../componds/ditels-open-card-tour';
import BookingForm from '../componds/boking-form';
import SectionMinuteDeals from '../componds/section-Minute-Deals';
import SectionTourPlan from "../componds/section-tour-plan";
import SectionLocation from "../componds/section-location";
import SectionDateTimePrice from "../componds/section-date-time-price";
import SliderCardsTour from "../componds/slider-cards-tour";
import SectionReviewScores from "../componds/section-review-scores";
import SectionComments from "../componds/section-comments";
import SectionSendComment from "../componds/section-send-comment";
import FotterHome from "../componds/fotter-home";

function OpenCardTourPage() {
  return (
    <>
      <NavBarControl />
      <NavBarHome />
      <div className="head open-card-tour">
        <SliderImages />
        <SectionTileOpenCardTour />
        <SectionTileReviwos />
        <div className="border"></div>
        <div className="content">
          <div className="flex-sections">

            <div className="left">
              <DitelsOpenCardTour />
              <SectionTourPlan />
              <SectionLocation />
              <SectionDateTimePrice />
              <SliderCardsTour />
              <SectionReviewScores />
              <SectionComments />
              <SectionSendComment />
            </div>
            <div className="right">
              <BookingForm />
              <SectionMinuteDeals />
            </div>
          </div>
        </div>
        <FotterHome />
      </div>
    </>

  );
}
export default OpenCardTourPage;