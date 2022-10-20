import React, { useState } from 'react'
import './Qualification.css';
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification & Experience</h2>
        <span className="section__subtitle">My personal Journey</span>

        <div className="qualification__container container">

          <div className="qualification__tabs">

            <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "qualification__button button__flex qualification-active" : "qualification__button button__flex"}>
              <i className="uil uil-graduation-cap qualification__icon"></i> Education
            </div>

            <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "qualification__button button__flex qualification-active" : "qualification__button button__flex"}>
              <i className="uil uil-document-info qualification__icon"></i> Certifications
            </div>

            <div onClick={() => toggleTab(3)} className={toggleState === 3 ? "qualification__button button__flex qualification-active" : "qualification__button button__flex"}>
              <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
            </div>

          </div>

          <div className="qualification__sections">

            <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

              <div className="qualification__data">              
                <div>
                  <h3 className="qualification__title">Intermediate</h3>
                  <span className="qualification__subtitle">FG Collage - Hyderabad</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2018 - 2020
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Matriculation</h3>
                  <span className="qualification__subtitle">Maryam School - Hyderabad</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2016 - 2018
                  </div>
                </div>
              </div>

            </div>

            <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Certfication in Web & Mobile App Development</h3>
                  <span className="qualification__subtitle">IBA - Karachi</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2021 - 2022
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Certfication in Website Development</h3>
                  <span className="qualification__subtitle">IBA - Karachi</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2021
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Certfication in Communication Design</h3>
                  <span className="qualification__subtitle">Arena Multimedia - Hyderabad</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>

            <div className={toggleState === 3 ? "qualification__content qualification__content-active" : "qualification__content"}>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Graphic Designer</h3>
                  <span className="qualification__subtitle">Kodersgeek</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2021 - 2022
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>

          </div>

        </div>
    </section>
  )
}

export default Qualification