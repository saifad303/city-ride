import React from "react";
import Bike from "../../../images/Frame.png";

function Content() {
  return (
    <div className="search-list">
      <div className="container pl-0 pr-0">
        <div className="row">
          <div className="col-lg-4 mr-auto form-container pl-0">
            <div className="card">
              <div className="card-body-parent">
                <div className="card-body">
                  <h5 className="card-title">Mirpur 1</h5>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Dhanmondi</h5>
                </div>
                <div className="shape">
                  <div className="dot dot-1"></div>
                  <div className="vertical-line"></div>
                  <div className="dot dot-2"></div>
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="img">
                    <img src={Bike} className="img-fluid" />
                  </span>
                  <span className="ride-info">
                    <p>Car</p>
                    <i className="fas fa-user-friends"></i>
                    <p>67$</p>
                  </span>
                  <span className="pricing"></span>
                </li>
                <li className="list-group-item">
                  <span className="img">
                    <img src={Bike} className="img-fluid" />
                  </span>
                  <span className="ride-info">
                    <p>Car</p>
                    <i className="fas fa-user-friends"></i>
                    <p>67$</p>
                  </span>
                  <span className="pricing"></span>
                </li>
                <li className="list-group-item">
                  <span className="img">
                    <img src={Bike} className="img-fluid" />
                  </span>
                  <span className="ride-info">
                    <p>Car</p>
                    <i className="fas fa-user-friends"></i>
                    <p>67$</p>
                  </span>
                  <span className="pricing"></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 mr-auto p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703692693!2d90.27923991057244!3d23.780573258035957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1616526141574!5m2!1sen!2sbd"
              width="100%"
              height="450"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
