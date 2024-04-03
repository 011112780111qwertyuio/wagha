import React, { useState } from "react";
import '../styles/style-componds/nav-bar-control.css';
function NavBarControl() {
  const [valMU, setvalMU] = useState("hide");
  const [valLang, setvalLang] = useState("hide");
  const funopenu = () => {
    setvalMU(valMU === "hide" ? "" : "hide");
  }
  const funopenlang = () => {
    setvalLang(valLang === "hide" ? "" : "hide");
  }




  return (
    <div className="nav-control">

      <div className="content flex">
        <div className="flex-left">
          <a className="face" href="">
            f
          </a>
          <a className="in" href="">in</a>
          <a className="g" href="">g+</a>
          <a href="">ahmedpahr99@gmail.com</a>
        </div>
        <div className="flex-right">
          <div className="btn">
            <a onClick={funopenu} href="#">
              USD
              <i className="fa-solid fa-chevron-down"></i>
            </a>
            <div className={`sub-menue-usd ${valMU}`}>
              <div>EUR</div>
              <div>gpy</div>

            </div>
          </div>

          <div className="bt-img btn">

            <a onClick={funopenlang} href="#">
              <img src="assets\images\uk-flag.gif" alt=""/>

              english
              <i className="fa-solid fa-chevron-down"></i>
            </a>

            <div className={`sub-menue-lang ${valLang}`}>
              <ul>
                <li>
                  <a href="">ar</a>
                </li>
                <li>
                  <a href="">italiano</a>
                </li>
                <li>
                  <a href="">chinese</a>
                </li>
                <li>
                  <a href="">bosanski</a>
                </li>
              </ul>

            </div>

          </div>
          <div className="btn">
            <a href="/login">login</a>


          </div>
          <div className="btn">
            <a href="/loginup">sign up</a>

          </div>
        </div>

      </div>



    </div>
  );
}
export default React.memo(NavBarControl);