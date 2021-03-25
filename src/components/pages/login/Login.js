import React from "react";
import TopNav from "../../common/TopNav";
import Content from "./Content";
import "./login.css";

function Login() {
  return (
    <>
      <section className="login-page">
        <div className="container">
          <TopNav />
          <Content />
        </div>
      </section>
    </>
  );
}

export default Login;
