import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

function Content() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let { signin } = useAuth();

  async function loginSubmitHandler(e) {
    e.preventDefault();

    try {
      setError("");
      await signin(email, password);
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <>
      <div className="form-content">
        <div className="row">
          <div className="col-lg-6 ml-auto mr-auto form-container">
            <h1 className="ml-18">Login</h1>
            {error ? (
              <div className="col-lg-11 ml-auto mr-auto">
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              </div>
            ) : (
              ""
            )}
            <form className="mr-auto ml-auto" onSubmit={loginSubmitHandler}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
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
