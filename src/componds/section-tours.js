import React, { useState } from "react";
import TableSection from '../componds/table-section';
import '../styles/style-componds/section-tours.css';
function SectionTours() {
  const [numberitem, setnumeritem] = useState(0);
  const [dataimages, setdataimages] = useState([
    "tour1.jpg",
    "tour2.jpg",
    "tour3.jpg",
    "tour4.jpg",
    "tour5.jpg",
  ]);
  const startalbom = async () => {
    if (await numberitem < dataimages.length - 1) {
      await setnumeritem(numberitem + 1);
    }
    if (await numberitem === dataimages.length - 1) {
      await setnumeritem(0);
    }
  }
  setTimeout(() => {
    startalbom();
  }, 5000);
  return (
    <div className="section-tours">
      <div className="section-image">
        <img src={`assets/images/alboum/${dataimages[numberitem]}`} alt="" />
      </div>
      <div className="content content-section">
        <p className="title">Explore The Worlds</p>
        <p className="sub-title">People Don’t Take, Trips Take People</p>
      </div>
      <TableSection />
    </div>
  );

}
export default React.memo(SectionTours);