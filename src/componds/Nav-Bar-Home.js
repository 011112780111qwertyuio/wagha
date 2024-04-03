import React, { useState } from "react";
import '../styles/style-componds/style-nav-home.css';
import Logo from "./Logo";
import ModalNavHome from "./Modal-nav-home";
function NavBarHome({ typepage }) {
  const [modalnav, setmodalnav] = useState(false);
  const showModal = () => {
    setmodalnav(modalnav === false ? true : false);
  }
  return (
    <div className="myhead">
      <div className="content nav-bar-home">
        {/* larg screen */}
        <div className="larg-screen">
          <div className="left">
            <Logo />
          </div>
          <div className="right">
            <div className="button">
              <div className="flex-title">
                <a href="/" style={{ color: typepage === "home" ? 'red' : 'black' }} className="name">home</a>
                <i style={{ color: typepage === "home" ? 'red' : 'black' }} className="fa-solid fa-angle-down"></i>
              </div>
              <div className="pop-menue">

                <div>
                  <p className="active-title">home page</p>
                </div>
                <div>
                  <p className="active-title">home page v2</p>
                </div>
                <div>
                  <p className="active-title">home hotel</p>
                </div>
                <div>
                  <p className="active-title">home tour agency</p>
                </div>
                <div>
                  <p className="active-title">home tour</p>
                </div>
                <div>
                  <p className="active-title">home space</p>
                </div>


              </div>

            </div>
            <div className="button">
              <div className="flex-title">
                <a href="/tourpage" style={{ color: typepage === "tours" ? 'red' : 'black' }} className="name">tours</a>
                <i style={{ color: typepage === "tours" ? 'red' : 'black' }} className="fa-solid fa-angle-down"></i>
              </div>
              <div className="pop-menue">

                <div>
                  <p className="active-title">home page</p>
                </div>
                <div>
                  <p className="active-title">home page v2</p>
                </div>
                <div>
                  <p className="active-title">home hotel</p>
                </div>
                <div>
                  <p className="active-title">home tour agency</p>
                </div>
                <div>
                  <p className="active-title">home tour</p>
                </div>
                <div>
                  <p className="active-title">home space</p>
                </div>


              </div>

            </div>
            <div className="button">
              <div className="flex-title">
                <a href="" className="name">pages</a>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div className="pop-menue">

                <div>
                  <p className="active-title">home</p>
                </div>
                <div>
                  <p className="active-title">tours</p>
                </div>
                <div>
                  <p className="active-title">Magazines</p>
                </div>
                


              </div>

            </div>
            <div className="button">
              <div className="flex-title">
                <a style={{ color: typepage === "destination" ? 'red' : 'black' }} href="/destination" className="name">destination</a>
                <i style={{ color: typepage === "destination" ? 'red' : 'black' }} className="fa-solid fa-angle-down"></i>
              </div>
              <div className="pop-menue">

                <div>
                  <p className="active-title">home page</p>
                </div>
                <div>
                  <p className="active-title">home page v2</p>
                </div>
                <div>
                  <p className="active-title">home hotel</p>
                </div>
                <div>
                  <p className="active-title">home tour agency</p>
                </div>
                <div>
                  <p className="active-title">home tour</p>
                </div>
                <div>
                  <p className="active-title">home space</p>
                </div>


              </div>

            </div>
            <div className="button">
              <div className="flex-title">
                <a style={{ color: typepage === "Magazines" ? 'red' : 'black' }} href="/Magazines" className="name">Magazines</a>
                <i style={{ color: typepage === "Magazines" ? 'red' : 'black' }} className="fa-solid fa-angle-down"></i>
              </div>
              <div className="pop-menue">

                <div>
                  <p className="active-title">home page</p>
                </div>
                <div>
                  <p className="active-title">home page v2</p>
                </div>
                <div>
                  <p className="active-title">home hotel</p>
                </div>
                <div>
                  <p className="active-title">home tour agency</p>
                </div>
                <div>
                  <p className="active-title">home tour</p>
                </div>
                <div>
                  <p className="active-title">home space</p>
                </div>


              </div>

            </div>
            <div className="button">
              <div className="flex-title">
                <a style={{ color: typepage === "concat" ? 'red' : 'black' }} href="/concat" className="name">Concat</a>
                <i style={{ color: typepage === "concat" ? 'red' : 'black' }} className="fa-solid fa-angle-down"></i>
              </div>
              <div className="pop-menue">

                <div>
                  <p className="active-title">home page</p>
                </div>
                <div>
                  <p className="active-title">home page v2</p>
                </div>
                <div>
                  <p className="active-title">home hotel</p>
                </div>
                <div>
                  <p className="active-title">home tour agency</p>
                </div>
                <div>
                  <p className="active-title">home tour</p>
                </div>
                <div>
                  <p className="active-title">home space</p>
                </div>


              </div>

            </div>
          </div>
        </div>
        {/* stop larg screen */}
        {/* start mobile screen */}
        <div className="mobile-screen">
          <div className="left">
            <Logo />
          </div>
          <div className="right">
            <div onClick={showModal} className='button-menue'>
              <i className="fa-solid fa-bars"></i>
            </div>

          </div>
        </div>
        {/* stop mobile screen */}
        {/* start modal pop */}
        {modalnav &&
          <ModalNavHome showmodal={showModal} />
        }
        {/* stop modal pop */}
      </div>
    </div>
  )
}
export default React.memo(NavBarHome);