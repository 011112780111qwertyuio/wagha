import React from "react";
import '../styles/style-componds/booking-form.css';
function BokingForm() {

  return (
    <div className="boking-form">
      <div className="mycard-sumation">

        <div className="title">
          <p>Booking Tour</p>
        </div>

        <div className="flex-date">
          <label>From</label>
          <div>
            <span><i className="fa-regular fa-calendar-days"></i></span>
            <p>22/03/2024</p>
          </div>
        </div>


        <div className="flex-dt-time">
          <label>Time</label>
          <div className="flex-radio">
            <div>
              <input id="h" name="e" type="radio" /><label name="e" htmlFor="h">10.00</label>

            </div>
            <div>
              <input id="d" name="e" type="radio" /><label name="e" htmlFor="d">12.00</label>

            </div>
          </div>
        </div>



        <p className="title-select">Tickets:</p>

        <div className="flex-children">

          <p>Children (0-12 years)$129.00</p>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>

          </select>

        </div>



        <div className="flex-children">
          <p>Youth (13-17 years)$169.00</p>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>

          </select>
        </div>
        <div className="flex-children">
          <p>Adult (18+ years)$189.00</p>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>

          </select>
        </div>

        <div className="spce-between">
          <div>
            <input id="v" type="checkbox" /><label htmlFor="v">Service per booking</label>
          </div>
          <p>
            $30.00
          </p>
        </div>

        <div className="spce-between-column">
          <p>Add Extra</p>
          <div>
            <div>
              <input id="f" type="checkbox" /><label htmlFor="f">Service per person</label>

            </div>
            <div>
              <p>Children:<span>$18.00</span></p>
              <p>Youth:<span>$16.00</span></p>

            </div>
          </div>

        </div>


        <div className="button">
          <div className="title-flex">
            <label>Total:</label>
            <p>$129.00</p>
          </div>
          <div className="btn-center">
            <div onClick={() => { window.location.href = "/check-box" }}>
              <span><i className="fa-solid fa-cart-shopping"></i></span>
              <p>Book Now</p>
            </div>
          </div>
        </div>






      </div>
      <div className="mycard-information">
        <p className="title">Tour Information</p>
        <div className="flex-information">
          <span><i className="fa-solid fa-user-group"></i></span>
          <div>
            <p>Max Guests</p>
            <label>10</label>

          </div>
        </div>


        <div className="flex-information">
          <span><i className="fa-solid fa-user"></i></span>
          <div>
            <p>Min Age</p>
            <label>12+</label>

          </div>
        </div>

        <div className="flex-information">
          <span><i className="fa-solid fa-plane"></i></span>
          <div>
            <p>Tour Location</p>
            <label>Japan</label>

          </div>
        </div>

        <div className="flex-information">
          <span><i className="fa-solid fa-globe"></i></span>
          <div>
            <p>Languages Support</p>

          </div>
        </div>



      </div>

    </div>
  );

}
export default React.memo(BokingForm);