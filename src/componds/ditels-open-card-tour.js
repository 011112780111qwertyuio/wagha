import React from "react";
import '../styles/style-componds/ditels-open-card-tour.css';
function DitelsOpenCardTour() {

  return (
    <div className="ditels-card-torur">
      <p className="title">Explore Tours</p>
      <p className="sub-tile">Sed ut perspiciatis unde omniste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ip quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.</p>
      <div className="flex-content">
        <div className="left">
          <p className="title">Advance Facilities</p>
          <p className="sub-tile">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="title">Challenge</p>
          <p className="sub-tile">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore quasi architecto beatae vitae dicta.</p>

        </div>
        <div className="right">
          <img src="assets/images/img1.jpg" alt="" />
        </div>
      </div>
      <div className="myoptions">
        <p className="mytile">
          Included/Exclude
        </p>

        <div className="flex-lest">
          <div className="left">
            <ul className="le">
              <li><i className="fa-solid fa-check"></i>Pick and Drop Services</li>
              <li><i className="fa-solid fa-check"></i>1 Meal Per Day</li>
              <li><i className="fa-solid fa-check"></i>Cruise Dinner & Music Event</li>
              <li><i className="fa-solid fa-check"></i>Visit 7 Best Places in the City With Group</li>

            </ul>
          </div>
          <div className="right">
            <ul className="ri">
              <li><i className="fa-solid fa-xmark"></i> Additional Services</li>
              <li><i className="fa-solid fa-xmark"></i>Insurance</li>
              <li><i className="fa-solid fa-xmark"></i>Food & Drinks</li>
              <li><i className="fa-solid fa-xmark"></i>Tickets</li>

            </ul>
          </div>
        </div>


      </div>
      <div className="section-Amenities">
        <p className="mytile-Amenities">
          Tour Amenities</p>

        <div className="flex-amenities">
          <div>
            <div className="item">
              <i className="fa-regular fa-credit-card"></i>
              <label>Accepts Credit Cards</label>
            </div>
            <div className="item">
              <i className="fa-brands fa-slack"></i>                  <label>Laundry Service</label>
            </div>
          </div>
          <div>
            <div className="item">
              <i className="fa-solid fa-sun-plant-wilt"></i>
              <label>Outdoor Seating</label>
            </div>
            <div className="item">
              <i className="fa-solid fa-bell-concierge"></i>
              <label>Reservations</label>
            </div>
          </div>
          <div>
            <div className="item">
              <i className="fa-solid fa-utensils"></i>
              <label>Restaurant</label>
            </div>
          </div>

        </div>



      </div>
      <div className="section-Tour-Plan">

      </div>

    </div>
  );

}
export default React.memo(DitelsOpenCardTour);