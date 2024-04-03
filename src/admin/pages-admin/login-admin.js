import React from "react";
import LogoWeb from '../../componds/Logo';
import '../../admin-styles/pages-admin/login-admin.css';
function LoginInAdmin() {

  return (
    <div className="login-admin head">

      <div className="form">

        <div className="content-form">
          <div className="logo">
            <LogoWeb />
          </div>
          <form method="get" >
            <p className="title">تسجيل دخول لوحة تحكم</p>
            <input type="text" placeholder="الايميل" />
            <br></br>
            <input type="password" placeholder="الباسورد" />
            <br></br>
            <button className="btn-in">تسجيل دخول</button>
            <div className="or">
              <p>or</p>
            </div>
            <div className="div-bottom">
              <button className="create">انشاء حساب</button>

            </div>
          </form>
        </div>



      </div>
    </div>
  );

}
export default LoginInAdmin;