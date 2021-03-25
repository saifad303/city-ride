import React from "react";
import TopNav from "../../common/TopNav";
import Content from "./Content";
import "./signup.css";

function SignUp() {
  return (
    <>
      <section className="signup-page">
        <div className="container">
          <TopNav />
          <Content />
        </div>
      </section>
    </>
  );
}

export default SignUp;
