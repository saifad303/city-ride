import React from "react";
import { NavLink } from "react-router-dom";
import Bus from "../../../images/Frame-1.png";
import Bike from "../../../images/Frame.png";
import Car from "../../../images/Frame-2.png";
import Train from "../../../images/Group.png";

function Container() {
  return (
    <>
      <div className="main-content">
        <div className="row">
          <div className="col-lg-3">
            <NavLink to="">
              <div className="card text-center" style={{ width: "14rem" }}>
                <img
                  className="card-img-top img-fluid ml-auto mr-auto"
                  src={Bus}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">BUS</h5>
                </div>
              </div>
            </NavLink>
          </div>
          <NavLink to="">
            <div className="col-lg-3">
              <div className="card text-center" style={{ width: "14rem" }}>
                <img
                  className="card-img-top img-fluid ml-auto mr-auto"
                  src={Bike}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">BIKE</h5>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="">
            <div className="col-lg-3">
              <div className="card text-center" style={{ width: "14rem" }}>
                <img
                  className="card-img-top img-fluid ml-auto mr-auto"
                  src={Car}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">CAR</h5>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="">
            <div className="col-lg-3">
              <div className="card text-center" style={{ width: "14rem" }}>
                <img
                  className="card-img-top img-fluid ml-auto mr-auto"
                  src={Train}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">TRAIN</h5>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Container;
