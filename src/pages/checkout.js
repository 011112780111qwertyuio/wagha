import React from "react";
import NavparHome from '../componds/Nav-Bar-Home';
import NavparControl from '../componds/nav-bar-control';
import '../styles/style-pages/checkout.css';
import Fotter from '../componds/fotter-home';
import SectionAlboum from '../componds/section-alboum-main';
function Checkout() {

  return (
    <>
      <NavparControl />
      <NavparHome />
      <div className="head checkout">
        <SectionAlboum title={"BA Checkout"} subitel={""} />
        <div className="flex-section content">
          <div className="left">
            <div className="top">
              <p>Order #240330-201756981</p>
            </div>

            <div className="flex-card">
              <div className="left-card">


                <div className="hide-mobile">
                  <div className="img">
                    <img src="assets/images/img1.jpg" alt="" />
                  </div>
                </div>

                <div className="content-card">
                  <p className="mytile">Man Standing on a Rock</p>
                  <p><span>Date</span> match 31,2024 time 6.00am</p>
                  <p><span>duration</span>3 days</p>
                  <span>tickets</span>
                  <p>childrenx1=$129.00</p>

                </div>

              </div>
              <div className="right-card">
                <p>$129.00</p>
              </div>
            </div>

            <div className="table">
              <div className="flex-table">
                <div className="ma">Subtotal:</div>
                <div>$129.00</div>
              </div>
              <div className="flex-table">
                <div className="ma"> Total:</div>
                <div>$129.00</div>
              </div>
              <div className="flex-table">
                <div className="ma"> Amount Paid:</div>
                <div>$0.00</div>
              </div>
              <div className="flex-table">
                <div className="ma"> Amount Due:</div>
                <div className="active">$169.00</div>
              </div>

            </div>

          </div>
          <div className="right">
            <div className="title">Contact information</div>
            <form method="get">

              <label>First name </label>
              <br></br>
              <input type="text" />
              <br></br>
              <label>Last name </label>
              <br></br>
              <input type="text" />
              <br></br>
              <label>email</label>
              <br></br>
              <input type="text" />
              <br></br>
              <label>Re-type Email </label>
              <br></br>
              <input type="text" />
              <br></br>
              <label>Contact Phone </label>
              <br></br>
              <input type="text" />
              <div className="myfit">
                <div><p>Amount to Pay:</p></div>
                <div>
                  <input type="radio" id="f" />
                  <label for="f">$129.00</label>
                </div>

              </div>
            </form>
            <div className="box">
              <p className="mytile-box">Payment Method</p>




              <div className="flex-btn">
                <p className="top">pay later</p>
                <p className="secend">book now,pay later!</p>
              </div>
              <div className="flex-radio">
                <input type="checkbox" id="e" />
                <label for="e">I read and agree to the terms & conditions</label>
              </div>
              <div className="content-text">
                You have to edit “Terms & Conditions” page to replace this start content with your own.


              </div>
              <button>complete my order</button>
            </div>



          </div>
        </div>
      </div>
      
      <Fotter />
    </>
  );

}
export default Checkout;