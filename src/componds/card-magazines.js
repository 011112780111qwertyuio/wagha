import React from "react";
import '../styles/style-componds/card-magazines.css';
function Magazines() {

  return (
    <div className="card-magazines">
      <div className="view-card">
        <img src="assets/images/img1.jpg" alt=""/>
        <div className="title-top">
          <p>19</p>
          <span>dec</span>
        </div>
        <div className="btn-bottom">
          <p>adventure</p>
        </div>

      </div>

      <div className="content-card">
        <div className="flex">
          <div>
            <span><i className="fa-solid fa-comments"></i></span>
            <label>0 comments</label>
          </div>
          <div>
            <span><i className="fa-solid fa-user"></i></span>
            <label>0 admin</label>
          </div>
        </div>
        <p className="title">Things to see and do when visiting Japan</p>
        <p className="sub-content">There are many variations of but the majority have simply free text.</p>
        <div className="flex-get">
          <p>read more</p>
          <span><i className="fa-solid fa-arrow-right"></i></span>
        </div>
      </div>

    </div>
  )

}
export default React.memo(Magazines);