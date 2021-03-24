import React from "react";
import "./home.css";
import TopNav from "../../common/TopNav";
import Container from "./Container";

function Home() {
  return (
    <div>
      <section className="page">
        <div className="container">
          <TopNav />
          <Container />
        </div>
      </section>
    </div>
  );
}

export default Home;
