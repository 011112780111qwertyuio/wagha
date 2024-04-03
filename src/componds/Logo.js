import React from "react";
import '../styles/style-componds/style-logo.css';
function Logo() {

  return (
    <div onClick={() => { window.location.href = "/" }} className="flex-logo">
      <div className="logo">
        <img src="assets\images\logo.png" className="img-log" alt="" />
      </div>
      <div className="column">
        <p className="title">WJHTK</p>
        <p className="sub-title">.COM</p>
      </div>
    </div>
  );

}
export default Logo;