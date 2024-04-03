import React from "react";
import '../../admin-styles/pages-admin/login-up.css';
import LogoWeb from '../../componds/Logo';
function LoginUp() {

  return (
    <div className="login-up-admin">
      <div className="form">

        <div className="content-form">
          <div className="logo">
            <LogoWeb />
          </div>
          <form  method="get" >
            <p className="title">انشاء حساب مشرف</p>
            <div className="flex">
              <input type="text" placeholder="الاسم الاخير" />
              <input type="text" placeholder="الاسم الاول" />

            </div>
            <input type="text" placeholder="رقم الهاتف" />
            <br></br>
            <input type="text" placeholder="الايميل" />
            <br></br>
            <input type="password" placeholder="الباسورد" />
            <br></br>
            <input type="password" placeholder="اعد كتابة الباسورد" />

            <br></br>
            <button className="btn-in">انشاء حساب</button>
            <div className="or">
              <p>or</p>
            </div>
            <div className="div-bottom">
              <button onClick={()=>{window.location.href="/loginInAdmin"}} className="create">تسجيل دخول</button>
            </div>
          </form>
        </div>



      </div>  </div>
  );

}
export default LoginUp;