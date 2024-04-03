import React, { useState } from "react";
import '../styles/style-componds/section-home.css';
import TableSection from "./table-section";
function SectionHome() {
  const [numberitem, setnumeritem] = useState(0);
  const [dataimages, setdataimages] = useState([
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg"
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
    <div className="section-home">
      <div className="section-image">
        <img src={`assets/images/alboum/${dataimages[numberitem]}`} alt=""/>
      </div>
      <div className="content content-section">
        <p className="title">hi there!</p>
        <p className="sub-title">where would you like to go?</p>
      </div>
      <TableSection />
    </div>
  );

}
export default React.memo(SectionHome);