import React from "react";
import customer1 from "../../../images/customer-1.png";
import customer2 from "../../../images/customer-2.png"
import customer3 from "../../../images/customer-3.png"
import './ClientFeedback.css'
const ClientFeedback = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center"> Feedback</h1>
      <p className="text-center mt-3">
        Some of our largest backers, who continue to work with us and are
        extremely
        <br />
        satisfied with our service delivery, playing a major part in
        jumpstarting their
        <br />
        respective business’ overall infrastructure.
      </p>
      <div className="row top">
        <div className="col-md-4 sm-6 col-12 text-center">
          <div className="profile">
            <img src={customer1} className="user" alt="" />
            <blockquote>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </blockquote>
            <h3> Olivia  <span>Co-Founder XYZ</span></h3>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="profile">
            <img src={customer2} className="user" alt="" />
            <blockquote>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </blockquote>
            <h3> Willam James <span>CEO XYZ</span></h3>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="profile">
            <img src={customer3} className="user" alt="" />
            <blockquote>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </blockquote>
            <h3> Avinas Kr <span>Founder XYZ</span></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
