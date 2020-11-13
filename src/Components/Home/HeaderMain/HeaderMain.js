import React from "react";
import { Link } from "react-router-dom";
import './HeaderMain.css'
const HeaderMain = () => {
  return (
  <div className="container head ">
    <div class="row ">
      <div class="col-sm-12">
        <div class="heading text-center">
          <h1 class="display-5 text-white">SEE WHY CUSTOMERS LOVE KRAZY IT</h1>
          <p className="text-white ">
            We are the leader in developing, implementing and deliver
            Information Security services, courses, trainings & solutions for
            professionals and corporate world. We provide cyber security
            courses, services, and solutions for a wide range of industries.{" "}
          </p>
          <Link to="/login" className="login-btn" href="#">Start From $100</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeaderMain;
