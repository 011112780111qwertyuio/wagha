import React from "react";
import NavBarControl from "../componds/nav-bar-control";
import NavBarHome from "../componds/Nav-Bar-Home";
import '../styles/style-pages/login.css';
import SectionFotter from '../componds/fotter-home';
function Login() {

  return (
    <div className="login head">
      <NavBarControl />
      <NavBarHome />
      <div className="myform-input">
        <div className="form-div">
          <form>
            <p>Login</p>
            <div className="flex">
              <label>Username or email</label>
              <br></br>

              <input type="text" />
            </div>
            <div className="flex">
              <label>Password</label>
              <br></br>
              <input type="password" />
            </div>
            <div className="flex-btn">
              <button>Sign in</button>
              <div className="flex">
                <p>Do not have an account</p>
                <a href="">Register</a>
              </div>
            </div>

          </form>
        </div>
      </div>
      <SectionFotter />
    </div>
  );


}
export default Login;