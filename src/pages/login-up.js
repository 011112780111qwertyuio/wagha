import React from "react";
import NavparHome from '../componds/Nav-Bar-Home';
import NavparControl from '../componds/nav-bar-control';
import '../styles/style-pages/login-up.css';
import SectionFotter from '../componds/fotter-home';
function LoginUp() {
  return (
    <>
      <NavparControl />
      <NavparHome />
      <div className="login-up head">
        <div className="flex-content content">
          <div className="left">
            <img src="assets/images/userr.jpg" alt="" />
            <div className="flex-btn">
              <p className="title">Already a member </p>
              <a href="" className="btn">Login</a>
            </div>
          </div>
          <div className="right">
            <form method="get">
              <p className="title">Create a free account</p>
              <p className="sub-tile"> A few clicks away from creating your account</p>
              <div className="flex">
                <div className="leftt">
                  <label> Username* </label>
                  <br></br>
                  <input type="text" />
                  <br></br>
                  <br></br>

                  <label> First name* </label>
                  <br></br>
                  <input type="text" />
                  <br></br>
                  <br></br>

                  <label> Your email* </label>
                  <br></br>
                  <input type="text" />
                </div>
                <div className="rightt">
                  <label> Last name* </label>
                  <br></br>
                  <input type="text" />
                  <br></br>
                  <br></br>

                  <label> Confirm email*</label>
                  <br></br>
                  <input type="text" />
                </div>
              </div>
              <div className="column">
                <p> A password will be emailed to you. </p>
                <button>Signup</button>
              </div>
            </form>



          </div>
        </div>
      </div>
      <SectionFotter />

    </>

  )

}
export default LoginUp;