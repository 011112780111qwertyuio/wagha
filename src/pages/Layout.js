import React from "react";
import '../styles/style-pages/style-layout.css';
/* commponds import */
import NavBarHome from "../componds/Nav-Bar-Home";
import NavBarControl from "../componds/nav-bar-control";
import SectionHome from "../componds/section-home";
import SectionServes from "../componds/section-serves";
import BestsellerListing from "../componds/bestseller-listing";
import SectionOurbestPromotionTours from "../componds/section-ourbest-promotion-tours";
import SectionBoatListing from "../componds/section-boat-listing";
import SectionSeae from "../componds/section-seae";
import ReadTheLatestFromBlog from "../componds/read-the-latest-from-blog";
import SectionUser from "../componds/section-user";
import SectionTitle from "../componds/section-title";
import SectionSendInpox from "../componds/section-send-inpox";
import FotterHome from "../componds/fotter-home";
/* ---------------- */

function Layout() {


  return (
    <div className="head layout">
      <NavBarControl />
      <NavBarHome typepage={"home"} />
      <SectionHome />
      <SectionServes />
      <BestsellerListing />
      <SectionOurbestPromotionTours />
      <SectionBoatListing />
      <SectionSeae />
      <ReadTheLatestFromBlog />
      <SectionTitle />
      <SectionUser />
      <SectionSendInpox />
      <FotterHome />
    </div>
  );
}
export default Layout;