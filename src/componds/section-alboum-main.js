import React, { useState } from "react";
import '../styles/style-componds/section-alboum-main.css';
function SectionAlboumMain({ title, subitel }) {
  const [countImages, setcountImages] = useState(0);
  const [albuoum, setalboum] = useState([
    {
      myimg: "assets/images/alboum/7.jpg",
    },
    {
      myimg: "assets/images/alboum/6.jpg",
    },
    {
      myimg: "assets/images/alboum/5.jpg",
    },
    {
      myimg: "assets/images/alboum/4.jpg",
    },
    {
      myimg: "assets/images/alboum/3.jpg",
    },
    {
      myimg: "assets/images/alboum/2.jpg",
    },
    {
      myimg: "assets/images/alboum/1.jpg",
    },
    {
      myimg: "assets/images/alboum/0.jpg",
    },

  ]);

  const startAlboum = async () => {

    if (await countImages === albuoum.length - 1) {
      setcountImages(0);
    }
    if (await countImages < albuoum.length - 1) {
      setcountImages(countImages + 1);

    }

  }
  setTimeout(async () => {
    await startAlboum();
  }, 3000)





  return (
    <div className="section-alboum-main head">
      <img src={albuoum[countImages].myimg} alt="" />
      <div className="flex content">
        <p onClick={startAlboum}>{title}</p>
        <div className="flexx">
          <a  href="/">home</a>
          <span>/</span>
          <a href="">{subitel}</a>
        </div>
      </div>
    </div>
  );
}
export default React.memo(SectionAlboumMain);