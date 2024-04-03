import React, { useState } from "react";
import '../styles/style-componds/style-modal-nav.css';
function ModalNavHome({ showmodal }) {
  const [showSubMenue, setShowSubMenu] = useState(false);
  const funshowmenue = (index) => {
    setShowSubMenu(showSubMenue === false ? index : false);
  }



  return (
    <div className='modal-nav-home'>
      <div onClick={showmodal} className="pop"></div>
      <div className='absolute'>
        <div className="close">
          <i onClick={showmodal} className="fa-solid fa-circle-xmark"></i>
        </div>

        <div className="buttons">
          <div className="list-tile-top">
            <a href="#">login</a>
            <br></br>
            <br></br>
            <a href="#">sign up</a>
          </div>

          <div className={`list-tile ${showSubMenue !== "usd" && "close-pop"}`}>
            <div className="title">
              <a href="#">usd</a>
              <a href="#">
                <i onClick={() => { funshowmenue("usd") }} className={`fa-solid fa-angle-left ${showSubMenue === "usd" && "rotate"}`}></i>
              </a>
            </div>
            <div className="pop-menue">
              <a href="#">
                <i className="fa-solid fa-arrow-right-long"></i>
                eur
              </a>
              <br></br>
              <br></br>

              <a href="#">
                <i className="fa-solid fa-arrow-right-long"></i>
                jpy
              </a>
            </div>

          </div>

          <div className={`list-tile ${showSubMenue !== "lang" && "close-pop"}`}>
            <div className="title">
              <a href="#">
                <img src="assets\images\flag-en.png" alt="" />

                english
              </a>
              <a onClick={() => { funshowmenue("lang") }} href="#">
                <i className={`fa-solid fa-angle-left ${showSubMenue === "lang" && "rotate"}`}></i>
              </a>
            </div>
            <div className="pop-menue">
              <a href="#">
                <i className="fa-solid fa-arrow-right-long"></i>
                ar
              </a>
              <br></br>
              <br></br>

              <a href="#">
                <i className="fa-solid fa-arrow-right-long"></i>
                english
              </a>
            </div>

          </div>


          <div className={`list-tiel-btn ${showSubMenue !== "home-page" && "close-pop"}`}>
            <div className="list">
              <div className="flex">
                <p>home</p>
                <i onClick={() => { funshowmenue("home-page") }} className={`fa-solid fa-angle-left ${showSubMenue === "home-page" && "rotate"}`}></i>
              </div>
              <div className="pop-menue">
                <p>home page</p>
              </div>
              <div className="pop-menue">
                <p>home page</p>
              </div>
            </div>
          </div>



          <div className={`list-tiel-btn ${showSubMenue !== "tours-page" && "close-pop"}`}>
            <div className="list">
              <div className="flex">
                <p>tours</p>
                <i onClick={() => { funshowmenue("tours-page") }} className={`fa-solid fa-angle-left ${showSubMenue === "tours-page" && "rotate"}`}></i>
              </div>
              <div className="pop-menue">
                <p>home page</p>
              </div>
              <div className="pop-menue">
                <p>home page</p>
              </div>
            </div>
          </div>



          <div className={`list-tiel-btn ${showSubMenue !== "pages" && "close-pop"}`}>
            <div className="list">
              <div className="flex">
                <p>pages</p>
                <i onClick={() => { funshowmenue("pages") }} className={`fa-solid fa-angle-left ${showSubMenue === "pages" && "rotate"}`}></i>
              </div>
              <div className="pop-menue">
                <p>home page</p>
              </div>
              <div className="pop-menue">
                <p>home page</p>
              </div>
            </div>
          </div>


          <div className={`list-tiel-btn ${showSubMenue !== "destination-page" && "close-pop"}`}>
            <div className="list">
              <div className="flex">
                <p>Destination</p>
                <i onClick={() => { funshowmenue("destination-page") }} className={`fa-solid fa-angle-left ${showSubMenue === "destination-page" && "rotate"}`}></i>
              </div>
              <div className="pop-menue">
                <p>home page</p>
              </div>
              <div className="pop-menue">
                <p>home page</p>
              </div>
            </div>
          </div>


          <div className={`list-tiel-btn ${showSubMenue !== "magazines-page" && "close-pop"}`}>
            <div className="list">
              <div className="flex">
                <p>Magazines</p>
                <i onClick={() => { funshowmenue("magazines-page") }} className={`fa-solid fa-angle-left ${showSubMenue === "magazines-page" && "rotate"}`}></i>
              </div>
              <div className="pop-menue">
                <p>home page</p>
              </div>
              <div className="pop-menue">
                <p>home page</p>
              </div>
            </div>
          </div>
          <div className={`list-tiel-btn ${showSubMenue !== "concat-page" && "close-pop"}`}>
            <div className="list">
              <div className="flex">
                <p>concat</p>
                <i onClick={() => { funshowmenue("concat-page") }} className={`fa-solid fa-angle-left ${showSubMenue === "concat-page" && "rotate"}`}></i>
              </div>
              <div className="pop-menue">
                <p>home page</p>
              </div>
              <div className="pop-menue">
                <p>home page</p>
              </div>
            </div>
          </div>







        </div>



      </div>
    </div>
  );

}
export default React.memo(ModalNavHome);