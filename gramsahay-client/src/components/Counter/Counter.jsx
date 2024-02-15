import React, { useState } from 'react';
import './Counter.css'
const Counter = () => {

    //fetch data from backend and add here
    const [completed, setCompleted] = useState(1500);
    const [inprocess, setInProcess] = useState(1200);
    const [newc, setNew] = useState(800);
  return (
    <>
      <section className="section section-work-data">
        <div className="section-container grid grid-three-column">
          <div>
            <h2 className="counter-numbers" data-number="1000">
                {completed}+
            </h2>
            <p>Completed Complaints</p>
          </div>
          <div>
            <h2 className="counter-numbers" data-number="2000">
              {inprocess}+
            </h2>
            <p>In-Process Complaints</p>
          </div>
          <div>
            <h2 className="counter-numbers" data-number="3000">
              {newc}+
            </h2>
            <p>New Complaints</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
