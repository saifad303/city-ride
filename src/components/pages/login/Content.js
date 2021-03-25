import React from "react";
import { NavLink } from "react-router-dom";

function Content() {
  return (
    <>
      <div className="form-content">
        <div className="row">
          <div className="col-lg-6 ml-auto mr-auto form-container">
            <h1 className="ml-18">Login</h1>
            <form className="mr-auto ml-auto">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
                <a href="">Forget Password</a>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
            <h2 className="text-center">
              Don't have an account?{" "}
              <NavLink to="/signup">Create an account.</NavLink>
            </h2>
          </div>
          <div className="col-lg-12">
            <div className="col-lg-6 ml-auto mr-auto or-line">
              <span className="line"></span>
              <span className="or">
                <p>Or</p>
              </span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="col-lg-6 ml-auto mr-auto">
              <div className="social facebook">
                <a href="">
                  <i className="fab fa-facebook-f"></i>
                  <span>Continue With Facebook</span>
                </a>
              </div>
              <div className="social gmail">
                <a href="">
                  <i className="fab fa-google"></i>
                  <span>Continue With Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
