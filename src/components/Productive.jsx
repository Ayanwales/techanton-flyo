import React from "react";
import illustration2 from "../images/illustration-2.svg";
import arrow from "../images/icon-arrow.svg";
import quotes from "../images/icon-quotes.svg";
import avatar from "../images/avatar-testimonial.jpg";
const Productive = () => {
  return (
    <>
      <div className="productive-class">
        <div className="productive-left">
          <div className="productive-heading">
            <h1>Stay productive, wherever you are</h1>
          </div>
          <div className="productive-paragraphs">
            <p className="paragraph1">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your life storage needs.
            </p>
            <p className="paragraph2">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
          </div>
          <div className="productive-link">
            <a href="#">
              See how Flyo works
              <img src={arrow} alt="arrow-svg" />
            </a>
            <p className="underline">_________________</p>
          </div>
          <div className="productive-card">
            <img src={quotes} alt="quotes-svg" />
            <p className="productive-card-p">
              Flyo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="productive-profile">
              <img src={avatar} alt="avatar-testimony" />
              <div className="productive-card-name">
                <h3 className="card-heading">Kyle Burton</h3>
                <p className="card-paragraph">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
        <div className="productive-right">
          <img
            src={illustration2}
            alt="illustration2-img"
            className="illustration2"
          />
        </div>
      </div>
    </>
  );
};

export default Productive;
