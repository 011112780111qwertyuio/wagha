import React, { useState } from "react";
import '../styles/style-componds/section-tour-plan.css';
function SectionTourPlan() {
  const [togglecard, settogglecard] = useState(false);

  const funToggleCard = (index) => {

    settogglecard(togglecard === false ? index : false);



  }


  return (
    <div className="section-tour-plan">
      <p className="title-plan">
        Tour Plan
      </p>
      <div className="flex-items">
        <div className={`${togglecard === "1" && "open-card"} mycard`}>

          <div onClick={() => { funToggleCard("1") }} className="flex-tile">

            <p>Day 1st</p>
            <span><i className="fa-solid fa-chevron-down"></i></span>
          </div>
          <div className="mycontent">
            <p>
              Lorem ipsum dolor sit amet, utinam munere antiopam vel ad. Qui eros iusto te. Nec ad feugiat honestatis. Quo illum detraxit an. Ius eius quodsi molestiae at, nostrum definitiones his cu. Discere referrentur mea id, an pri novum possim deterruisset.

            </p>
          </div>

        </div>
        <div className={`${togglecard === "2" && "open-card"} mycard`}>

          <div onClick={() => { funToggleCard("2") }} className="flex-tile">

            <p>Day 2st</p>
            <span><i className="fa-solid fa-chevron-down"></i></span>
          </div>
          <div className="mycontent">
            <p>
              Lorem ipsum dolor sit amet, utinam munere antiopam vel ad. Qui eros iusto te. Nec ad feugiat honestatis. Quo illum detraxit an. Ius eius quodsi molestiae at, nostrum definitiones his cu. Discere referrentur mea id, an pri novum possim deterruisset.

            </p>
          </div>

        </div>

        <div className={`${togglecard === "3" && "open-card"} mycard`}>

          <div onClick={() => { funToggleCard("3") }} className="flex-tile">

            <p>Day 3st</p>
            <span><i className="fa-solid fa-chevron-down"></i></span>
          </div>
          <div className="mycontent">
            <p>
              Lorem ipsum dolor sit amet, utinam munere antiopam vel ad. Qui eros iusto te. Nec ad feugiat honestatis. Quo illum detraxit an. Ius eius quodsi molestiae at, nostrum definitiones his cu. Discere referrentur mea id, an pri novum possim deterruisset.

            </p>
          </div>

        </div>


      </div>
    </div>
  )
}
export default React.memo(SectionTourPlan);