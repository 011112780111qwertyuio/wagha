import React from "react";
import '../styles/style-componds/section-user.css';
function SectionUser() {
  return (
    <div className="section-user">

      <div className="content">
      
        <p className="title">Our happy clients</p>

        <div className="flex-cards">
          <div className="card">
            <div className="flex-top">
              <div className="img">
                <img src="assets/images/avatar1.jpg" alt=""/>
              </div>
              <div className="flex-ditls">
                <p>ahmed</p>
                <div className="flex-starts">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <p className="myditls">
              Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in dui.
            </p>

          </div>
          <div className="card">
            <div className="flex-top">
              <div className="img">
                <img src="assets/images/avatar2.jpg" alt=""/>
              </div>
              <div className="flex-ditls">
                <p>aslam</p>
                <div className="flex-starts">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <p className="myditls">
              Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in dui.
            </p>

          </div>
          <div className="card">
            <div className="flex-top">
              <div className="img">
                <img src="assets/images/avatar3.jpg" alt=""/>
              </div>
              <div className="flex-ditls">
                <p>yassen</p>
                <div className="flex-starts">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <p className="myditls">
              Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in dui.
            </p>

          </div>

        </div>


      </div>


    </div>
  )


}
export default React.memo(SectionUser);