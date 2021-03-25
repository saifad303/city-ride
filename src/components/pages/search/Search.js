import React from "react";
import Content from "./Content";
import TopNav from "../../common/TopNav";
import "./search.css";

function Search() {
  return (
    <>
      <section className="search-page">
        <div className="container">
          <TopNav />
          <Content />
        </div>
      </section>
    </>
  );
}

export default Search;
